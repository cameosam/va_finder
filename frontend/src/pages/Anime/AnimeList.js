import React, { useContext } from "react";
import InfoCard from "../../common/InfoCard";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/search";

const AnimeList = (props) => {
  const navigate = useNavigate();
  const search = useContext(SearchContext);

  const handleOnClick = (mal_id) => {
    search.searchCharacters(mal_id).then((data) => {
      search.setDataCharacters(data.data);
      localStorage.setItem("characterData", JSON.stringify(data.data));
      navigate("/characters");
    });
  };

  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
      }}
    >
      {props.data.map(
        (anime) =>
          anime.title.toLowerCase().includes(props.input.toLowerCase()) && (
            <InfoCard
              title={anime.title}
              imageURL={anime.images.jpg.image_url}
              mal_id={anime.mal_id}
              key={anime.mal_id}
              handleOnClick={handleOnClick}
            />
          )
      )}
    </Grid>
  );
};

export default AnimeList;
