from contextlib import asynccontextmanager

from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware


from api import routers as api
from config import settings as global_settings
from utils import get_logger
from api.services.mongo import db_mongo

if global_settings.environment == "local":
    get_logger("uvicorn")


@asynccontextmanager
async def lifespan(app: FastAPI):
    app.state.logger = get_logger(__name__)
    app.state.logger.info("Start")
    app.state.mongo_client = await db_mongo.connect_to_mongo()
    try:
        yield
    finally:
        db_mongo.close_mongo_connection()
        app.state.logger.info("End")
        
        
app = FastAPI(lifespan=lifespan, title="API", version="0.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/test")
async def check():
    list_databases = await app.state.mongo_client.list_database_names()
    list_of_collections = {}
    for db in list_databases:
        list_of_collections[db] = await app.state.mongo_client[db].list_collection_names()
    mongo_meta = await app.state.mongo_client.server_info()
    return {"version": mongo_meta["version"], "databases": list_databases, "collections": list_of_collections}


app.include_router(api.router)