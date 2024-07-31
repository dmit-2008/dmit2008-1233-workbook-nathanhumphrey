import { Typography } from '@mui/material';

export default function PageHeading({ text }) {
  return (
    <Typography component="h1" variant="h3">
      {text}
    </Typography>
  );
}
