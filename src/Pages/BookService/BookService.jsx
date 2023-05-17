import React, {useContext} from 'react';
import {useLoaderData} from "react-router-dom";
import {AuthContext} from "../../providers/AuthProvider.jsx";
import Swal from "sweetalert2";

const BookService = () => {
    const service = useLoaderData();
    const {_id, title, img, price} = service;
    const {user} = useContext(AuthContext);
    
    const handleService = (event) => {
        event.preventDefault();
        
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const amount = form.amount.value;
        
        const booking = {
            customerName: name,
            email,
            img,
            date,
            amount,
            service_id: _id,
            service: title,
        }
        
        fetch("http://localhost:3000/bookings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire(
                        'Booked Successfully!',
                        'Service Booked Successfully!',
                        'success'
                    )
                }
            })
    }
    
    return (
        <div>
            <h2 className="text-center text-3xl mt-10 mb-10">Car Service: {title}</h2>
            <form onSubmit={handleService}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="text" name="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" id="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" name="amount" defaultValue={"$" + price} placeholder="Due AMount" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn text-white bg-[#FF3811] btn btn-block" type="submit" value="Order Confirm"/>
                </div>
            </form>
            <div className="card-body">
            </div>
        </div>
    );
};

export default BookService;