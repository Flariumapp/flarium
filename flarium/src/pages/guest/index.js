import React from 'react';
import Feature from '../../components/feature';
import FlightCheck from '../../components/flight-check';
import Partners from '../../components/partners';
import { Container, FeatureContainer, FlightDisplaycontainer, FlightDisplayWrapper, Legend, PartnerContainer } from './styles/guest';

const GuestPage = props => {
    return (
        <Container>
            <FlightDisplaycontainer>
                <FlightDisplayWrapper>
                    <Legend>
                        Building your airport experience
                    </Legend>
                <div style={{ height: 50 }} />
                <FlightCheck />
                </FlightDisplayWrapper>
            </FlightDisplaycontainer>
            <div style={{ height: 30 }} />
            <FeatureContainer>
                <Feature
                    title={'Find your best flying options'}
                    description={`You can search for the best flights and suitable timings
                    for your journey from the airport. This web app will redirect
                    you to the respective flight booking website according to your
                    choice. We don’t provide booking facilities`}
                />
                <Feature
                    title={'Pre-shopping Utilities'}
                    description={`You can shop and buy for the best flights and suitable timings
                    for your journey from the airport. This web app will redirect
                    you to the respective flight booking website according to your
                    choice. We don’t provide booking facilities`}
                />
            </FeatureContainer>
            <FeatureContainer>
                <Feature
                    title={'Goods and Baggages'}
                    description={`You can search for the best flights and suitable timings
                    for your journey from the airport. This web app will redirect
                    you to the respective flight booking website according to your
                    choice. We don’t provide booking facilities`}
                />
                <Feature
                    title={'Tracking Flights Status'}
                    description={`You can search for the best flights and suitable timings
                    for your journey from the airport. This web app will redirect
                    you to the respective flight booking website according to your
                    choice. We don’t provide booking facilities`}
                />
            </FeatureContainer>
            <PartnerContainer>
                <Partners />
            </PartnerContainer>
        </Container>
    );
}

export default GuestPage;