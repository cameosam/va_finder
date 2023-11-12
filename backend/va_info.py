import requests


def va_info(va_id: str):
    url = 'https://api.jikan.moe/v4/people/'+va_id
    response = requests.get(url)
    response.raise_for_status()
    va_info = response.json()
    response.close()
    return va_info
