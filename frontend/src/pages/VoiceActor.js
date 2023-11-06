import React, { useEffect, useContext, useState } from "react";
import { SearchContext } from "../context/search";
import VoiceActorList from "../components/VoiceActorList";
import VoiceActorInfo from "../components/VoiceActorInfo";
import { Box, Typography, Divider } from "@mui/material";
import BackButton from "../components/BackButton";
const VoiceActor = () => {
  const search = useContext(SearchContext);
  const [dataExists, setDataExists] = useState(true);
  const [infoExists, setInfoExists] = useState(true);

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
    console.log(search.voiceActorInfoData);
  }, [search]);

  return (
    <div>
      <Box mt={1}>
        <BackButton path="/characters" />
        {(infoExists && (
          <VoiceActorInfo data={search.voiceActorInfoData} />
        )) || <Typography variant="h4">"Not sure..."</Typography>}
        <Divider />
        {(dataExists && <VoiceActorList data={search.voiceActorData} />) || (
          <Typography variant="h4">"Data does not exist"</Typography>
        )}
      </Box>
    </div>
  );
};

export default VoiceActor;
