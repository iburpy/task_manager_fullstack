import { useForm } from 'react-hook-form'; // Cambié userForm a useForm
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
    const { register, handleSubmit, formState:{errors} } = useForm(); // Cambié Register a register
    const {signup,isAuthenticated,errors:RegisterErrors} = useAuth();
    const navigate = useNavigate();
    useEffect(()=>{
        if(isAuthenticated) navigate("/tasks");
    }, [isAuthenticated, navigate]);

    const onSubmit = handleSubmit(async(values) => {
       signup(values);
    });

    return (
        <div className='bg-zinc-800 max-w-md p10 rounded-md'>
            {
                RegisterErrors.map((error, i) => (
                    <div key={i} className='text-red-500 p-2'>
                        {error}
                    </div>
                ))
            }
            <form onSubmit={onSubmit}>
                <input type="text" {...register("username", { required: true })} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md" placeholder='Username' />
                {
                    errors.username && <p className='text-red-500'>El Nombre es requerido</p>
                }
                <input type="email" {...register("email", { required: true })} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md" placeholder='Email' />
                {
                    errors.email && <p className='text-red-500'>El email es requirido</p>
                }
                <input type="password" {...register("password", { required: true })} className="w-full bg-zinc-700 px-4 text-white py-2 rounded-md" placeholder='Password' />
                {
                    errors.password && <p className='text-red-500'>La contraseña es requerida</p>
                }
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegisterPage;
