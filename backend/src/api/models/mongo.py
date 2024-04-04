from pydantic import BaseModel, validator
from bson import ObjectId
from pydantic import BaseModel

class MongoModel(BaseModel):
    @validator('*', pre=True, allow_reuse=True)
    def convert_objectid_to_str(cls, v):
        if isinstance(v, ObjectId):
            return str(v)
        return v

    class Config:
        arbitrary_types_allowed = True
        json_encoders = {
            ObjectId: lambda oid: str(oid),
        }
