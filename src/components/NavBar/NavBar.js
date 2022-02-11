import React from "react";
import './NavBar.css';
import logo from "./img/logo.jpg"
import { CartWidget } from "../CartWidget/CartWidget";

const NavBar = () =>{
    return(
        <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark header__colorBackground">
            <div id="barraNav" className="container-fluid">
              <a className="navbar-brand" href=""><img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                <h1>Isla Gourmet</h1>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
              
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="">Inicio</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">Nosotros</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">Servicios</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">Galeria</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">Contacto</a>
                  </li>
                </ul>
                <CartWidget/>
                
              </div>
              
              
            </div>
        </nav>
    )
}

export default NavBar
