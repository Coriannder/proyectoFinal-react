import React from "react";
import './NavBar.scss';
import logo from "./img/logo.jpg"
import { CartWidget } from "../CartWidget/CartWidget";
import {NavLink} from 'react-router-dom'

const NavBar = ({functionDeApp}) =>{ // funcion parametro para guardar en componente App
                                     // las rutas del componente ItemListContainer
    return(
        <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark header__colorBackground">
            <div id="barraNav" className="container-fluid">

              <NavLink to={`/`}
                onClick = {()=>functionDeApp('/')} 
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
                    <NavLink onClick = {()=>functionDeApp('/category/torta')}
                      to={'/category/torta'} className="nav-link">
                      Tortas
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink onClick = {()=>functionDeApp('/category/tarta')}
                      to={'/category/tarta'} className="nav-link" >
                      Tartas
                    </NavLink>
                  </li>
                  {/* <li className="nav-item">
                    <NavLink to={} className="nav-link" >Servicios</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={} className="nav-link" >Galeria</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={} className="nav-link" >Contacto</NavLink>
                  </li> */}
                </ul>
                <CartWidget/>
                
              </div>
              
              
            </div>
        </nav>
    )
}

export default NavBar
