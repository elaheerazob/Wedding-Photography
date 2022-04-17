import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices] =useState([]);
    useEffect( () =>{
        fetch('Photographer.json')
        .then(res =>res.json())
        .then(data =>setServices(data));
    },[])
    return (
        <div className='row w-100'>
            <h1 className="text-center my-4 ">Wedding Packages</h1>
            {
                services.map(service =><Service
                key={service.id}
                service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;