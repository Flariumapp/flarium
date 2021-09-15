import React from 'react';
import { ButtonContainer, Container, FlightBox, FlightDisplay, FlightLocation, FlightLogo, Form, FormContainer, InputContainer, Legend, NextFlightsContainer, Section } from './styles/flight-check';
import { Button, Input } from 'antd';
import { FiMapPin, FiCalendar } from 'react-icons/fi';

import spiceJet from '../../images/logo/spice-jet.png';
import indigo from '../../images/logo/indigo.png';
import goFirst from '../../images/logo/go-first.jpeg';
// import airIndia from '../../images/logo/air-india.jpeg';
import airAsia from '../../images/logo/air-asia.jpeg';
// import vistara from '../../images/logo/vistara.png';
import jetAirways from '../../images/logo/jet-airways.png';

const FlightCheck = props => {

    const flights = [
        {
            id: 'f1',
            location: 'Mumbai',
            logo: spiceJet,
        },
        {
            id: 'f2',
            location: 'Hyderabad',
            logo: indigo,
        },
        {
            id: 'f3',
            location: 'Mumbai',
            logo: indigo,
        },
        {
            id: 'f4',
            location: 'Bangalore',
            logo: spiceJet,
        },
        {
            id: 'f5',
            location: 'Thailand',
            logo: airAsia,
        },
        {
            id: 'f6',
            location: 'Mumbai',
            logo: goFirst,
        },
        {
            id: 'f7',
            location: 'USA',
            logo: jetAirways,
        },
        {
            id: 'f8',
            location: 'Bangalore',
            logo: goFirst,
        },
        {
            id: 'f9',
            location: 'Hyderabad',
            logo: spiceJet,
        }
    ];
    
    return (
        <Container>
            <Section width={30}>
                <FormContainer>
                    <div style={{ height: 30 }} />
                    <Form>
                        <InputContainer>
                            <Input size="large" prefix={<FiMapPin color={"#707070"} />} placeholder="Origin" />
                        </InputContainer>
                        <InputContainer>
                            <Input size="large" prefix={<FiMapPin color={"#707070"} />} placeholder="Destination" />
                        </InputContainer>
                        <InputContainer>
                            <Input size="large" prefix={<FiCalendar color={"#707070"} />} placeholder="Date and Time" />
                        </InputContainer>
                        <ButtonContainer>
                            <Button size="large" type="primary"  block>Search avialable flights</Button>
                        </ButtonContainer>
                    </Form>
                </FormContainer>
            </Section>
            {/* <div style={{ width: 20 }} /> */}
            <Section width={70}>
                <Legend>
                    Next Flights to Arrive/Depart
                </Legend>
                <NextFlightsContainer>
                    {
                        flights.map(f => {
                            return (
                                <FlightBox key={f.id}>
                                    <FlightDisplay>
                                        <FlightLogo src={f.logo} alt={f.location} />
                                    </FlightDisplay>
                                    <FlightLocation>{f.location}</FlightLocation>
                                </FlightBox>
                            );
                        })
                    }
                </NextFlightsContainer>
            </Section>
        </Container>
    );
}

export default FlightCheck;