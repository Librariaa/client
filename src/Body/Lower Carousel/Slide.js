import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { products } from '../../constants/products';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Slide = () => {
    return (
        <Carousel
            responsive={responsive}
            infinite={true}
            draggable={false}
            centerMode={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            showDots={true}
        >
            {
                products.map((product, i) => <img key={i} src={product.url} alt="product" height="150" />)
            }
        </Carousel>
    )
}

export default Slide
