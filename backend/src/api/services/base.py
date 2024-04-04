from abc import ABC, abstractmethod
from typing import Dict
from pydantic import BaseModel
from api.services.mongo import db_mongo

class BaseService(ABC):

    def __init__(self, collection: str, model_cls: BaseModel):
        self.collection = collection
        self.model_cls = model_cls

    @abstractmethod
    async def create(self, data: BaseModel) -> Dict:
        pass

    async def get(self, field: str , value: str):
        result = await db_mongo.get(self.collection, field, value, self.model_cls)
        return result

    async def get_all(self, model):
        return await db_mongo.get_all(self.collection, model_cls=model)

    async def update(self, field: str = "", value: str = "", new_data: BaseModel = None):
        return await db_mongo.update(self.collection, field, value, new_data)


    async def delete(self, field: str) -> Dict:
        return await db_mongo.delete(self.collection, field )
