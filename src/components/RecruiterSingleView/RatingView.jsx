import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
}));

const SimpleRating = ({ rating }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Rating 
        name="half-rating-read" 
        defaultValue={2.5} 
        precision={0.5}
        value={rating} 
        readOnly />
    </div>
  );
}

export default SimpleRating;