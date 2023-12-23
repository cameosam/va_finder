import requests
from constants import JIKAN_API


def va_info(va_id: str):
    url = f'{JIKAN_API}/people/{va_id}'
    response = requests.get(url)
    response.raise_for_status()
    va_info = response.json()
    response.close()
    return va_info
