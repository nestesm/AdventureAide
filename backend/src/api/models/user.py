from pydantic import BaseModel, Field, EmailStr
from bson import ObjectId
from typing import Optional

from api.models.mongo import MongoModel


class User(BaseModel):
    email: EmailStr = Field(...)
    fullname: Optional[str] = None
    disabled: Optional[bool] = None
    

class UserCreate(User):
       password: str  
       class Config:
        populate_by_name = True
        from_attributes = True
        json_encoders = {ObjectId: str}
        json_schema_extra = {
            "example": {
                "fullname": "John Doe",
                "gender": "male",
                "email": "example@example.com",
                "password": "123456"
            }
        }

class UserInDB(User, MongoModel):
    id: Optional[str] = Field(default=None, alias="_id")
    password: str  

class UserLogin(BaseModel):
    email: EmailStr = Field(...)
    password: str = Field(...)

    class Config:
        json_schema_extra = {
            "example": {
                "email": "example@example.com",
                "password": "123456"
            }
        }