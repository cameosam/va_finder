import React, { useEffect, useContext, useState } from "react";
import { SearchContext } from "../context/search";
import VoiceActorList from "../components/VoiceActorList";
import { Box, Typography } from "@mui/material";

const VoiceActor = () => {
  const search = useContext(SearchContext);
  const [dataExists, setDataExists] = useState(true);

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
    console.log(search.voiceActorData);
  }, [search]);

  return (
    <div>
      <Box mt={1}>
        <Typography variant="h4">IT'S</Typography>
        {(dataExists && <VoiceActorList data={search.voiceActorData} />) || (
          <Typography variant="h4">"Data does not exist"</Typography>
        )}
      </Box>
    </div>
  );
};

export default VoiceActor;
