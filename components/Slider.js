import React, { Component } from "react";
import {Link} from "react-router-dom";


export class Slider extends Component {
  render() {
    return (
      <div className='header-words'>
        <h1 className='first-text-home-page'>Spirituality</h1>
        <div className='home-page-text-bar'>
        <p className='home-text-bottom'>What is Spirituality? How can I become more spiritual in my daily life? What is the benefit of becoming a Spiritual being? How can I apply Spiritually in my life so that that life becomes amazing? What is the nature of myself and why I'm here? </p>
        <Link to='/Consciousness'>
        <button className='button-learn-more'>Explore more</button>
        </Link>
        <img
        alt='home-page-pic'
        className='plant-img'
        height = '450px'
        weight= '450px'
        src="https://q4j2g5j9.stackpathcdn.com/ddg-dream/618f148bec4d4c3618b74c9096e80870eadf54cc.jpg"     ></img>
        </div>
      </div>
    );
  }
}

export default Slider;
