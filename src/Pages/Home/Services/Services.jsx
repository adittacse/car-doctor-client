import React, {useEffect, useState} from 'react';
import ServiceCard from "./ServiceCard.jsx";

const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect( () => {
        fetch("http://localhost:3000/services")
            .then(res => res.json())
            .then(data => setServices(data))
    },[]);
    
    return (
        <div className="mt-4">
            <div className="text-center">
                <h4 className="text-2xl font-semibold text-orange-600">Service</h4>
                <h2 className="text-4xl font-bold">Our Service Area</h2>
                <p className="w-[718px] mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;