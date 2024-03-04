// CardComponent.js
import React from 'react';
import { Card, CardContent, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// Create a custom styled card component
const StyledCard = styled(Card)({
  border: '2px solid green',
  borderRadius: '5px',
  margin: '10px',
  maxWidth: '300px', // Set the maximum width
});

const CardComponent = ({ title, date, time }) => {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Date: {date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Time: {time}
        </Typography>
        <Button variant="contained">Do Action</Button>
      </CardContent>
    </StyledCard>
  );
};

export default CardComponent;
