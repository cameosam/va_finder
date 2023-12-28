import React, { useEffect, useContext } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import Alert from '@mui/material/Alert'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import CheckIcon from '@mui/icons-material/Check'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import Tooltip from '@mui/material/Tooltip'

import { SearchContext } from '../context/search'

const MalButton = () => {
  const [open, setOpen] = React.useState(false)
  const [input, setInput] = React.useState('')
  const [username, setUsername] = React.useState('')
  const search = useContext(SearchContext)
  const [error, setError] = React.useState(false)

  const handleClickOpen = () => {
    setInput('')
    setOpen(true)
  }

  const handleClose = () => {
    setError(false)
    setOpen(false)
  }

  const addUsername = () => {
    if (input.length !== 0) {
      search.searchMal(input).then((data) => {
        if (data.data) {
          const malAnimeIds = data.data.map((x) => x.node.id)
          search.setDataMal(malAnimeIds)
          localStorage.setItem('malData', JSON.stringify(malAnimeIds))
          setUsername(input)
          localStorage.setItem('username', input)
          handleClose()
        } else {
          setError(true)
        }
      })
    } else {
      setError(true)
    }
  }

  const removeUsername = () => {
    setUsername('')
    search.setDataMal([])
    localStorage.removeItem('malData')
    handleClose()
  }

  useEffect(() => {
    if (search.malData.length === 0 && localStorage.getItem('malData') !== null) {
      try {
        search.setDataMal(JSON.parse(localStorage.getItem('malData')))
        setUsername(localStorage.getItem('username'))
      } catch (error) {
        console.log(error)
      }
    }
  }, [search])

  return (
    <React.Fragment>
      <Tooltip title="MAL username">
        <Fab
          color="primary"
          onClick={handleClickOpen}
          sx={{
            position: 'fixed',
            right: '2rem',
            bottom: '2rem'
          }}
        >
          {username ? <CheckIcon /> : <AddIcon />}
        </Fab>
      </Tooltip>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {(username ? 'Update' : 'Add') + ' MyAnimeList username'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {username
              ? 'Current username: ' + username
              : "Only view anime that you've seen!"}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="username"
            fullWidth
            variant="standard"
            onChange={(event) => setInput(event.target.value)}
          />
        </DialogContent>
        {error && (
          <Alert variant="outlined" severity="error">
            Could not find username
          </Alert>
        )}
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={addUsername}>{username ? 'Update' : 'Add'}</Button>
          {username && <Button onClick={removeUsername}>Remove</Button>}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
export default MalButton
