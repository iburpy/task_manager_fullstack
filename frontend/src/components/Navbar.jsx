import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaPlus, FaTasks, FaSignOutAlt, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

function Navbar() {
    const { isAuthenticated, logout, user } = useAuth();
    console.log(user);

    return(
        <nav className="bg-gray-500 sm:flex sm:justify-between sm:items-center sm:px-6 lg:px-8 py-3 px-4 sm:py-5 rounded-lg w-full h-full">
            <Link to={isAuthenticated ? "/tasks" : "/"}>
                <div className="flex justify-between items-center">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Admin. Tareas</h1>
                </div>
            </Link>
            <ul className="flex gap-x-3">
                {isAuthenticated ? (
                    <>
                        <li>
                            <Link to="/tasks/new" className="bg-blue-500 hover:bg-blue-800 px-4 py-1 rounded-md my-2 text-white flex items-center">
                                <FaPlus className="mr-1" /> Agregar tareas
                            </Link>
                        </li>
                        <li>
                            <Link to="/tasks" className="bg-blue-500 hover:bg-blue-800 px-4 py-1 rounded-md my-2 text-white flex items-center">
                                <FaTasks className="mr-1" /> Tareas
                            </Link>
                        </li>
                        <li>
                            <Link to="/" onClick={() => logout()} className="bg-red-500 hover:bg-red-800 px-4 py-1 rounded-md my-2 text-white flex items-center">
                                <FaSignOutAlt className="mr-1" /> Cerrar sesión
                            </Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/login" className="bg-blue-500 hover:bg-blue-800 px-4 py-1 rounded-md my-2 text-white flex items-center">
                                <FaSignInAlt className="mr-1" /> Iniciar sesión
                            </Link>
                        </li>
                        <li>
                            <Link to="/register" className="bg-blue-500 hover:bg-blue-800 px-4 py-1 rounded-md my-2 text-white flex items-center">
                                <FaUserPlus className="mr-1" /> Registrarse
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;
