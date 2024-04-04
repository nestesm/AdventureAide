
from motor.motor_asyncio import AsyncIOMotorClient
from typing import List, Optional
from fastapi import HTTPException
from fastapi.responses import JSONResponse
from pydantic import BaseModel

from config import settings
from api.models.mongo import MongoModel

class MongoService:
    def __init__(self) -> None:
        self.client = None
        self.name = None

    async def connect_to_mongo(self):
        self.client = AsyncIOMotorClient(settings.db_url)
        self.name = settings.db_name
        return self.client

    async def close_mongo_connection(self):
        self.client.close()

    async def is_exists(self, collection: str, field: str, value: str) -> bool:
        result = await self.client[self.name][collection].find_one({f"{field}": value})
        return bool(result)

    async def create(self, collection: str, object: MongoModel) -> MongoModel: 
        result = await self.client[self.name][collection].insert_one(object)
        object["id"] = str(result.inserted_id)
        return object
    
    async def get(self, collection: str, field: str, value: str, model: MongoModel ) -> Optional[MongoModel]:
        result = await self.client[self.name][collection].find_one({f"{field}": value})
        if result:
            return model(**result)
        else:
            return None
    



    ##### -- after -- ####

    async def update(self, collection: str, field: str, value: str, data: dict) -> BaseModel:
        update_data = {k: v for k, v in update_data.items() if v is not None}
        result = await self.client[self.name][collection].update_one(
            {f"{field}": value},
            {"$set": update_data}
        )
        if result.modified_count >= 1:
            return JSONResponse(status_code=200, content={"message": True})
        
        raise HTTPException(status_code=404, detail="Object not found / no any new data!")
    
    async def delete(self, collection, field: str = "", value: str = "") -> None:
        if await self.is_exists(collection, field, value):
            return None
        result = await self.client[self.name][collection].delete_one({f"{field}": value})
        if result.deleted_count != 1:
            raise HTTPException(status_code=404, detail="Object not found")
    
    async def get_all(self, collection: str, skip: int = 0, limit: int = 5, sort_by: Optional[str] = None, model_cls: MongoModel = None) -> List[MongoModel]:
        query = {}
        sort = []
        if sort_by:
            sort.append((sort_by, 1))
        result = self.client[self.name][collection].find(query, skip=skip, limit=limit, sort=sort)
        return [model_cls(**doc) async for doc in result]

db_mongo = MongoService()