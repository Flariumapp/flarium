import axios from '../../axios-config';
import { baseUrl } from '../../utility/base-url';
import { CompanyHash } from '../../utility/company-map';
import { FlightStatusHash } from '../../utility/flight-status-map';
import { SET_FLIGHTS, FLIGHT_SUCCESS } from '../action-types';

export const fetchFlights = (token) => {
    return async dispatch => {
        try {
            const response = await axios.get('flights');

            console.log(response.data);

            const flights = response.data;
            dispatch(setFlights(flights));
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}

const setFlights = (flights) => {
    const loadedFlights = [];

    for (const key in flights) {
        const { id, destination, time, terminal, gateNo, isArrival, isInternational } = flights[key];
        let dest = 'Delhi', origin = 'Delhi';

        if (isArrival) {
            origin = destination;
        } else {
            dest = destination;
        }

        const cpy = flights[key].company;


        loadedFlights.push({
            key: id,
            id,
            origin,
            destination: dest,
            time,
            terminal,
            gateNo,
            isArrival,
            isInternational,
            company: {
                id: cpy.id,
                brand: cpy.name,
                // logo: CompanyHash['spicejet'].logo,
                logo: cpy.url === null || cpy.url.trim().length === 0 ? CompanyHash['spicejet'].logo : baseUrl + cpy.url,
            },
            status: {
                text: 'scheduled',
                color: FlightStatusHash['scheduled'],
            }
        });
    }

    return {
        type: SET_FLIGHTS,
        flights: loadedFlights,
    }
}

const flightSuccess = () => {
    return {
        type: FLIGHT_SUCCESS,
    }
}