from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import search_anime
import get_characters
import va_credits
import va_info
import user_list

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/anime/{search_term}")
async def get_anime(search_term: str):
    return search_anime.search_anime(search_term)


@app.get("/characters/{anime_id}")
async def get_chars(anime_id: str):
    return get_characters.get_characters(anime_id)


@app.get("/va_roles/{va_id}")
async def get_va_roles(va_id: str):
    return va_credits.va_credits(va_id)


@app.get("/va_info/{va_id}")
async def get_va_info(va_id: str):
    return va_info.va_info(va_id)


@app.get("/mal/{username}")
async def get_mal_anime(username: str):
    return user_list.user_list(username)
