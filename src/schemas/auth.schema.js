import { z } from 'zod';



export const registerSchema = z.object({
    username: z.string({
        required_error: '¡Necesitas un nombre de usuario para registrarte!'
    }),
    email: z.string({
        required_error: '¡Necesitas un correo electrónico para registrarte e iniciar sesión luego!',
    }).email({
        message: 'Debes proporcionar un correo electrónico válido.'
    }), 
    password: z.string({
        required_error: '¡Necesitas una contraseña para registrarte e iniciar sesión luego!', 
    }).min(6, { message: 'La contraseña debe contener al menos 6 carácteres.' }) 
});

export const loginSchema = z.object({
    email: z.string({
        required_error: 'No puedes omitir el campo de correo electrónico.',
    }).email({
        message: 'Debes proporcionar un correo electrónico válido.'
    }),
    password: z.string({
        required_error: 'No puedes omitir el campo de contraseña.', 
    }).min(6, { message: 'La contraseña debe contener al menos 6 carácteres.' }), 
});