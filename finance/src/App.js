import '../src/css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Events from './pages/Events'

import React, { useEffect, useState } from 'react';
import $ from 'jquery';

$(function () {
  $(window).scroll(function () {
    var winTop = $(window).scrollTop();
    if (winTop >= 30) {
      $("body").addClass("sticky-header");
    } else {
      $("body").removeClass("sticky-header");
    }//if-else
  });//win func.
});//ready func.


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
