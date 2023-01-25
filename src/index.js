import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./style.css";
import Home from './home'
import New from "./new";
import Watch from "./watch";
import WatchList from "./WatchList";
const App = () => {
  
  
  return (
  <React.Fragment>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path = "/WatchList" element = {<WatchList/>} />
          <Route path="/watch/:stream" element={<Watch />} />

        </Routes>
    </BrowserRouter>
  </React.Fragment>
  )
};

ReactDOM.render(<App/>, document.getElementById("root"));

