import { Box, Container, Typography } from '@mui/material';
import WeatherForm from '@/components/WeatherForm';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h1">Weather App</Typography>

      <WeatherForm />

      <Box sx={{ mt: 2 }}>
        <Typography>Enter a location to view current weather</Typography>
      </Box>
    </Container>
  );
}
