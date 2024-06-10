import { GetApp } from '@mui/icons-material';
import { Box, Button, Container, TextField, Typography } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h1">Weather App</Typography>

      <Typography variant="h2">Weather Form</Typography>
      <Box component="form">
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

      <Box sx={{ mt: 2 }}>
        <Typography>Enter a location to view current weather</Typography>
      </Box>
    </Container>
  );
}
