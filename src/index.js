import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import List from './List';
import Add from './add';
import Ways2 from './ways2';
import Ways3 from './ways3';
import Ways4 from './ways4';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import {Route,Routes} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/ways3" element={<Ways3/>}/>
        <Route path="/ways4" element={<Ways4/>}/>
        <Route path='/ways2' element={<Ways2/>}/>
        <Route path="/" element={<List/>}/>
        <Route path="/add" element={<Add/>}/>
      </Routes>
    </BrowserRouter>
  // </React.StrictMode>
);

reportWebVitals();
