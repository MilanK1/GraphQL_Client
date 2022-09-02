import React, { useState, useEffect } from 'react';
import DisplayClient from './Client';
import CreateClient from './CreateClient';

function App() {


  return (
    <div className="App">
      Clients
      <DisplayClient/>
      <hr/>
      <CreateClient/>

 
      <hr/>
      <input placeholder='Serach clients...'/>
    </div>
  );
}

export default App;
