import requests
from constants import JIKAN_API


def va_credits(va_id: str):
    url = JIKAN_API + '/people/'+va_id+'/voices'
    response = requests.get(url)
    response.raise_for_status()
    character_list = response.json()
    response.close()
    return character_list
