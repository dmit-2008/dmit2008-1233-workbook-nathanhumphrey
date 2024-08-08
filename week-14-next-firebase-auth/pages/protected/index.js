import { useContext } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { AuthContext } from '@/context/AuthContext';

export default function Protected() {
  const { user, setUser } = useContext(AuthContext);
  return (
    <Box>
      <Typography variant="h1">Protected Content</Typography>
      <Typography>
        The user is: {user.email} with id: {user.uid}
      </Typography>
      <Button
        variant="contained"
        onClick={() => setUser({ ...user, uid: 456 })}
      >
        Update User
      </Button>
    </Box>
  );
}
