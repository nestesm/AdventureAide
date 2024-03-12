from fastapi.responses import JSONResponse
from fastapi import status

from api.services.mongo import db_mongo
from api.services.base import BaseService
from api.models import UserSchemas

class UserService(BaseService):
    def __init__(self):
        super().__init__("users", UserSchemas)

    async def create(self, data: dict):
        result = await db_mongo.create(self.collection, data)
        if result:
            return JSONResponse(status_code = status.HTTP_201_CREATED, content = { "data": result } )
    
        return JSONResponse(status_code = status.HTTP_409_CONFLICT, content = { "data": result } )