import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './TopNav.css';

type Props = {};

type State = {};

export default class TopNav extends Component<Props, State> {
  // eslint-disable-next-line react/state-in-constructor
  state = {};

  render() {
    return (
      <AppBar className="nm-1" position="sticky">
        <Toolbar variant="dense">
          <Typography variant="h6" component="div">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
