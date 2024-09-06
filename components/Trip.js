import React, { Component } from "react";
import {Link} from "react-router-dom";


export default class Trip extends Component {
  render() {
    return (
      <div>
      <div><p className="first-text-trip-page">All Stars Topic</p></div>
      <div className="flex-container">
        <div>
          <img
            className="trip-pic"
            src="Discovery.jpg"
            alt="trip"
            width="400"
            height="400"
          ></img>
          <p className='image-text-1'>Meditation - Guide to becoming  the best version of yourself through practice and start to change your life in a profound way. 
          </p>
          <Link to='/Meditation'>
          <button className='image-button-1'> Explore more</button>
          </Link>
        </div>
        <div>
          <img
            className="trip-pic "
            src="https://q4j2g5j9.stackpathcdn.com/ddg-dream/4bba56e4b46a284dc4cef486295e9a418ad16f8d.jpg"
            alt=""
            width="400"
            height="400"
          ></img>
          <p className='image-text-1'>Hero's Journey - Understand and implantment highest truth in your life.
          </p>
          <Link to='/Heros_Journey'>
          <button className='image-button-1'> Explore more</button>
          </Link>
        </div>
        <div>
          <img
            className="trip-pic "
            src="https://iasos.com/artists/erial/=LionOfGod.jpg"
            alt="infiniteswatch"
            width="400"
            height="400"
            ></img>
          <p className='image-text-1'>The Supreme Personality of GodHead - knowing the absoulte truth
          that one who dewell within the body is immortal that never dies and is never even born. </p>
          <Link to='/God_head'>
          <button className='image-button-1'> Explore more</button>
          </Link>
        </div>
      </div>
      </div>
    );
  }
}
