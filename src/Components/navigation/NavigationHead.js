import React from 'react';
import { Link } from 'react-router-dom';

function NavigationHead(props){
    return <div className="nav-head">
            <nav id="header-nav" className="navbar navbar-expand-sm navbar-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/" >Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact" >Contact</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about" >About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/projects" >Projects</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/resume" >Resumé</Link>
                </li>
              </ul>    
          </div>
      </nav>
    
      <div className="jumbotron-fluid bg-primary opacity-2 text-white">
        <div className="container-fluid p-2">
        <h3 className="ml-4">Zachary Bright,</h3>
        <h2 className="ml-5 text-lowercase text-body">React/Javascript Developer</h2>
        <h5 className="ml-4 font-italic">New to the tech industry, seeking opportunities to grow with your company</h5>
        </div>
      </div>
    </div>
}

export default NavigationHead;