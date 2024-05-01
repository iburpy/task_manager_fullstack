// AuthContext.jsx
import { createContext, useState, useContext } from "react";
import { registerRequest } from '../api/auth';

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);

    const signup = async (userData) => {
        try{
            const res = await registerRequest(userData);
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);
        }catch (error){
            console.log(error);
            //console.log(error.response);
            setErrors(error.response.data);
        }
    };

    return (
        <AuthContext.Provider value={{ signup, user, isAuthenticated, errors }}>
            {children}
        </AuthContext.Provider>
    );
};

import PropTypes from 'prop-types';

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};