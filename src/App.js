import React from 'react';
import logo from './logo.svg';
import './App.css';
import CommandLine from './CommandLine'
function App() {
  return (
    <div className="App">
          <CommandLine startupMessages = {["Microsoft Windows [Version 10.0.18362.535]","(c) 2019 Microsoft Corporation. All rights reserved."]}/>
    </div>
  );
}

export default App;
