import React from "react";
import './NavBar.scss';
import logo from "./img/logo.jpg"
import { CartWidget } from "../CartWidget/CartWidget";
import {NavLink} from 'react-router-dom'

const NavBar = () =>{ 
    return(
        <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark header__colorBackground">
            <div id="barraNav" className="container-fluid">

              <NavLink to={`/`}
                className="navbar-brand" href=""><img src={logo} 
                alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                  <h1>Isla Gourmet</h1>
              </NavLink>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
              
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink
                      to={'/category/torta'} className="nav-link">
                      Tortas
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to={'/category/tarta'} className="nav-link" >
                      Tartas
                    </NavLink>
                  </li>
                </ul>
                <CartWidget/>
                
              </div>
              
              
            </div>
        </nav>
    )
}

export default NavBar
