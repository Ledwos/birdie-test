import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useSelector } from 'react-redux';
import { selectText } from './store/reducers/testSlice';

function App() {
  const nuText: string = useSelector(selectText);
  return (
    <div className="App">
      <p>test string- {nuText}</p>
    </div>
  );
}

export default App;
