import React, { useState, useEffect } from 'react';
import { Input, Button, Table, message, Spin } from 'antd';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import { Container, EntrySection, FlightsTable, Form, InputContainer, ButtonContainer, Display, Logo, Status, LoadingContainer, Loader } from './styles/flights';
import { CompanyHash } from '../../utility/company-map';
import { FlightStatusHash } from '../../utility/flight-status-map';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFlights } from '../../store';

const FlightsPage = (props) => {
    const dispatch = useDispatch();

    const token = useSelector(state => state.ath.token);
    const flights = useSelector(state => state.flt.flights);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        dispatch(fetchFlights(token))
            .then(result => {
                setIsLoading(false);
            }).catch(err => {
                setIsLoading(false);
                const errMsg = err.response && err.response.data ? err.response.data.message : 'Flights fetch failed';
                message.error({
                    content: errMsg,
                });
            });
    }, [dispatch, token]);


    const columns = [
        {
            title: 'Flight No.',
            dataIndex: 'id',
            key: 'flightNo',
        },
        {
            title: 'Brand',
            dataIndex: 'company',
            key: 'brand',
            render: (company) => {
                const { logo, brand } = company;
                return (
                    <Display>
                        <Logo src={logo} alt={brand} />
                    </Display>
                )
            }
        },
        {
            title: 'Origin',
            dataIndex: 'origin',
            key: 'origin',
        },
        {
            title: 'Destination',
            dataIndex: 'destination',
            key: 'destination',
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: 'Terminal',
            dataIndex: 'terminal',
            key: 'terminal',
        },
        {
            title: 'Gate No.',
            dataIndex: 'gateNo',
            key: 'gateno',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: ({text, color}) => (
                <Status color={color}>
                    {text}
                </Status>
            )
        },
    ];

    const actualFlights = [
        {
            id: 'A345F',
            brand: CompanyHash['spicejet'],
            origin: 'Delhi',
            destination: 'Mumbai',
            time: 1500,
            gateNo: "1",
            terminal: "T3",
            status: FlightStatusHash['flying'],
        },
        {
            id: 'BD453',
            brand: CompanyHash['indigo'],
            origin: 'Delhi',
            destination: 'Hyderabad',
            time: 1500,
            gateNo: "1",
            terminal: "T3",
            status: FlightStatusHash['flying'],
        },
        {
            id: 'AB345',
            brand: CompanyHash['jetairways'],
            origin: 'Delhi',
            destination: 'Mumbai',
            time: 1500,
            gateNo: "1",
            terminal: "T3",
            status: FlightStatusHash['scheduled'],
        },
        {
            id: 'AD8R4',
            brand: CompanyHash['spicejet'],
            origin: 'Bangalore',
            destination: 'Delhi',
            time: 1500,
            gateNo: "1",
            terminal: "T3",
            status: FlightStatusHash['scheduled'],
        },
        {
            id: 'C564E',
            brand: CompanyHash['vistara'],
            origin: 'Thailand',
            destination: 'Delhi',
            time: 1500,
            gateNo: "1",
            terminal: "T3",
            status: FlightStatusHash['scheduled'],
        },
    ];

    // const actualFlights = [
    //     {
    //         "id": "SG9032",
    //         "destination": "Zvartnots International Airport",
    //         "time": 1500,
    //         "terminal": "T3",
    //         "gateNo": "1",
    //         "isArriving": 0,
    //         "isInternational": 0
    //     }
    // ];


    if(isLoading) {
        return (
            <LoadingContainer>
                <Loader>
                    <Spin size={20} />
                </Loader>
            </LoadingContainer>
        );
    }
    
    return (
        <Container>
            <EntrySection>
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
            </EntrySection>
            <FlightsTable>
                <Table columns={columns} dataSource={flights}  />
            </FlightsTable>
        </Container>
    );
}

export default FlightsPage;