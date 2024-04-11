import React from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';

const App: React.FC = () => {
  return (
    <Container sx={{ py: '150px' }}>
      <Grid container gap={3}>
        <Grid item xs={12}>
          <Typography variant='h3' textAlign={'center'}>
            Shorten your link!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <TextField fullWidth label='Enter URL here' />
            <Button
              variant='contained'
              type='submit'
              size='large'
              sx={{ mt: 2 }}
            >
              Shorten
            </Button>
          </form>
        </Grid>
      </Grid>
      <Box sx={{mt: 5}} textAlign={'center'}>
        <Typography variant='h6' sx={{mb: 3}}>Your link now looks like this</Typography>
        <a href='#' target='_blank'>
          link
        </a>
      </Box>
    </Container>
  );
};

export default App;
