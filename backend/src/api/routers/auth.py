from fastapi import (
    APIRouter,
    Depends,
    status,
)

from api import models
from api.services.auth import (
    AuthService,
    get_current_user,
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
def sign_up(
        user_data: models.UserCreate,
        auth_service: AuthService = Depends(),
):
    return auth_service.register_user(user_data)


@router.post(
    '/sign-in',
    response_model=models.Token,
)
def sign_in(
        auth_data: models.UserSchemas,
        auth_service: AuthService = Depends(),
):
    return auth_service.authenticate_user(
        auth_data.email,
        auth_data.password,
    )


@router.get(
    '/user',
    response_model=models.UserSchemas,
)
def get_user(user: models.UserSchemas = Depends(get_current_user)):
    return user


@router.put(
    '/user',
    response_model=models.UserUpdate,
)
def get_user(user: models.UserSchemas ):
    return user