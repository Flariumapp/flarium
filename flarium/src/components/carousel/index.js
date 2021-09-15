import React, { useState } from 'react';
import { Container, Display, Indicator, IndicatorContainer, Photo } from './styles/carousel';
import { Carousel as Crsl } from 'antd';

import photo1 from '../../images/carousel/pexels-skitterphoto-804463.jpg';
import photo2 from '../../images/carousel/04_020918_Airport_Carroll.2e16d0ba.fill-735x490.jpg';
import photo3 from '../../images/carousel/airport-Doha-Qatar-Middle-East-laugh-travel-eat.jpeg';
import photo4 from '../../images/carousel/airport.jpeg';
import photo5 from '../../images/carousel/hyderabad-airport.jpeg';
import photo6 from '../../images/carousel/mumbai-airport-twitter.jpeg';
import photo7 from '../../images/carousel/101325608-Mumbai_revamped_airport_2.jpeg';

const Carousel = props => {
    const [index, setIndex] = useState(0);

    const carouselData = [
        {
            id: 'c1',
            photo: photo1,
        },
        {
            id: 'c2',
            photo: photo2,
        },
        {
            id: 'c3',
            photo: photo3,
        },
        {
            id: 'c4',
            photo: photo4,
        },
        {
            id: 'c5',
            photo: photo5,
        },
        {
            id: 'c6',
            photo: photo6,
        },
        {
            id: 'c7',
            photo: photo7,
        },
    ];
    
    const handleIndex = (i) => {
        const n = carouselData.length;
        setIndex((i + 1) % n);
    }

    return (
        <Container>
            <Crsl dots={false} fade autoplay beforeChange={handleIndex} slickGoTo={index}>
                {
                    carouselData.map(c => {
                        return (
                            <Display key={c.id}>
                                <Photo src={c.photo} alt={"airport image"} />
                            </Display>
                        );
                    })
                }
            </Crsl>
            <IndicatorContainer>
                {
                    carouselData.map((c, i) => {
                        return (
                            <Indicator key={c.id} active={index === i} onClick={() => setIndex(i)} />
                        );
                    })
                }
            </IndicatorContainer>
        </Container>
    );
}

export default Carousel;