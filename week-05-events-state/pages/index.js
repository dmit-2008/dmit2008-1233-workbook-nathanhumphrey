import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';

export default function Home() {
  function handleClick() {
    setIsBlack(!isBlack);
    console.log(isBlack);
  }

  let [isBlack, setIsBlack] = useState(true);
  let [text, setText] = useState('');

  return (
    <Container maxWidth="lg">
      <Typography variant="h1">Events and State</Typography>
      <Box>
        <Button onClick={handleClick} variant="outlined">
          Click Me!
        </Button>
      </Box>
      <Box
        sx={{
          mt: 2,
          width: '200px',
          height: '200px',
          backgroundColor: isBlack ? '#000' : '#f00',
        }}
      ></Box>
      <Typography variant="h2">Text Field Example</Typography>
      <Box>
        <TextField
          variant="outlined"
          name="text"
          value={text}
          onChange={(evt) => {
            setText(evt.target.value);
          }}
        />

        {text === '' ? (
          <Typography sx={{ color: '#f00' }}>Cannot be empty</Typography>
        ) : (
          <Typography>{text}</Typography>
        )}
      </Box>
    </Container>
  );
}
