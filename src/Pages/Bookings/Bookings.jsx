import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../../providers/AuthProvider.jsx";

const Bookings = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    
    const url = `http://localhost:3000/bookings?email=${user?.email}`;
    useEffect( () => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    },[]);
    
    return (
        <div>
            <h2 className="text-center text-5xl mt-10 mb-10">Your Bookings: {bookings.length}</h2>
        </div>
    );
};

export default Bookings;