import * as React from 'react';
import { Container } from '@mui/system';
import { Typography, Box, AppBar, Tab, Tabs } from '@mui/material';
import './MainPage.css';
import ParamsForm from './ParamsForm';

export default function MainForm() {
  return (
    <Container maxWidth="md" className="cntnr-1">
      <div className="cntnr-2">
        <Typography className='wf' variant="h5">Trachecktory</Typography>
        <ParamsForm />
      </div>
    </Container>
  );
}
