import React from 'react'
import PropTypes from 'prop-types'
import { AppBar, Box, Toolbar } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'

import BackButton from './BackButton'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  width: '100%'
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '30ch'
    }
  }
}))

const SearchBar = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {props.includeBack && <BackButton />}
          <Search type="submit">
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder={props.label}
              value={props.input}
              onChange={(event) => props.setInput(event.target.value)}
              inputProps={{ 'aria-label': 'search' }}
              onKeyDown={(event) => {
                if (
                  event.key === 'Enter' &&
                  props.input.length !== 0 &&
                  props.handleSearch
                ) {
                  props.handleSearch(event)
                }
              }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

SearchBar.propTypes = {
  includeBack: PropTypes.bool,
  label: PropTypes.string,
  input: PropTypes.string,
  setInput: PropTypes.func,
  handleSearch: PropTypes.func
}

export default SearchBar
