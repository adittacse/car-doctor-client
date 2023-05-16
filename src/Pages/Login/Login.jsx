import React, {useContext, useState} from 'react';
import loginImg from "../../assets/images/login/login.svg";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {AuthContext} from "../../providers/AuthProvider.jsx";

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    
    const from = location.state?.from?.pathname || "/";
    
    const handleLogin = (event) => {
        event.preventDefault();
        setSuccess("");
        setError("");
        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                setSuccess("Login successful!");
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError("Wrong Credentials!");
            })
    }
    
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-44">
                    <img src={loginImg} alt="Login Image"/>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl mt-5 mb-5 font-bold text-center">Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn text-white bg-[#FF3811]" type="submit" value="Login"/>
                            </div>
                        </form>
                        <p className="text-center my-4">New to Car Doctor? <Link className="text-[#FF3811] font-bold" to="/signup">Sign Up</Link></p>
                        <p className="text-success text-center">{success}</p>
                        <p className="text-warning text-center">{error}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;