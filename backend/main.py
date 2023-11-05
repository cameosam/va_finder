from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import search_anime

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
async def main(search_term: str):
    return search_anime.search_anime(search_term)
