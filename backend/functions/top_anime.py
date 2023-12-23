import requests
from constants import JIKAN_API


def top_anime():
    url = f'{JIKAN_API}/top/anime'
    response = requests.get(url)
    response.raise_for_status()
    anime_list = response.json()
    response.close()
    return anime_list
