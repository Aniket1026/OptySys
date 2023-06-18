# Purpose: Main file for FastAPI application
# Path: backend\app\main.py

from fastapi import FastAPI
from fastapi.middleware import Middleware
from fastapi.middleware.cors import CORSMiddleware

from app.config import settings
from app.middlewares.authentication import AuthenticationMiddleware
from app.routers import analytics, authentication, organizations, users
from app.utils.database import MongoDBConnector

"""FastAPI Instance"""
app = FastAPI(docs_url=None, redoc_url=None)

"""Middleware"""
middleware = [
    Middleware(
        CORSMiddleware,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    ),
    Middleware(
        AuthenticationMiddleware,
    ),
]

v1 = FastAPI(
    title=settings.project_name,
    description=settings.project_description,
    version=settings.project_version,
    docs_url=settings.debug and "/docs" or None,
    middleware=middleware,
)

app.mount("/api/v1", v1)

"""Routers"""
v1.include_router(analytics.router)
v1.include_router(authentication.router)
v1.include_router(users.router)
v1.include_router(organizations.router)


"""Startup and Shutdown Event for Database"""


@app.on_event("startup")
async def startup_db_client():
    await MongoDBConnector().connect()


@app.on_event("shutdown")
async def shutdown_db_client():
    await MongoDBConnector().close()
