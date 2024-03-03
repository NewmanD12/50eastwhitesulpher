import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


const WelcomeImgCarousel = () => {

    const imageNames = ['flamey-drip', 'steakAndTaters', 'hamSammich']

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