import '../src/css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Events from './pages/Events'

import React, {useEffect, useState} from 'react';



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' Component={Events}></Route>
          
          {/* <Route path='/*' Component={ErrorPage}></Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
