import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton } from '@mui/material';
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
      <AppBar className="nm-1 titlebar-drag" position="sticky">
        <Toolbar variant="dense">
          <IconButton
            onClick={this.handleClose}
            id="close-app"
            className="titlebar-no-drag"
          >
            <CloseIcon color="primary" />
          </IconButton>
          <IconButton
            onClick={window.minimize}
            id="close-app"
            className="titlebar-no-drag"
          >
            <RemoveIcon color="primary" />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}
