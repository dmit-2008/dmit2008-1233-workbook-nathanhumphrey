import Page from '@/components/Page';
import { Typography } from '@mui/material';
import { useRouter } from 'next/router';

export default function Param() {
  const router = useRouter();
  const { param } = router.query;

  return (
    <Page>
      <Typography variant="h1">Param Page</Typography>
      <Typography>The param is {param}</Typography>
    </Page>
  );
}
