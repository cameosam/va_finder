import React, { useEffect, useState } from "react";
import InfoCard from "./InfoCard";
import { Grid } from "@mui/material";

const VoiceActorList = (props) => {
  const [voiceActors, setVoiceActors] = useState([]);
  useEffect(() => {
    if (props.includeAnime == true) {
      setVoiceActors(
        new Map([
          ...props.data.map((va) => [
            va.character.name + "-" + va.anime.title,
            va.character.images.jpg.image_url,
            va.character.mal_id,
          ]),
        ])
      );
    } else {
      setVoiceActors(
        new Map([
          ...props.data.map((va) => [
            va.character.name,
            va.character.images.jpg.image_url,
            va.mal_id,
          ]),
        ])
      );
    }
  }, [props.includeAnime]);

  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
      }}
    >
      {[...voiceActors].map(
        ([name, jpg, id]) =>
          name.toLowerCase().includes(props.input.toLowerCase()) && (
            <InfoCard
              title={name}
              imageURL={jpg}
              mal_id="-1"
              key={id}
              handleOnClick={() => {}}
            />
          )
      )}
    </Grid>
  );
};

export default VoiceActorList;
