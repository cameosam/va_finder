import React, { useContext } from "react";
import InfoCard from "./InfoCard";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/search";

const CharacterList = (props) => {
  const navigate = useNavigate();
  const search = useContext(SearchContext);

  const handleOnClick = (mal_id) => {
    search.searchVoiceActorInfo(mal_id).then((data) => {
      search.setDataVoiceActorInfo(data.data);
      console.log(data.data);
      localStorage.setItem("voiceActorInfoData", JSON.stringify(data.data));
    });
    search.searchVoiceActor(mal_id).then((data) => {
      search.setDataVoiceActor(data.data);
      localStorage.setItem("voiceActorData", JSON.stringify(data.data));
      navigate("/voice-actor");
    });
  };

  return (
    <Grid
      container
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{
        justifyContent: "center",
      }}
    >
      {props.data.map((character) => (
        <InfoCard
          title={character.character.name}
          imageURL={character.character.images.jpg.image_url}
          mal_id={
            character.voice_actors[0]
              ? String(character.voice_actors[0].person.mal_id)
              : "0"
          }
          key={character.mal_id}
          handleOnClick={handleOnClick}
        />
      ))}
    </Grid>
  );
};

export default CharacterList;
