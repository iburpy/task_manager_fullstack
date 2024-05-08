import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest } from '../api/auth';
import Cookies from 'js-cookie';
import { verifyTokenRequest } from "../api/auth";


export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    const signup = async (user) => {
        try{
            const res = await registerRequest(user);
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);
        }catch (error){
            setErrors(error.response.data);
        }
    };

    const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
      // setErrors(error.response.data.message);
    }
  };
  
  const logout = () => {
    Cookies.remove('token');
    setIsAuthenticated(false);
    setUser(null);
  }
// Elimina los errores [setErrors([]);], si hay [if(errors.length > 0)],
// después despues de 3 segundos [clearTimeout()]
    useEffect(() => {
        if(errors.length > 0) {
            const timer = setTimeout(()=> {
                setErrors([]);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [errors]);

useEffect(() => {
    const checkLogin = async () => {
      const cookies = Cookies.get();
      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);

        return setUser(null);
      }

      try {
        const res = await verifyTokenRequest(cookies.token);
        console.log(res);

        if (!res.data) return setIsAuthenticated(false);

        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);

      } catch (error) {
        setIsAuthenticated(false);
        setLoading(false);
        setUser(null);
      }
    };
    checkLogin();
  }, []);

    return (
        <AuthContext.Provider 
            value={{ 
                signup, 
                signin,
                logout,
                loading,
                user, 
                isAuthenticated, 
                errors 
            }}>
            {children}

        </AuthContext.Provider>
    );
};

import PropTypes from 'prop-types';

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};