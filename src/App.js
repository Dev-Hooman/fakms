import { Box, Stack, ThemeProvider, createTheme } from '@mui/material';
import Addpost from './components/Addpost';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <Navbar />
        <Stack direction='row' spacing={2} justifyContent='space-between'>
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
        <Addpost />
        </Stack>
      </Box>
    </ThemeProvider>
  )
}

export default App;
