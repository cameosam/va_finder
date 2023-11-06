import React, { useContext } from "react";
import InfoCard from "./InfoCard";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/search";

const VoiceActorList = (props) => {
  const navigate = useNavigate();
  const search = useContext(SearchContext);

  const handleOnClick = (mal_id) => {};

  return (
    <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
      {props.data.map((voice_actor) => (
        <InfoCard
          title={voice_actor.character.name}
          imageURL={voice_actor.character.images.jpg.image_url}
          mal_id="-1"
          key={voice_actor.mal_id}
          handleOnClick={handleOnClick}
        />
      ))}
    </Grid>
  );
};

export default VoiceActorList;
