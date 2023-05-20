//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Navbar from "./component/Navbar.jsx";
import Jumbotron from "./component/Jumbotron.jsx";
import CardSec from "./component/cardSec.jsx";

//render your react application
ReactDOM.render(<> <Navbar/><Jumbotron/>
<div className="row mb-2">
<CardSec/>
</div>
<div className= "col">
<CardSec/>
</div>
<div className= "col">
<CardSec/>
</div>
<div className= "col">
<CardSec/>
</div>
<Home/></>, document.querySelector("#app"));
