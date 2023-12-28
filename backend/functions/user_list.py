import requests
import os
from dotenv import load_dotenv
from constants import MAL_API

load_dotenv()
CLIENT_ID = os.getenv('MAL_CLIENT_ID')


def user_list(username: str):

    url = f'{MAL_API}/users/{username}/animelist?status=completed&limit=500&sort=list_score&fields=id,title,mean'
    response = requests.get(url, headers={
        'X-MAL-CLIENT-ID': CLIENT_ID
    })

    try:
        response.raise_for_status()
        anime_list = response.json()
        response.close()
        return anime_list
    except requests.exceptions.HTTPError:
        return []
