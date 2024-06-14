import { GetApp } from '@mui/icons-material';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { weatherData } from '@/utils/weather-data';

export default function WeatherForm({ weatherCallback }) {
  const [location, setLocation] = useState('');
  const [isValidLocation, setIsValidLocation] = useState(true);

  function handleSubmit(evt) {
    evt.preventDefault();

    if (location === '') {
      console.error('Location cannot be empty');
      setIsValidLocation(false);
    } else {
      console.log(`Location: ${location}`);
      setIsValidLocation(true);
      // The following will be replace with actual REST data
      weatherCallback(weatherData);
    }
  }

  return (
    <>
      <Typography variant="h2">Weather Form</Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          error={!isValidLocation}
          helperText={isValidLocation ? '' : 'Location cannot be empty'}
          variant="outlined"
          name="location"
          label="Location"
          size="small"
          value={location}
          onChange={(evt) => {
            setLocation(evt.target.value);
          }}
          sx={{ width: '15em' }}
        />
        <Button
          type="submit"
          variant="contained"
          aria-label="Get weather"
          size="large"
        >
          <GetApp />
        </Button>
      </Box>
    </>
  );
}
