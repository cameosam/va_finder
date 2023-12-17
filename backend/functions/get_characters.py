import requests
from constants import JIKAN_API


def get_characters(anime_id: str):
    url = JIKAN_API + '/anime/'+anime_id+'/characters'
    response = requests.get(url)
    response.raise_for_status()
    character_list = response.json()
    response.close()
    return character_list
