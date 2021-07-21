import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const SimpleRating = ({ rating }) => {
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating name="read-only" size="large" value={ rating } readOnly />
      </Box>
    </div>
  );
}

export default SimpleRating;