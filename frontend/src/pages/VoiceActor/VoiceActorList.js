import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import PropTypes from 'prop-types'

import InfoCard from '../../common/InfoCard'

const VoiceActorList = (props) => {
  const [voiceActors, setVoiceActors] = useState([])

  useEffect(() => {
    setVoiceActors(
      new Map([
        ...props.data.map((va) => [
          props.includeAnime
            ? va.character.name + ' > ' + va.anime.title
            : va.character.name,
          va.character.images.jpg.image_url
            .replace('r/84x124/', '')
            .split('?')[0],
          va.mal_id
        ])
      ])
    )
  }, [props])

  return (
    <Grid
      container
      sx={{
        justifyContent: 'center'
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
  )
}

VoiceActorList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      character: PropTypes.shape({
        name: PropTypes.string.isRequired,
        images: PropTypes.shape({
          jpg: PropTypes.shape({
            image_url: PropTypes.string.isRequired
          })
        })
      }),
      anime: PropTypes.shape({
        title: PropTypes.string.isRequired
      }),
      mal_id: PropTypes.number.isRequired
    })
  ).isRequired,
  includeAnime: PropTypes.bool.isRequired,
  input: PropTypes.string.isRequired
}

export default VoiceActorList
