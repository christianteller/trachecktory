import React, { Component } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Grid,
  Box,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';

import './TopNav.css';

type Props = {};

type State = {};

// eslint-disable-next-line react/prefer-stateless-function
export default class TopNav extends Component<Props, State> {
  // eslint-disable-next-line react/state-in-constructor
  state = {};

  // eslint-disable-next-line class-methods-use-this
  handleClose = () => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Do you want to exit the program?')) {
      window.close();
    }
  };

  render() {
    return (
      <Grid container>
        <AppBar
          className="nm-1 titlebar-drag"
          position="sticky"
          sx={{ flexGrow: 1 }}
        >
          <Toolbar
            variant="dense"
            style={{
              border: '2px solid #45A29E',
              justifyContent: 'right',
            }}
          >
            <Grid xs={10}>
              <Typography className="t-logo" variant="h6">
                TRACHECKTORY
              </Typography>
            </Grid>
            <Grid xs={6}>
              <IconButton
                onClick={this.handleClose}
                id="close-app"
                className="titlebar-no-drag nav-action-buttons"
              >
                <CloseIcon style={{ color: '#66FCF1', fontSize: '1rem' }} />
              </IconButton>
              <IconButton
                style={{ fontSize: '1rem !important' }}
                onClick={window.minimize}
                id="close-app"
                className="titlebar-no-drag nav-action-buttons"
              >
                <RemoveIcon style={{ color: '#66FCF1', fontSize: '1rem' }} />
              </IconButton>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    );
  }
}
