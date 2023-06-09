import React, {useContext, useState} from 'react';
import img from "../../assets/images/login/login.svg";
import {Link} from "react-router-dom";
import {AuthContext} from "../../providers/AuthProvider.jsx";
import {getAuth, updateProfile} from "firebase/auth";
import SocialLogin from "../Shared/SocialLogin/SocialLogin.jsx";

const SignUp = () => {
    const {createUser, logOut} = useContext(AuthContext);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    
    const handleSignUp = (event) => {
        event.preventDefault();
        setSuccess("");
        setError("");
        
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                logOut()
                    .then( () => {})
                    .catch(error => {
                        setError(error.message);
                    });
                updateProfile(createdUser, {
                    displayName: name,
                })
                    .then(() => {})
                    .catch(error => {
                        setError(error.message);
                    })
                console.log(createdUser);
                setSuccess("User has been successfully created!");
            })
            .catch(error => {
                setError(error.message);
            })
    }
    
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-44">
                    <img src={img} alt="Register Image"/>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl mt-5 mb-5 font-bold text-center">Sign Up</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Your email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Your password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn text-white bg-[#FF3811]" type="submit" value="Sign Up"/>
                            </div>
                        </form>
                        <p className="text-center my-4">Already have an account? <Link className="text-[#FF3811] font-bold" to="/login">Login</Link></p>
                        <p className="text-success text-center">{success}</p>
                        <p className="text-warning text-center">{error}</p>
                        <SocialLogin setSuccess={setSuccess} setError={setError}></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;