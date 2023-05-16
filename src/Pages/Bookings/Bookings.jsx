import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../../providers/AuthProvider.jsx";
import BookingRow from "./BookingRow.jsx";
import Swal from "sweetalert2";

const Bookings = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    
    const url = `http://localhost:3000/bookings?email=${user?.email}`;
    useEffect( () => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    },[]);
    
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/bookings/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = bookings.filter(booking => booking._id !== id);
                            setBookings(remaining);
                        }
                    })
            }
        })
    }
    
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
                        <th>Service & Amount</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row */}
                    {
                        bookings.map(booking => <BookingRow key={booking._id} booking={booking} handleDelete={handleDelete}></BookingRow>)
                    }
                    </tbody>
                    {/* foot */}
                    <tfoot>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Service & Amount</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                    </tfoot>
                
                </table>
            </div>
        </div>
    );
};

export default Bookings;