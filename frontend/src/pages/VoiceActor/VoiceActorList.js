import React, { useEffect, useContext, useState } from "react";
import { SearchContext } from "../../context/search";
import InfoCard from "../../common/InfoCard";
import { Grid } from "@mui/material";

const VoiceActorList = (props) => {
  const search = useContext(SearchContext);
  const [voiceActors, setVoiceActors] = useState([]);

  useEffect(() => {
    setVoiceActors(
      new Map([
        ...props.data
          .filter(
            (va) =>
              search.malData.length == 0 ||
              search.malData.includes(va["anime"]["mal_id"])
          )
          .map((va) => [
            props.includeAnime == true
              ? va.character.name + " > " + va.anime.title
              : va.character.name,
            va.character.images.jpg.image_url,
            va.mal_id,
          ]),
      ])
    );
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
