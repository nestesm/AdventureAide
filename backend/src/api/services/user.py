from fastapi.responses import JSONResponse
from fastapi import status

from api.services.mongo import db_mongo
from api.services.base import BaseService
from api.models import UserInDB

class UserService(BaseService):
    def __init__(self):
        super().__init__("users", UserInDB)

    async def create(self, data: dict):
        result = await db_mongo.create(self.collection, data)
        return result

user_service = UserService()