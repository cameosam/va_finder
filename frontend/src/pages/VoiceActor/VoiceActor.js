import React, { useEffect, useContext, useState } from "react";
import { SearchContext } from "../../context/search";
import VoiceActorList from "./VoiceActorList";
import { Box, Typography } from "@mui/material";
import BackButton from "../../common/BackButton";
import SearchBar from "../../common/SearchBar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Header from "../../common/Header";

const VoiceActor = () => {
  const search = useContext(SearchContext);
  const [dataExists, setDataExists] = useState(true);
  const [infoExists, setInfoExists] = useState(true);
  const [includeAnime, setIncludeAnime] = useState(true);
  const [voiceActors, setVoiceActors] = useState([]);
  const [input, setInput] = useState("");

  const handleOnChange = (event) => {
    setIncludeAnime(event.target.checked);
  };

  useEffect(() => {
    if (
      search.voiceActorData === undefined ||
      search.voiceActorData.length === 0
    ) {
      try {
        search.setDataVoiceActor(
          JSON.parse(localStorage.getItem("voiceActorData"))
        );
        setDataExists(true);
      } catch (error) {
        console.log(error);
        setDataExists(false);
      }
    }
    if (
      search.voiceActorInfoData === undefined ||
      search.voiceActorInfoData.length === 0
    ) {
      try {
        search.setDataVoiceActorInfo(
          JSON.parse(localStorage.getItem("voiceActorInfoData"))
        );
        setInfoExists(true);
      } catch (error) {
        console.log(error);
        setInfoExists(false);
      }
    }
    setVoiceActors(
      search.voiceActorData.filter(
        (va) =>
          search.malData.length == 0 ||
          search.malData.includes(va["anime"]["mal_id"])
      )
    );
  }, [search]);

  return (
    <div>
      <Box mt={1}>
        <BackButton />
        {(infoExists && (
          <Header
            title={"IT'S " + search.voiceActorInfoData.name}
            jpg={search.voiceActorInfoData.images.jpg.image_url}
            width={20}
          />
        )) || <Typography variant="h4">"Not sure..."</Typography>}
        <SearchBar label="Search character" input={input} setInput={setInput} />
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Include anime"
          onChange={handleOnChange}
        />
        {(dataExists && (
          <VoiceActorList
            data={voiceActors}
            input={input}
            includeAnime={includeAnime}
          />
        )) || <Typography variant="h4">"Data does not exist"</Typography>}
      </Box>
    </div>
  );
};

export default VoiceActor;
