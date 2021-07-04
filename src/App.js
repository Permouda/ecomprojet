import React from 'react';
import Head from "./composant/head/header.js";
import "./App.css";

import "./composant/head/header.css";
import Footer from './composant/footer/footer_main'
//
import Home from "./composant/home/home"
import {BrowserRouter, BrowserRouter as Router, Route} from "react-router-dom";
import {Login} from "./composant/logsign/login";



//import { Helmet } from 'react-helmet';


function App() {
  return (
    <BrowserRouter>
    <switch>
      <Route path='/' component={Home} exact/>
      <Route path='/login' component={Login}/>


    </switch>

   </BrowserRouter>
  );
}
export default App;
