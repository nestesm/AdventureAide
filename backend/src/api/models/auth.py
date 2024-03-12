from pydantic import BaseModel, Field, EmailStr,validator
from bson import ObjectId
from typing import Optional
from enum import Enum


class Gender(str, Enum):
    MALE = "male"
    FEMALE = "female"

class UserSchemas(BaseModel):
    email: EmailStr = Field(...)
    gender: Gender
    password: str
    full_name: Optional[str] = None
    disabled: Optional[bool] = None

    class Config:
        populate_by_name = True
        from_attributes = True
        json_encoders = {ObjectId: str}
        json_schema_extra = {
            "example": {
                "fullname": "John Doe",
                "last_name": "Ilgu",
                "email": "can@gmail.com",
                "password": "123456"
            }
        }

class UserCreate(UserSchemas):
    pass

class UserUpdate(BaseModel):
    full_name: Optional[str] = None
    disabled: Optional[bool] = None

class UserInDB(UserSchemas):
    id: str

class Token(BaseModel):
    access_token: str
    token_type: str = 'bearer'