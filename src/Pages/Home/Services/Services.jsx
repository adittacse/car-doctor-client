import React, {useEffect, useRef, useState} from 'react';
import ServiceCard from "./ServiceCard.jsx";

const Services = () => {
    const [services, setServices] = useState([]);
    const [asc, setAsc] = useState(true);
    const searchRef = useRef(null);
    const [search, setSearch] = useState("");
    
    useEffect( () => {
        fetch(`https://car-doctor-server-gray-eight.vercel.app/services?search=${search}&sort=${asc ? "asc" : "desc"}`)
        // fetch(`http://localhost:3000/services?search=${search}&sort=${asc ? "asc" : "desc"}`)
            .then(res => res.json())
            .then(data => setServices(data))
    },[asc, search]);
    
    const handleSearch = (event) => {
        setSearch(searchRef.current.value);
    }
    
    return (
        <div className="mt-4 mb-10">
            <div className="text-center">
                <h4 className="text-2xl font-semibold text-orange-600">Service</h4>
                <h2 className="text-4xl font-bold">Our Service Area</h2>
                <p className="w-[718px] mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" ref={searchRef} placeholder="Search…" className="input input-bordered" />
                        <button onClick={handleSearch} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
                
                <button onClick={() => setAsc(!asc)} className="btn btn-primary">
                    {asc ? "Price high to low" : "Price low to high"}
                </button>
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