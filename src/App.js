import './App.css';

import React, { useState } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  const pageSize = 5;

  const [progress, setProgress] = useState(0)

  return (
    <Router>
      <div>
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} pageSize={pageSize} country="in" category='general' />} />
          <Route exact path="/general" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category='general' />} />
          <Route exact path="/business" element={<News setProgress={setProgress} key="Business" pageSize={pageSize} country="in" category='Business' />} />
          <Route exact path="/health" element={<News setProgress={setProgress} key="Health" pageSize={pageSize} country="in" category='Health' />} />
          <Route exact path="/science" element={<News setProgress={setProgress} key="Science" pageSize={pageSize} country="in" category='Science' />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} key="Sports" pageSize={pageSize} country="in" category='Sports' />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} key="Technology" pageSize={pageSize} country="in" category='Technology' />} />
        </Routes>

      </div>
    </Router>
  )
}

export default App;
