import React, { useContext } from 'react'
import { Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

import { SearchContext } from '../../context/search'
import InfoCard from '../../common/InfoCard'

const CharacterList = (props) => {
  const navigate = useNavigate()
  const search = useContext(SearchContext)

  const handleOnClick = (malId) => {
    search.searchVoiceActorInfo(malId).then((data) => {
      search.setDataVoiceActorInfo(data.data)
      localStorage.setItem('voiceActorInfoData', JSON.stringify(data.data))
    })
    search.searchVoiceActor(malId).then((data) => {
      search.setDataVoiceActor(data.data)
      localStorage.setItem('voiceActorData', JSON.stringify(data.data))
      navigate('/voice-actor')
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
        (character) =>
          character.character.name
            .toLowerCase()
            .includes(props.input.toLowerCase()) && (
            <InfoCard
              title={character.character.name}
              imageURL={character.character.images.jpg.image_url}
              mal_id={
                character.voice_actors.find(
                  (va) => va.language === 'Japanese'
                )
                  ? character.voice_actors.find(
                    (va) => va.language === 'Japanese'
                  ).person.mal_id
                  : '0'
              }
              key={character.mal_id}
              handleOnClick={handleOnClick}
            />
          )
      )}
    </Grid>
  )
}

CharacterList.propTypes = {
  data: PropTypes.array.isRequired,
  input: PropTypes.string.isRequired
}

export default CharacterList
