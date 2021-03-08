import React from 'react';
import { Link } from 'react-router-dom';

function NavigationFoot(props){
    return <div className='nav-foot'>
        <nav className="navbar navbar-dark justify-content-center">
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/portfolio" >Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/portfolio/contact" >Contact</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/portfolio/about" >About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/portfolio/projects" >Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio/resume" >Resumé</Link>
              </li>
          </ul>       
      </nav>
    </div>
}

export default NavigationFoot;