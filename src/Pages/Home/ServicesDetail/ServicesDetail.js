import React from 'react';
import { useParams } from 'react-router-dom';

const ServicesDetail = () => {
    const {serviceId} =useParams();
    return (
        <div>
            <h2>ServicesDetail{serviceId}</h2>
            <div></div>
        </div>
    );
};

export default ServicesDetail;