import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { amber } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material';

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

const Search = ({ search }) => {
  const [text, setText] = React.useState('')

  const onSearch = (q) => {
    setText(q)
    search(q)
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch'},
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label={text}
          variant="outlined"
          focused
          onChange={(e) => onSearch(e.target.value)}
          value={text}
        />
      </Box>
    </ThemeProvider>
  );
}

export default Search