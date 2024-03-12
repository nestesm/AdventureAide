from pydantic import BaseModel
from typing import Optional
from bson import ObjectId

class MongoModel(BaseModel):
    id: Optional[str] = str(ObjectId())