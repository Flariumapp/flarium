import React from 'react';
import PropTypes from 'prop-types';
import { Container, Display, Text, Wrapper } from './styles/facility';

const Facility = ({ icon, text }) => {
    return (
        <Container>
            <Wrapper>
                <Display>
                    {icon}
                </Display>
                <Text>
                    {text}
                </Text>
            </Wrapper>
        </Container>
    );
}

Facility.propTypes = {
    icon: PropTypes.elementType.isRequired,
    text: PropTypes.string.isRequired,
};

export default Facility;