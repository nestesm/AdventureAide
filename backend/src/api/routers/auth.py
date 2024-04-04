from fastapi import (
    APIRouter,
    Depends,
    status,
)
from fastapi.security import OAuth2PasswordRequestForm

from api import models
from api.services.auth import (
    AuthService,
)

router = APIRouter(
    prefix='/auth',
    tags=['auth'],
)


@router.post(
    '/sign-up',
    response_model=models.Token,
    status_code=status.HTTP_201_CREATED,
)
async def sign_up(
        user_data: models.UserCreate,
        auth_service: AuthService = Depends(),
):
    return await auth_service.register_user(user_data)


@router.post(
    '/sign-in',
    response_model=models.Token,
)
async def sign_in(
        auth_data: OAuth2PasswordRequestForm = Depends(),
        auth_service: AuthService = Depends(),
):
    return await auth_service.authenticate_user(
        auth_data.username,
        auth_data.password,
    )
    