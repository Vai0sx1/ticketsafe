import React from 'react';
import { Typography, Container, Box } from '@material-ui/core';
import blockchainAnimation from '../components/blockchain-animation_adobe_express.svg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  hero: {
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(4, 0),
    display: 'flex',
    justifyContent: 'center',
    backgroundImage: `url(${blockchainAnimation})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
}));

const Welcome = () => {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.hero}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Ticket Safe
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            NFT Ticket Marketplace for Entertainment
          </Typography>
        </Container>
      </Box>
    </div>
  );
};

export default Welcome;
