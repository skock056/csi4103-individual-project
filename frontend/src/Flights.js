import React, { useState } from 'react';
// import axios from 'axios';
import 'bulma/css/bulma.css';

function Flights() {
    // State variable to store the API data
    //const [data, setData] = useState(null);
    // State variable to track if the data is being fetched
    const [isLoading, setIsLoading] = useState(false);
    // API key
    // const apiKey = `2c055a4d38d94561f952c823a8538223`;
    const [data, setData] = useState([
        {flight_number: "AC442",
        departure_airport_code: "CYYZ", 
        arrival_airport_code: "CYOW",
        departure_time: "09:15 JAN.24",
        arrival_time: "0"}
    ])
    /* Function to fetch the data from the API
    const fetchData = () => {
        setIsLoading(true);
        axios.get(`http://api.aviationstack.com/v1/flights?access_key=2c055a4d38d94561f952c823a8538223`)
        .then(response => {
            setData(response.data);
            setIsLoading(false);
            
        })
        .catch(error => {
            console.log(error);
            setIsLoading(false);
        });
    }

    Columns definition for the table
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
    ]; */

    function toggleTable(){
        if (document.getElementById("myTable").style.display == "none")
            document.getElementById("myTable").style.display = "block";
        else
            document.getElementById("myTable").style.display = "none";
    }

    //Bulma CSS Styling
    return (
        <div className="container">
            <div className="level">
                <div className="level-left">
                <button className="button is-primary" onClick={() => toggleTable()} disabled={isLoading}>
                    View Flights to/from YOW
                </button>
                </div>
            </div>
            <div className="box">
                {data && (
                    <table id="myTable" className="table is-striped is-hoverable is-fullwidth" style={{display:"none"}}>
                        <thead>
                            <tr>
                                <th>Flight Number</th>
                                <th>Departure Airport</th>
                                <th>Arrival Airport</th>
                                <th>Departure Time</th>
                                <th>Arrival Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(flight => (
                                <tr key={flight.flight_number}>
                                    <td>{flight.flight_number}</td>
                                    <td>{flight.departure_airport_code}</td>
                                    <td>{flight.arrival_airport_code}</td>
                                    <td>{flight.departure_time}</td>
                                    <td>{flight.arrival_time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}


export default Flights;