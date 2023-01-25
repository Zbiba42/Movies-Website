import React from "react";


import "./style.css";
import './fontawesome-free-6.1.1-web/css/all.css'
import Nav from "./nav";
import Popular from "./popular";
import AllCategories from './categories'
const Home = () => {
  return (
    <React.Fragment>
      <Nav/>
      <div className="content">
        <Popular/>
        <AllCategories/>
      </div>
    </React.Fragment>
  );
};

export default Home

