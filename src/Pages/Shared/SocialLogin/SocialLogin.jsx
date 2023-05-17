import React, {useContext} from 'react';
import {AuthContext} from "../../../providers/AuthProvider.jsx";
import {useLocation, useNavigate} from "react-router-dom";

const SocialLogin = ({ setSuccess, setError }) => {
    const {googleSignIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                setError("");
                const loggedUser = result.user;
                navigate(from, { replace: true });
                setSuccess("Login successful!");
            })
            .catch(error => {
                setError("Something Wrong!");
            })
    }
    
    return (
        <div>
            <div className="divider">OR</div>
            <div className="flex justify-center mt-10 mb-10">
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">G</button>
            </div>
        </div>
    );
};

export default SocialLogin;