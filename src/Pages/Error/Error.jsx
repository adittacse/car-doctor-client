import React from 'react';
import {Link} from "react-router-dom";

const Error = () => {
    const errorImage = "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8NDA0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
    
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={errorImage} className="max-w-sm rounded-lg shadow-2xl" />
                <div className="ml-12">
                    <h1 className="text-5xl font-bold">Oops!</h1>
                    <h2 className="text-4xl font-bold mt-6">404 Page Not Found</h2>
                    <p className="py-6">We're sorry, the page you requested could not be found. Please go back to the homepage.</p>
                    <Link to="/">
                        <button className="btn btn-primary">Go to Homepage</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;