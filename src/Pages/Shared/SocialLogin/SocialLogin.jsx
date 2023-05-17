import React, {useContext} from 'react';
import {AuthContext} from "../../../providers/AuthProvider.jsx";

const SocialLogin = ({ setSuccess, setError }) => {
    const {googleSignIn} = useContext(AuthContext);
    
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                setError("");
                const loggedUser = result.user;
                setSuccess("Login successful!");
            })
            .catch(error => {
                // setError(error.message);
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