import requests


def top_anime():
    url = 'https://api.jikan.moe/v4/top/anime'
    response = requests.get(url)
    response.raise_for_status()
    anime_list = response.json()
    response.close()
    return anime_list
