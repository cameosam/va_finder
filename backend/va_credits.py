import requests
import json

def va_credits(va_id: str):
    url = 'https://api.jikan.moe/v4/people/'+va_id+'/voices'
    response = requests.get(url)
    response.raise_for_status()
    character_list = response.json()
    response.close()
    
    return character_list['data']

print(va_credits('67'))