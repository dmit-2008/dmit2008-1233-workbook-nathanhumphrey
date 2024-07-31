import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import PageHeading from '@/components/PageHeading';

import variables from '@/styles/variables.module.scss';

export default function Home() {
  return (
    <Container
      style={{ backgroundColor: variables.backgroundColor }}
      sx={{ color: variables.primaryColor }}
      maxWidth="md"
    >
      <PageHeading text="Hello Next pages" />
      <Button variant="outlined">Hello world</Button>
    </Container>
  );
}
