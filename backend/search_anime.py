from jikanpy import Jikan

jikan = Jikan()


def search_anime(query: str):
    return jikan.search('anime', query)


print(search_anime('death note'))
