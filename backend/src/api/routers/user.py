from fastapi import (
    APIRouter,
    Depends,
)

from api.services.auth import (
    get_current_user,
)

from api import models

router = APIRouter(
    prefix='/users',
    tags=['users'],
)

@router.get(
    '/user',
    response_model=models.User,
)
async def get_user(user = Depends(get_current_user)):
    return await user