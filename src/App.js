import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import { DragDrop } from './DragDrop';
import Virtualize from './Autocomplete';
import { ResponseContainer } from './ResponseContainer';
import { Box } from '@mui/material';

const App = () => {
  return( 
    <Box sx = {{padding: '2rem 0rem', width: '100%', display: 'flex', justifyContent: 'center'}}>
    <ResponseContainer />
    </Box>
    
  );
}
export default App;

