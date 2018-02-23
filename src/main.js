// bootstrap react into browser

import React from 'react';

import {render} from 'react-dom';

import {App} from './app/App';

// host virtual dom into real dom
// diffing, patching 
// Merge => Virtual DOM to REAL DOM
render(<App />,   //virtual dom
       document.getElementById('root')  //real dom
)