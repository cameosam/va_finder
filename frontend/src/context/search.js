import { createContext } from 'react'

export const SearchContext = createContext({
  animeData: [],
  searchAnime: () => {},
  setDataAnime: () => {},

  characterData: [],
  searchCharacters: () => {},
  setDataCharacters: () => {},

  voiceActorData: [],
  searchVoiceActor: () => {},
  setDataVoiceActor: () => {},

  voiceActorInfoData: [],
  searchVoiceActorInfo: () => {},
  setDataVoiceActorInfo: () => {},

  malData: [],
  searchMal: () => {},
  setDataMal: () => {}
})
