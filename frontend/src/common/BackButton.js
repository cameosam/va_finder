import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const BackButton = () => {
  const navigate = useNavigate()
  const theme = createTheme()

  return (
    <ThemeProvider theme={theme}>
      <Tooltip title="Back">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          sx={{ mr: 1 }}
          onClick={() => navigate(-1)}
        >
          <ArrowBackIcon />
        </IconButton>
      </Tooltip>
    </ThemeProvider>
  )
}

export default BackButton
