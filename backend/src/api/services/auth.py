from fastapi import (
    Depends,
    HTTPException,
    status,
)
from fastapi.security import OAuth2PasswordBearer
from jose import (
    JWTError,
    jwt,
)

from datetime import (
    datetime,
    timedelta,
)

from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorCollection

from passlib.hash import bcrypt
from pydantic import ValidationError
from bson import ObjectId

from api import models
from api.services.user import UserService
from config import settings as global_settings

oauth2_scheme = OAuth2PasswordBearer(tokenUrl='/auth/sign-in/')

def get_current_user(token: str = Depends(oauth2_scheme)):
    return AuthService.verify_token(token)

class AuthService:

    @classmethod
    def varify_password(cls, password: str, hash: str) -> bool:
        return bcrypt.verify(password, hash)

    @classmethod
    def hash_password(cls, password: str) -> str:
        return bcrypt.hash(password)
    
    @classmethod
    def create_token(cls, user: models.UserSchemas) -> str:
        now = datetime.utcnow()
        payload = {
            'iat': now,
            'nbf': now,
            'exp': now + timedelta(seconds=global_settings.jwt_expires_s),
            'sub': str(user.id),
            'user': user.dict(),
        }
        token = jwt.encode(
            payload,
            global_settings.jwt_secret,
            algorithm=global_settings.jwt_algorithm,
        )
        return models.Token(access_token=token)
        
    @classmethod
    def verify_token(cls, token: str) -> models.UserSchemas:
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
            user = models.UserSchemas.parse_obj(user_data)
        except ValidationError:
            raise exception from None

        return user

    async def register_user(self, data: models.UserCreate) ->models.Token:  
        result = await UserService.create(data.dict())
        user = models.UserInDB(**data.dict(), id=str(result.inserted_id))
        return self.create_token(user)
    
    async def authenticate_user(self, email: str, password: str) -> models.Token:
        exception = HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail='Incorrect email or password',
            headers={'WWW-Authenticate': 'Bearer'},
        )
        user = await UserService.get("email", email)
       
        if not user:
            raise exception
        
        if not self.varify_password(password, user.password):
            raise exception
        
        return self.create_token(user)
