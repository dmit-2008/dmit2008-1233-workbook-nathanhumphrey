import { useContext, useEffect } from 'react';
import { Button, Container, Typography } from '@mui/material';
import { AuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/router';

export default function Protected() {
  const { user, signOut, isReady: isAuthReady } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady && isAuthReady && user === null) {
      router.replace('/');
    }
  }, [isAuthReady, router.isReady, user]);

  if (user) {
    return (
      <Container>
        <Typography variant="h1">Protected Content</Typography>
        <Typography mb={2}>
          The user email: {user.email} with id: {user.uid}
        </Typography>
        <Button onClick={() => signOut()}>Sign Out</Button>
      </Container>
    );
  }
}
