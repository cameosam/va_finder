import { createContext } from "react";

export const SearchContext = createContext({
  animeData: [],
  searchCharacters: () => {},
  setDataAnime: () => {},
  characterData: [],
  searchCharacters: () => {},
  setDataCharacters: () => {},
  voiceActorData: [],
  searchVoiceActor: () => {},
  setDataVoiceActor: () => {},
});
