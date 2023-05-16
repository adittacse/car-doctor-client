import React from 'react';
import Swal from 'sweetalert2'

const BookingRow = ({ booking, handleDelete }) => {
    const {_id, customerName, email, img, date, amount, service} = booking;
    
    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            { img && <img src={img} alt="Avatar Tailwind CSS Component" /> }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customerName}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{service}</div>
                    <div className="text-sm opacity-50">{amount}</div>
                </div>
            </td>
            <td>{date}</td>
            <th>
                <button className="btn bg-error text-white">Pending</button>
            </th>
        </tr>
    );
};

export default BookingRow;