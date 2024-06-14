import { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import WeatherForm from '@/components/WeatherForm';
import CurrentWeather from '@/components/CurrentWeather';

export default function Home() {
  let [weatherData, setWeatherData] = useState(null);

  return (
    <Container maxWidth="lg">
      <Typography variant="h1">Weather App</Typography>

      <WeatherForm weatherCallback={setWeatherData} />

      <Box sx={{ mt: 2 }}>
        {weatherData ? (
          <CurrentWeather data={weatherData} />
        ) : (
          <Typography>Enter a location to view current weather</Typography>
        )}
      </Box>
    </Container>
  );
}
