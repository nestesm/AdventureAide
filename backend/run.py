from contextlib import asynccontextmanager

from fastapi import FastAPI

from config import settings as global_settings
from utils import get_logger, init_mongo

if global_settings.environment == "local":
    get_logger("uvicorn")


@asynccontextmanager
async def lifespan(app: FastAPI):
    app.state.logger = get_logger(__name__)
    app.state.logger.info("Start")
    app.state.mongo_client, app.state.mongo_db, app.state.mongo_collection = await init_mongo(
        global_settings.db_name, global_settings.db_url, global_settings.collection
    )
    try:
        yield
    finally:
        app.state.logger.info("End")

app = FastAPI(lifespan=lifespan, title="API", version="0.0.0")

async def get_mongo_meta() -> dict:
    list_databases = await app.state.mongo_client.list_database_names()
    list_of_collections = {}
    for db in list_databases:
        list_of_collections[db] = await app.state.mongo_client[db].list_collection_names()
    mongo_meta = await app.state.mongo_client.server_info()
    return {"version": mongo_meta["version"], "databases": list_databases, "collections": list_of_collections}


@app.get("/test")
async def check():
    return await get_mongo_meta()