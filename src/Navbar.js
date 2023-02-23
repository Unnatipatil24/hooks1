import React from 'react'
import {Link} from 'react-router-dom';
export default function Navbar(props){
    return(
<>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link className="navbar-brand" to="/">{props.V}</Link>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Components/UseState">UseState</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Components/UseEffect">UseEffect</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Components/UseRef">UseRef</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Components/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Components/Pageindex">Index</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Components/UseContext">UseContext</Link>
        </li>

      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</>



    )
}