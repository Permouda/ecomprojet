import React from 'react';
import Head from "./composant/head/header.js";
import "./App.css";

import "./composant/head/header.css";
import Footer from './composant/footer/footer_main'
//
import Home from "./composant/home/home"


//import { Helmet } from 'react-helmet';


function App() {
  return (
    <div className="App">
    <Head />
    <Home />
    <Footer />
   {/**/} 
  
{
/*
 <Helmet>
              <script src="./composant/search.js" type="text/javascript" />
      </Helmet>

    <div className="box_search">
      <div className="search">
        <div className="icon"></div>
        <div className="input"></div>
      </div>



    </div>

*/
}
     

    </div>
  );
}
export default App;
