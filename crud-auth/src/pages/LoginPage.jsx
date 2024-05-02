import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { FaClipboardCheck, FaPen, FaRegCalendarCheck, FaSave } from 'react-icons/fa';

const omitionMsg = {
  'user': 'No puedes omitir el nombre de usuario.',
  'email': 'No puedes omitir el correo electrónico',
  'password': 'No puedes omitir la contraseña.'
}

function LoginPage() {
  const { 
    register,
    handleSubmit, 
    formState:{
      errors
    }
  } = useForm();

  const { 
    signin, 
    errors: signinErrors,
    isAuthenticated
  } = useAuth();

  const navigate = useNavigate();
  
  const onSubmit = handleSubmit(data => {
    signin(data);
  });

  useEffect(() => {
    if(isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  return (
    <div className='h-[calc(100vh-100px)] flex items-center justify-center'>
      <div className="bg-gray-100 shadow-md max-w-md w-full p-10 rounded-md">
        {
          signinErrors.map((error, i) => (
            <div key={i} className='text-red-500 p-2'>
              {error}
            </div>
          ))
        }
        <form onSubmit={onSubmit} className='space-y-5'>
          <h1 className="text-3xl font-bold text-gray-800 my-2">Inicio de sesión</h1>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-md mt-1 focus:outline-none focus:ring focus:border-blue-300"
            placeholder='Correo electrónico'
            autoFocus={true}
          />  
          { errors.email && <p className='text-red-500'>{omitionMsg.email}</p> }

          <input 
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-md mt-1 focus:outline-none focus:ring focus:border-blue-300"
            placeholder='Contraseña (mín. 6 carácteres)'
          />  
          { errors.password && <p className='text-red-500'>{omitionMsg.password}</p> }

          <button 
            type="submit"
            className='w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>
            Ingresar
          </button>
        </form>
        <p className='flex gap-y-4 justify-between text-gray-800 my-2 mt-5'>
          ¿No tienes una cuenta?
          <Link to="/register" className='text-blue-500 hover:text-blue-800'>Crea una aquí</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;