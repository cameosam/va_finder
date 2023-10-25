import { createContext } from "react";

export const SearchContext = createContext({
  animeData: [],
  search: () => {},
  setData: () => {},
});
