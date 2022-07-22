import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material';
import { amber } from '@mui/material/colors';
import BasicModal from './Card';


const theme = createTheme({
  palette: {
    primary: {
      main: amber[50],
    },
    secondary: {
      main: amber[900],
    },
  },
  typography: {
    fontSize: 22,
  },
  style: {
    color: amber[50],
  },

});

export default function BasicTextFields() {

  const [value, setValue] = React.useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  console.log({ value })

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          autoFocus
          color='while'
          id="character"
          label={value}
          variant="outlined"
          value={value}
          onChange={handleChange}
        />
      </Box>
      <BasicModal value={value} />
    </ThemeProvider>
  );
}
