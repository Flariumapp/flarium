import React from "react";
import PropType from 'prop-types';
import { Container, Title, Description } from './styles/feature';

const Feature = ({ title, description }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Container>
    );
}

Feature.propTypes = {
    title: PropType.string,
    description: PropType.string,
};

export default Feature;