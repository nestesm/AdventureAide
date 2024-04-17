import os

from pydantic_settings import BaseSettings
from dotenv import load_dotenv

load_dotenv()

class Settings(BaseSettings):
    
    environment: str = os.getenv("ENVIRONMENT", "local")
    testing: str = os.getenv("TESTING", "0")
    db_url: str = os.getenv("MONGO_URL", "")
    db_name: str = os.getenv("MONGO_DB", "")
    collections: str = os.getenv("MONGO_COLLECTIONS", "")
    jwt_secret: str = os.getenv("JWT_SECRET", "")
    jwt_algorithm: str = 'HS256'
    jwt_expires_s: int = 3600
    openai_api_key: str = os.getenv("OPEN", "")


settings = Settings()