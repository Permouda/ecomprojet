import React from 'react';
import "./App.css";
import "./composant/head/header.css";
import Home from "./composant/home/home"
import { BrowserRouter as Router, Route} from "react-router-dom";
import {Login} from "./composant/logsign/login";
import ProductAff from "./composant/cards/ProductAff";




function App() {
  return (
    <Router>
      <Route path='/' component={Home} exact/>
      <Route path='/login' component={Login} exact/>
      <Route path='/produit/:id' component={ProductAff} exact/>
   </Router>
  );
}
export default App;
