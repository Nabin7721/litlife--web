import React, { Component } from 'react'
import Slider from "../components/Slider";
import Trip from "../components/Trip";
import Self_help from '../components/Self_help';



export class Home_page extends Component {
    render() {
        return (
        <div className='Home-style'>
            <div>
                <Slider />
            </div>
            <div className='home-page-style'>
                <Trip />
            </div>
            <div className='selfhelp'>
                <Self_help />
            </div>
        </div>
        )
    }
}

export default Home_page;
