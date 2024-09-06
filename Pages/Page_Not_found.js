import React, { Component } from 'react'

export class Page_Not_found extends Component {
    render() {
        return (
            <div>
                <h1 className='page_not-found-word'> The page you are trying to look for is not found</h1>
                <img
                className='page_not_found_image'
                alt='page_not_found'
                src='404_image.jpg'
                width='950px'
                height='750px'
                ></img>
            </div>
        )
    }
}

export default Page_Not_found
