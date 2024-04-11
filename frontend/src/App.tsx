import React from 'react';
import {
  Box,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import {
  selectFormLoading,
  selectOriginalUrl,
  selectShortlUrl,
  updateOriginalUrl,
} from './store/shortLinkSlice/shortLinkSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { apiUrl } from './constants';
import { shortenLink } from './store/shortLinkSlice/shortLinkThunks';
import { LoadingButton } from '@mui/lab';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const originalUrl = useAppSelector(selectOriginalUrl);
  const shortUrl = useAppSelector(selectShortlUrl);
  const isLoading = useAppSelector(selectFormLoading);

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(shortenLink({url: originalUrl}))
  };

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
            onSubmit={onFormSubmit}
          >
            <TextField
              fullWidth
              type='url'
              label='Enter URL here'
              required
              value={originalUrl}
              onChange={(e) => dispatch(updateOriginalUrl(e.target.value))}
            />
            <LoadingButton
              variant='contained'
              type='submit'
              size='large'
              sx={{ mt: 2 }}
              loading={isLoading}
            >
              Shorten
            </LoadingButton>
          </form>
        </Grid>
      </Grid>
      <Box sx={{ mt: 5 }} textAlign={'center'}>
        <Typography variant='h6' sx={{ mb: 3 }}>
          Your link now looks like this
        </Typography>
        <a href={`${apiUrl}/links/${shortUrl}`} target='_blank'>
          {`${apiUrl}/${shortUrl}`}
        </a>
      </Box>
    </Container>
  );
};

export default App;
