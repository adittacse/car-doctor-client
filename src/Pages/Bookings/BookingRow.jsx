import React from 'react';

const BookingRow = ({ booking }) => {
    const {customerName, email, img, date, amount, service} = booking;
    
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
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
                <button className="btn btn-ghost btn-xs">Pending</button>
            </th>
        </tr>
    );
};

export default BookingRow;