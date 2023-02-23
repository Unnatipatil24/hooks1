// import React, {useState} from 'react'
import './index.css';
import UseState from './Components/UseState';
import Navbar from './Navbar';
import UseEffect from './Components/UseEffect';
import UseRef from './Components/UseRef';
import React from "react";
import About from './Components/About';
import Pageindex from './Components/Pageindex';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import UseContext from './Components/UseContext';

const App = () => {

return(
  <>

  <Router>
  <Navbar></Navbar>
  <Routes>
    <Route path="/Components/UseState" element={<UseState/>}/>
    <Route path="/Components/UseEffect" element={<UseEffect/>}/> 
    <Route path="/Components/UseRef" element={<UseRef/>}/>
    <Route path="/Components/Pageindex" element={<Pageindex/>} />
    <Route path="/Components/About" element={<About/>}/>
    <Route path="/Components/UseContext" element={<UseContext/>}/>
      </Routes>
  </Router>

  </>

)
  
  
  
}

export default App
