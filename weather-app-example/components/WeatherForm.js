import { GetApp } from '@mui/icons-material';
import { Box, Button, TextField, Typography } from '@mui/material';

export default function WeatherForm({ weatherCallback }) {
  // TODO: implement state for the input location
  // render an error if the input is empty

  function handleSubmit(evt) {
    evt.preventDefault();

    const location = evt.target.elements['location'].value.trim();

    if (location === '') {
      console.error('Location cannot be empty');
    } else {
      console.log(`Location: ${location}`);
      weatherCallback('Received data from WeatherForm');
    }
  }

  return (
    <>
      <Typography variant="h2">Weather Form</Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          name="location"
          label="Location"
          size="small"
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
