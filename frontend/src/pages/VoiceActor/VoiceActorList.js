import React, { useEffect, useState } from "react";
import InfoCard from "../../common/InfoCard";
import { Grid } from "@mui/material";

const VoiceActorList = (props) => {
  const [voiceActors, setVoiceActors] = useState([]);

  useEffect(() => {
    setVoiceActors(
      new Map([
        ...props.data.map((va) => [
          props.includeAnime == true
            ? va.character.name + " > " + va.anime.title
            : va.character.name,
          va.character.images.jpg.image_url,
          va.mal_id,
        ]),
      ])
    );
  }, [props]);

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
