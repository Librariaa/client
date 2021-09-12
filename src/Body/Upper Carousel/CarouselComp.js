import React from 'react';
import Carousel from 'react-material-ui-carousel';
import img1 from '../../images/28ecbec578294adc.jpeg';
import img2 from '../../images/2ffb339bd73f6fc0.jpeg';
import img3 from '../../images/3e069fc32509c17c.jpg';
import img4 from '../../images/43937a0ba7a79d8a.jpeg';
import img5 from '../../images/4b33751fb721e5fd.jpg';
import img6 from '../../images/60854df7f6189a55.jpg';
import img7 from '../../images/d7dd5e4e04f6bfbc.jpg';

const CarouselComp = (props) => {
    const items = [img1, img2, img3, img4, img5, img6, img7];

    return (
        <Carousel
            animation="slide"
            navButtonsAlwaysVisible={true}
            navButtonsProps={{
                style: {
                    backgroundColor: '#fff',
                    color: '#494949'
                }
            }} >
            {
                items.map((item, i) => <img key={i} src={item} alt='banner' width="100%" />)
            }
        </Carousel>
    )
}

export default CarouselComp;