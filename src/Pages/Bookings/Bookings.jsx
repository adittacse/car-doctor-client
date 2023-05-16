import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../../providers/AuthProvider.jsx";
import BookingRow from "./BookingRow.jsx";

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
        <div className="mb-10">
            <h2 className="text-center text-5xl mt-10 mb-10">Your Bookings: {bookings.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row */}
                    {
                        bookings.map(booking => <BookingRow key={booking._id} booking={booking}></BookingRow>)
                    }
                    </tbody>
                    {/* foot */}
                    <tfoot>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                    </tfoot>
                
                </table>
            </div>
        </div>
    );
};

export default Bookings;