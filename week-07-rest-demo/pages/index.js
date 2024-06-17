import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  LinearProgress,
  Toolbar,
  Typography,
} from '@mui/material';

export default function Home() {
  const QUOTE_URL = 'https://api.quotable.io/random';

  const [randomQuote, setRandomQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function getRandomQuote() {
    setRandomQuote(null);
    setIsLoading(true);

    fetch(QUOTE_URL)
      .then((res) => res.json())
      .then((json) => {
        setIsLoading(false);
        // Now we have the quote object
        setRandomQuote({ author: json.author, quote: json.content });
      });
  }

  return (
    <Box component="main">
      <AppBar position="static">
        <Toolbar>
          <Typography component="h1">Get You Some Quotes!</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" component="section">
        <Typography variant="h1">Random Quotes</Typography>
        <Box mt={4} mb={4}>
          <Button variant="contained" onClick={getRandomQuote}>
            Get a Quote
          </Button>
        </Box>
        <hr />
        <Box mt={4}>
          {isLoading && <LinearProgress />}
          {randomQuote && (
            <Box>
              <Typography variant="h2" mb={2}>
                A Random Quote
              </Typography>
              <Typography>
                {randomQuote.quote} - {randomQuote.author}
              </Typography>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}
