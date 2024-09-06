import React, { Component } from 'react'
import {Link} from "react-router-dom";


export class self_help extends Component {
    render() {
        return (
        <div className='bottom-page-main-text'>
        <h1 className='bottom-page-main-text'>Englightenment</h1>
        <div className='home-page-text-bar'>
        <p className='bottom-page-body-text'>Have you ever wondered what it feels like to experience different levels of consciousness compared to your daily waking consciousness! Have ever
        thought about any moment in your life why I'm here! have you had any sense of wonder why does everything exists, why not the other case around? What is Reality made of ultimately and why it is here? If you ever wonder about this question and others about the Reality, Universe, and God then you might want to have an Englightenment Experience then you will understand a larger overarching picture about the Whole Reality. Therefore everything will make total sense to you, and you will forever be free from the false sense of yourself ("ego") and you will embarrass your Ultimate Self which is the Whole Reality. </p>
        <Link to="/Englitenment">
        <button className='button-for-below-page'>Explore more</button>
        </Link>
        </div>
        <div>
        <img
        className='selp-help-image-logo'
        alt='home-page-pic'
        height = '450px'
        weight= '300px'
        src="https://images.unsplash.com/photo-1480072723304-5021e468de85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"      ></img>
        </div>
        </div>
        )
    }
}

export default self_help
