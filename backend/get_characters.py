import requests


def get_characters(anime_id: str):
    url = 'https://api.jikan.moe/v4/anime/'+anime_id+'/characters'
    response = requests.get(url)
    response.raise_for_status()
    character_list = response.json()
    response.close()
    return character_list


print(get_characters('1535'))
