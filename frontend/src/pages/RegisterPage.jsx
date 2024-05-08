import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

function RegisterPage() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();
  const { 
    signup, 
    isAuthenticated, 
    errors: RegisterErrors 
  } = useAuth();
  const navigate = useNavigate();
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState('');

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated, navigate]);

  const omitionMsg = {
    'user': 'No puedes omitir el nombre de usuario.',
    'email': 'No puedes omitir el correo electrónico.',
    'password': 'No puedes omitir la contraseña.'
  }

  const onSubmit = handleSubmit(async (values) => {
    if (values.password !== passwordConfirmation) {
      setPasswordMatchError("Las contraseñas no coinciden.");
      return;
    } else {
      setPasswordMatchError("");
      signup(values);
    }
  });

  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      <div className="bg-gray-100 shadow-md max-w-md w-full p-10 rounded-md">
        {
          RegisterErrors.map((error, i) => (
            <div key={i} className='text-red-500 p-2'>
              {error}
            </div>
          ))
        }
        <form onSubmit={onSubmit} className='space-y-5'>
          <h1 className="text-3xl font-bold text-gray-800 my-2">Registro</h1>
          <input
            type="text"
            {...register("username", { required: true })}
            className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-md mt-1 focus:outline-none focus:ring focus:border-blue-300"
            placeholder='Ingresa tu nombre de usuario'
          />  
          {errors.username && <p className='text-red-500'>{omitionMsg.user}</p>}

          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-md mt-1 focus:outline-none focus:ring focus:border-blue-300"
            placeholder='Correo electrónico'
          />  
          {errors.email && <p className='text-red-500'>{omitionMsg.email}</p>}

          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-md mt-1 focus:outline-none focus:ring focus:border-blue-300"
            placeholder='Contraseña (mín. 6 caracteres).'
          />  
          {errors.password && <p className='text-red-500'>{omitionMsg.password}</p>}

          <input
            type="password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-md mt-1 focus:outline-none focus:ring focus:border-blue-300"
            placeholder='Confirmar contraseña'
          />  
          { passwordMatchError && <p className='text-red-500'>{passwordMatchError}</p> }

          <button 
            type="submit"
            className='w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>
            Crear cuenta
          </button>

          <p className='flex gap-y-4 justify-between text-gray-800 my-2'>
            ¿Ya tienes cuenta?
            <Link to="/login" className='text-blue-500 hover:text-blue-800'>Ingresa aquí</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;