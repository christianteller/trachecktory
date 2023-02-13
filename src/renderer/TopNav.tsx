import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './TopNav.css';

type Props = {};

type State = {};

// eslint-disable-next-line react/prefer-stateless-function
export default class TopNav extends Component<Props, State> {
  // eslint-disable-next-line react/state-in-constructor
  state = {};

  render() {
    return (
      <AppBar className="nm-1 titlebar-drag" position="sticky">
        <Toolbar variant="dense">
          <IconButton
            onClick={window.close}
            id="close-app"
            className="titlebar-no-drag"
          >
            <CloseIcon color="primary" />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}
