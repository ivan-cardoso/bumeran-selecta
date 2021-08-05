import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100px',
    },
  },
}))

const StandardBtn = ({ name, onClick }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Button color='primary' variant='contained' type='submit'>
        {name}
      </Button>
    </div>
  )
}

export default StandardBtn
