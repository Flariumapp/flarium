import React from 'react';
import PropTypes from 'prop-types';
import { Container, Display, Logo, Section, Airport, Status, Text, Wrapper } from './styles/flight-book';

const FlightBook = ({ logo, company, origin, destination, date, passenger, price, status }) => {
    const statusHash = {
        'Booked': '#1894FF',
        'Cancelled': '#FF1818',
        'Terminated': '#05A31E',
    };

    return (
        <Container>
            <Wrapper>
                <Section>
                    <Display>
                        <Logo src={logo} alt={company} />
                    </Display>
                </Section>
                <Section>
                    
                    <Text><Airport>{origin}</Airport>to<Airport>{destination}</Airport></Text>
                    
                </Section>
                <Section>
                    <Text>{date}</Text>
                </Section>
                <Section>
                    <Text>{passenger} Passenger</Text>
                </Section>
                <Section>
                    <Text>Rs.{price}</Text>
                </Section>
                <Section>
                    <Status color={statusHash[status]}>{status}</Status>
                </Section>
            </Wrapper>
        </Container>
    );
}

FlightBook.propTypes = {
    logo: PropTypes.string,
    company: PropTypes.string,
    origin: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    passenger: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    status: PropTypes.oneOf(['Booked', 'Cancelled', 'Terminated']).isRequired,
}

export default FlightBook;