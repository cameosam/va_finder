import requests
import os
from dotenv import load_dotenv

load_dotenv()
CLIENT_ID = os.getenv('MAL_CLIENT_ID')


def user_list(username: str):

    url = 'https://api.myanimelist.net/v2/users/' + \
        username+'/animelist?status=completed&limit=3&sort=list_score&fields=id,title,mean'

    response = requests.get(url, headers={
        'X-MAL-CLIENT-ID': CLIENT_ID
    })

    response.raise_for_status()
    anime_list = response.json()
    response.close()

    return anime_list['data']  # Limited to the first three entries


# print(user_list('yoyocami'))
