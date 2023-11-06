import React from "react";
import InfoCard from "./InfoCard";
import { Grid } from "@mui/material";

const VoiceActorList = (props) => {
  const handleOnClick = (mal_id) => {};

  return (
    <Grid
      container
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{
        justifyContent: "center",
      }}
    >
      {props.data.map(
        (voice_actor) =>
          voice_actor.character.name
            .toLowerCase()
            .includes(props.input.toLowerCase()) && (
            <InfoCard
              title={voice_actor.character.name}
              imageURL={voice_actor.character.images.jpg.image_url}
              mal_id="-1"
              key={voice_actor.mal_id}
              handleOnClick={handleOnClick}
            />
          )
      )}
    </Grid>
  );
};

export default VoiceActorList;
