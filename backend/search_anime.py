from jikanpy import Jikan

jikan = Jikan()

def search_anime(type: str, query: str):
    return jikan.search(type, query)

print(search_anime('anime', 'death note'))