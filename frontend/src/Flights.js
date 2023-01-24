import React, { useState } from 'react';
import axios from 'axios';
import ReactTable from 'react-table';

function Flights() {
    // State variable to store the API data
    const [data, setData] = useState(null);
    // State variable to track if the data is being fetched
    const [isLoading, setIsLoading] = useState(false);
    // API key
    const apiKey = `2c055a4d38d94561f952c823a8538223`;

    // Function to fetch the data from the API
    const fetchData = () => {
        setIsLoading(true);
        axios.get(`http://api.aviationstack.com/v1/flights?access_key=2c055a4d38d94561f952c823a8538223&dep_iata=YOW&arr_iata=YOW`)
        .then(response => {
            setData(response.data.flights);
            setIsLoading(false);
        })
        .catch(error => {
            console.log(error);
            setIsLoading(false);
        });
    }

    // Columns definition for the table
    const columns = [
        {
            Header: 'Flight Number',
            accessor: 'flight_number'
        },
        {
            Header: 'Departure Airport',
            accessor: 'departure_airport_code'
        },
        {
            Header: 'Arrival Airport',
            accessor: 'arrival_airport_code'
        },
        {
            Header: 'Departure Time',
            accessor: 'departure_time'
        },
        {
            Header: 'Arrival Time',
            accessor: 'arrival_time'
        }
    ];

    return (
        <div>
            <button onClick={fetchData} disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Fetch Data'}
            </button>
            {data && (
                <ReactTable 
                    data={data} 
                    columns={columns} 
                />
            )}
        </div>
    );
}

export default Flights;
