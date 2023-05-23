import React from "react"

const Navbar = () => {
return ( 
  <div className= "">
        <nav className="navbar bg-dark grey navbar-expand-lg navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><strong>Start Bootstrap</strong></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse navbar-nav ml-auto " id="navbarNavAltMarkup">
      <div className="navbar-nav nav justify-content-end ms-auto">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">About</a>
        <a className="nav-link" href="#">Services</a>
        <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Contact</a>
      </div>
    </div>
  </div>
</nav></div>
)
}
export default Navbar