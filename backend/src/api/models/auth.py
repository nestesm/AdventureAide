from pydantic import BaseModel, Field, EmailStr
from typing import Optional


class Token(BaseModel):
    access_token: str
    token_type: str = 'bearer'
    
class TokenData(BaseModel):
    email: EmailStr = Field(...)
    fullname: Optional[str] = None