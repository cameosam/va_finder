import { useContext, useState } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import SearchBar from '../../common/SearchBar'
import { SearchContext } from '../../context/search'
import Header from '../../common/Header'

const Home = () => {
  const navigate = useNavigate()
  const search = useContext(SearchContext)
  const [input, setInput] = useState('')

  async function searchTopAnime () {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/top_anime`)
    return await response.json()
  }

  const handleOnClick = (event) => {
    event.preventDefault()
    searchTopAnime().then((data) => {
      search.setDataAnime(data.data)
      localStorage.setItem('animeData', JSON.stringify(data.data))
      navigate('/anime')
    })
  }

  const handleSearch = (event) => {
    event.preventDefault()
    search.searchAnime(input).then((data) => {
      search.setDataAnime(data.data)
      localStorage.setItem('animeData', JSON.stringify(data.data))
      navigate('/anime')
    })
  }

  return (
    <Box 
      sx={{
        minHeight: '80vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        p: { xs: 1, sm: 2, md: 3 },
        boxSizing: 'border-box',
      }}>
      <Header />
      <Box 
        sx={{ 
          width: { xs: '90vw', sm: 600, md: 800, lg: 900 }, 
          mb: 2, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center' 
        }}
      >
        <Typography
          sx={{ margin: '10px', width: '100%', textAlign: 'center' }}
        >
          Figure out where you have heard that voice before! Search anime to start
        </Typography>
        <Box sx={{ width: '100%' }}>
          <SearchBar
            label="Search anime"
            input={input}
            setInput={setInput}
            handleSearch={handleSearch}
          />
        </Box>
      </Box>
      <Button
        variant="outlined"
        onClick={handleOnClick}
        sx={{margin: '10px'}}
      >
        Explore Top Anime
      </Button>
    </Box>
  )
}

export default Home
