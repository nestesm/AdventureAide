from fastapi import (
    Depends,
    HTTPException,
    status,
)
from fastapi.security import OAuth2PasswordBearer
from fastapi.responses import JSONResponse
from jose import (
    JWTError,
    jwt,
)

from datetime import (
    datetime,
    timedelta,
)

from passlib.hash import argon2
from pydantic import ValidationError

from api import models
from api.services.user import user_service
from config import settings as global_settings

oauth2_scheme = OAuth2PasswordBearer(tokenUrl='/auth/sign-in/')


async def get_current_user(token: str = Depends(oauth2_scheme)) ->models.Token:
    user_data = AuthService.verify_token(token)  
    return user_service.get('email', user_data.email)

class AuthService:

    @classmethod
    def varify_password(cls, password: str, hash: str) -> bool:
        return argon2.verify(password, hash)

    @classmethod
    def hash_password(cls, password: str) -> str:
        return argon2.hash(password)
    
    @classmethod
    def create_token(cls, user: models.User) -> str:
        now = datetime.utcnow()
        
        token_data = models.TokenData(**user.dict())
        
        payload = {
            'iat': now,
            'nbf': now,
            'exp': now + timedelta(seconds=global_settings.jwt_expires_s),
            'sub': str(user.id),
            'user': token_data.dict(),
        }
        token = jwt.encode(
            payload,
            global_settings.jwt_secret,
            algorithm=global_settings.jwt_algorithm,
        )
        return models.Token(access_token=token)
        
    @classmethod
    def verify_token(cls, token: str) -> models.User:
        exception = HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail='Could not validate credentials',
            headers={'WWW-Authenticate': 'Bearer'},
        )
        try:
            payload = jwt.decode(
                token,
                global_settings.jwt_secret,
                algorithms=[global_settings.jwt_algorithm],
            )
        except JWTError:
            raise exception from None

        user_data = payload.get('user')

        try:
            user = models.TokenData.parse_obj(user_data)
            
        except ValidationError:
            raise exception from None

        return user

    async def register_user(self, data: models.User) ->models.Token:  
        exception = HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail='Incorrect data for save',
            headers={'WWW-Authenticate': 'Bearer'},
        )
        
        user = await user_service.get('email', data.email)
        
        if user:
            raise exception
        
        data.password = self.hash_password(data.password)
        
        result = await user_service.create(data.dict())
        if not result:
            raise exception
        
        user = models.UserInDB(**data.dict(), id=result['id'])
        return self.create_token(user)

         
    async def authenticate_user(self, email: str, password: str) -> models.Token:
        exception = HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail='Incorrect email or password',
            headers={'WWW-Authenticate': 'Bearer'},
        )
        user = await user_service.get('email', email)
       
        if not user:
            raise exception
        
        if not self.varify_password(password, user.password):
            raise exception
        
        return self.create_token(user)

