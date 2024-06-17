import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';

export default function Home() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography>Get You Some Quotes!</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Typography variant="h1">Random Quotes</Typography>
        <Button variant="contained">Get a Quote</Button>
      </Container>
    </>
  );
}
