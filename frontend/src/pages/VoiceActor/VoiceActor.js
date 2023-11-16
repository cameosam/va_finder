import React, { useEffect, useContext, useState } from "react";
import { SearchContext } from "../../context/search";
import VoiceActorList from "./VoiceActorList";
import { Box, Typography, Paper, Grid } from "@mui/material";

import SearchBar from "../../common/SearchBar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

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
      <Box>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "10px",
          }}
        >
          {"It's " +
            search.voiceActorInfoData.name +
            "! View their other voice acting roles below"}
        </Typography>
        <SearchBar
          label="Search character"
          input={input}
          setInput={setInput}
          includeBack={true}
        />

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
