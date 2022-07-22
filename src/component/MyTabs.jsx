import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { amber } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material';
import Character from './Character';
import Comics from './Comics.jsx';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

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

export default function MyTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '85%', mb: 12, mx: "auto" }} className='shadow'>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', fontSize: 42 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            positiom="fixed"
          >
            <Tab sx={{ color: 'tan', fontSize: 32 }} label="Characters" {...a11yProps(0)} />
            <Tab sx={{ color: 'tan', fontSize: 32 }} label="Comics" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Character />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Comics />
        </TabPanel>
      </Box>
    </ThemeProvider>
  );
}