import { useEffect, useState } from 'react';
import {
  AppBar,
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { QuoteManager } from '@/utils/quote-manager';
import NavBar from '@/components/NavBar';

export default function Saved() {
  const [savedQuotes, setSavedQuotes] = useState(null);

  // Only on mount
  useEffect(() => {
    QuoteManager.getSavedQuotes().then((savedQuotes) => {
      setSavedQuotes(savedQuotes);
    });
  }, []);

  return (
    <Box component="main">
      <NavBar />
      <Container maxWidth="lg" component="section">
        <Box mt={4}>
          <Typography variant="h2">Previously Saved Quotes</Typography>
          <List>
            {savedQuotes &&
              savedQuotes.map((q) => (
                <ListItem key={q.id}>
                  <ListItemText primary={q.quote} secondary={q.author} />
                </ListItem>
              ))}
          </List>
        </Box>
      </Container>
    </Box>
  );
}
