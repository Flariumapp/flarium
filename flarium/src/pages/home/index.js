import React from 'react';
import FlightCheck from '../../components/flight-check';
import { Container, FacilityContainer, FacilityRow, FlightBookContainer, FlightDisplaycontainer, FlightDisplayWrapper, Legend, SubLegend } from './styles/home';
import { IoFastFood, IoSwapHorizontal, IoBriefcase, IoNavigate } from 'react-icons/io5';
import { FaPassport, FaTshirt, FaDollarSign, FaLuggageCart, FaUserCheck } from 'react-icons/fa';

import spiceJet from '../../images/logo/spice-jet.png';
import indigo from '../../images/logo/indigo.png';
// import goFirst from '../../images/logo/go-first.jpeg';
// import airIndia from '../../images/logo/air-india.jpeg';
import airAsia from '../../images/logo/air-asia.jpeg';
// import vistara from '../../images/logo/vistara.png';
// import jetAirways from '../../images/logo/jet-airways.png';
import FlightBook from '../../components/flight-book';
import Facility from '../../components/facility';

const HomePage = props => {

    const flightBooks = [
        {
            id: 'b1',
            logo: spiceJet,
            company: 'Spicejet',
            origin: 'delhi',
            destination: 'mumbai',
            date: '11 september 2021',
            passenger: 1,
            price: 3250,
            status: 'Booked',
        },
        {
            id: 'b2',
            logo: indigo,
            company: 'Indigo',
            origin: 'delhi',
            destination: 'hyderabad',
            date: '11 september 2021',
            passenger: 1,
            price: 3250,
            status: 'Cancelled',
        },
        {
            id: 'b3',
            logo: airAsia,
            company: 'Air Asia',
            origin: 'delhi',
            destination: 'thailand',
            date: '11 september 2021',
            passenger: 1,
            price: 3250,
            status: 'Terminated',
        },
        {
            id: 'b1',
            logo: spiceJet,
            company: 'Spicejet',
            origin: 'delhi',
            destination: 'hyderabad',
            date: '11 september 2021',
            passenger: 1,
            price: 3250,
            status: 'Terminated',
        },  
    ];

    const iconSize = 45;
    const iconColor = "#434343";

    const airportFacilities = [
        {
            id: 'af1',
            text: 'Foods and Resturants',
            icon: <IoFastFood color={iconColor} size={iconSize} />
        },
        {
            id: 'af2',
            text: 'Dress and Clothing',
            icon: <FaTshirt color={iconColor} size={iconSize} />
        },
        {
            id: 'af3',
            text: 'Banks and ATMs',
            icon: <FaDollarSign color={iconColor} size={iconSize} />
        },
        {
            id: 'af4',
            text: 'Foods and Resturants',
            icon: <IoSwapHorizontal color={iconColor} size={iconSize} />
        },
        {
            id: 'af5',
            text: 'Travel Helpline',
            icon: <IoBriefcase color={iconColor} size={iconSize} />
        }, 
    ];

    const boardingFacilities = [
        {
            id: 'bf1',
            text: 'Bags and Luggage',
            icon: <FaLuggageCart color={iconColor} size={iconSize} />
        },
        {
            id: 'bf2',
            text: 'Security Check',
            icon: <FaUserCheck color={iconColor} size={iconSize} />
        },
        {
            id: 'bf3',
            text: 'Entry and Terminals',            
            icon: <IoNavigate color={iconColor} size={iconSize} />
        },
        {
            id: 'af4',
            text: 'Boarding Pass and Passport',
            icon: <FaPassport color={iconColor} size={iconSize} />
        },
        {
            id: 'bf5',
            text: 'Boarding Helpline',
            icon: <IoBriefcase color={iconColor} size={iconSize} />
        }, 
    ];

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
            <FlightBookContainer>
                <SubLegend>Your recent flight bookings</SubLegend>
                {
                    flightBooks.map(f => {
                        return (
                            <FlightBook
                                key={f.id}
                                company={f.company}
                                logo={f.logo}
                                origin={f.origin}
                                destination={f.destination}
                                date={f.date}
                                passenger={f.passenger}
                                price={f.price}
                                status={f.status}
                            />
                        );
                    })   
                }
            </FlightBookContainer>
            <div style={{ height: 30 }} />
            <FacilityContainer>
                <SubLegend>Airport Facilities</SubLegend>
                <FacilityRow>
                   {
                        airportFacilities.map(f => {
                            return (
                                <Facility
                                    key={f.id}
                                    icon={f.icon}
                                    text={f.text}
                                />
                            );
                        })
                   }
                </FacilityRow>
                <div style={{ height: 40 }} />
                <SubLegend>Boarding Facilities</SubLegend>
                <FacilityRow>
                   {
                        boardingFacilities.map(f => {
                            return (
                                <Facility
                                    key={f.id}
                                    icon={f.icon}
                                    text={f.text}
                                />
                            );
                        })
                   }
                </FacilityRow>
            </FacilityContainer>
            <div style={{ height: 100 }} />
        </Container>
    );
}

export default HomePage;