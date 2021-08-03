import React, { useState } from 'react'
import { IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles(({ palette, ...theme }) => ({
  root: {
    margin: '10px',
    backgroundColor: 'white',
    color: 'black',
    '&::placeholder': {
      color: 'black',
    },
  },
  searchBoxHolder: {
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 9,
    height: 'var(--topbar-height)',
  },
  searchBox: {
    outline: 'none',
    border: 'none',
    fontSize: '1rem',
    height: 'calc(100% - 5px)',
  },
}))

const SearchBox = () => {
  const [open, setOpen] = useState(false)

  const classes = useStyles()

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <React.Fragment>
      {!open && (
        <IconButton onClick={toggle}>
          <SearchIcon />
        </IconButton>
      )}

      {open && (
        <div
          className={clsx(
            'flex items-center',
            classes.root,
            classes.searchBoxHolder
          )}
        >
          <input
            className={clsx(
              'px-4 search-box w-full',
              classes.root,
              classes.searchBox
            )}
            type="text"
            placeholder="Search here..."
            autoFocus
          />
          <IconButton onClick={toggle} className="align-middle mx-4">
            <CloseIcon />
          </IconButton>
        </div>
      )}
    </React.Fragment>
  )
}

export default SearchBox;