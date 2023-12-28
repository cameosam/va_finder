import React, { useContext } from 'react'
import { Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

import { SearchContext } from '../context/search'

import InfoCard from './InfoCard'

const AnimeList = (props) => {
  const navigate = useNavigate()
  const search = useContext(SearchContext)

  const handleOnClick = (malId) => {
    search.searchCharacters(malId).then((data) => {
      search.setDataCharacters(data.data)
      localStorage.setItem('characterData', JSON.stringify(data.data))
      navigate('/characters')
    })
  }

  return (
    <Grid
      container
      sx={{
        justifyContent: 'center'
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
  )
}

AnimeList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      images: PropTypes.shape({
        jpg: PropTypes.shape({
          image_url: PropTypes.string.isRequired
        })
      }),
      mal_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    })
  ).isRequired,
  input: PropTypes.string.isRequired
}

export default AnimeList
