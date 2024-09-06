import React, { Component } from "react";
import {Link} from "react-router-dom";


export class Navbar extends Component {
  render() {
    return (
      <div className="nav-bar">
          
          <ul>
            <li>
            <Link to='/'>
            <a href="#Home" className='Home-nav'>Home</a>
            </Link>
            </li>
            <li>
            <Link to='/Consciousness'>
                <a href="#spir">Spirituality</a>
            </Link>
            </li>
            <li>
            <Link to='/Meditation'>
                <a href="#medi">Meditation</a>
            </Link>
            </li>
            <li>
            <Link to='/Heros_Journey'>
                  <a href="#hero">Heros Journey</a>
            </Link> 
            </li>
            <li>
            <Link to='/God_head'>
                  <a href="#God">Personality of GodHead</a>
            </Link>  
            </li>
            <li>
            <Link to='/Englitenment'>
                  <a href="#Life">Englightement</a>
            </Link>
            </li>
          </ul>
        </div>
             
    );
  }
}

export default Navbar;
