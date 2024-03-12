from motor.motor_asyncio import AsyncIOMotorClient

from config import settings


class GenerateDataDB:

    def __init__(self, db_url: str, db_name: str) -> None:
        self.db_url: str = db_url
        self.db_name: str = db_name

    async def init_mongo(self, collections: tuple):
        async with AsyncIOMotorClient(self.db_url) as mongo_client:
            db_list = await mongo_client.list_database_names()
            if self.db_name not in db_list:
                await mongo_client[self.db_name].command('createDatabase', self.db_name)

            mongo_database = mongo_client[self.db_name]
            mongo_collections = dict()

            for collection in collections:
                collection_list = await mongo_database.list_collection_names()
                if collection not in collection_list:
                    try:
                        await mongo_database.create_collection(collection)
                    except:
                        pass
                mongo_collections[collection] = mongo_database.get_collection(collection)

            return mongo_client, mongo_database, mongo_collections


async def main():
    generator = GenerateDataDB(settings.db_url, settings.db_name)
    collection_names = tuple(map(str, settings.collections.split(',')))
    await generator.init_mongo(collection_names)

if __name__ == '__main__':
    import asyncio
    asyncio.run(main())