import { createTheme } from '@mui/material';

const themeOptions = {
  palette: {
    primary: {
      main: '#c11810',
    },
    secondary: {
      main: '#ff7961',
    },
  },
};

const theme = createTheme(themeOptions);

export { theme };
