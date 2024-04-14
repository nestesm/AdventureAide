from fastapi import (
    APIRouter,
    Depends,
)

from api import models

router = APIRouter(
    prefix='/routes',
    tags=['routes'],
)

# get all routes by filter 
@router.get(
    '/'
)
async def get_routes():
    return await {}

# create new route
@router.post(
    '/'
)
async def create_route():
    return await {}

@router.get(
    '/'
)
async def create_route():
    return await {}


