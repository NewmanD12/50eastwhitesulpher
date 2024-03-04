import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './WelcomeImgCarousel.css'


const WelcomeImgCarousel = () => {

    const imageNames = ['steakAndTaters', 'hamSammich', 'flamey-drip']

    return (

        <div id='carousel-div'>
            <Carousel className='mt-1' id='carousel'>

            {imageNames.map((name, index) => {
                return <Carousel.Item key={index}>
                            <img src={`${name}.jpg`} id='landing-page-images'></img>
                        </Carousel.Item>
            })}
            
            
            </Carousel>
        </div>
    )
}

export default WelcomeImgCarousel