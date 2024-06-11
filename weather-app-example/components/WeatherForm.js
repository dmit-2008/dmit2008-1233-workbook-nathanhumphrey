import { GetApp } from '@mui/icons-material';
import { Box, Button, TextField, Typography } from '@mui/material';

export default function WeatherForm() {
  return (
    <>
      <Typography variant="h2">Weather Form</Typography>
      <Box component="form" width="100%">
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
