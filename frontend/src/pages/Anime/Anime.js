import React, { useEffect, useContext, useState } from 'react'
import { Box, Typography } from '@mui/material'

import { SearchContext } from '../../context/search'
import AnimeList from '../../common/AnimeList'
import SearchBar from '../../common/SearchBar'

const Anime = () => {
  const search = useContext(SearchContext)
  const [dataExists, setDataExists] = useState(true)
  const [animeData, setAnimeData] = useState([])
  const [input, setInput] = useState('')

  const handleSearch = (event) => {
    event.preventDefault()
    search.searchAnime(input).then((data) => {
      search.setDataAnime(data.data)
      localStorage.setItem('animeData', JSON.stringify(data.data))
    })
  }

  useEffect(() => {
    setInput('')
    if (search.animeData === undefined || search.animeData.length === 0) {
      try {
        search.setDataAnime(JSON.parse(localStorage.getItem('animeData')))
        setDataExists(true)
      } catch (error) {
        console.log(error)
        setDataExists(false)
      }
    }
    setAnimeData(
      search.animeData.filter(
        (x) =>
          search.malData.length === 0 || search.malData.includes(x.mal_id)
      )
    )
  }, [search])

  return (
    <Box mt={1}>
      <Typography
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '10px'
        }}
      >
        Select an anime or search for a new one
      </Typography>
      <SearchBar
        label="Search anime"
        input={input}
        setInput={setInput}
        handleSearch={handleSearch}
        includeBack={true}
      />
      <Box mt={1}>
        {(dataExists && <AnimeList data={animeData} input={input} />) || (
          <Typography variant="h4">Data does not exist</Typography>
        )}
      </Box>
    </Box>
  )
}

export default Anime
