import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import LocationCard from './LocationCard'
import { Button } from '@material-ui/core';

export default function LocationsList() {
    const [location, setLocation] = useState([]);
    // console.log(location)
    useEffect(()=> {
        axios
        .get(`https://rickandmortyapi.com/api/location/`)
        .then(response => {
            console.log('res', response)
            setLocation(response.data.results)
        })
        .catch(error => {
            console.error(error);
          });
    }, []);

    return (
        <section className="location-list">
       <Link to= "/"><Button variant="outlined" color="primary" size="small" >Home</Button></Link>
      {location.map(loc => (
        <LocationCard key={loc.id}
         name={loc.name}
         type={loc.type}
         dimension={loc.dimension}
        />
        )
      )}
    </section>
    );
}