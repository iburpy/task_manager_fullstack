import { z } from 'zod';

export const createTaskSchema = z.object({
    title: z.string({
        required_error: 'El Titulo de la tarea es requerido',
    }),
    description: z.string({
        required_error: 'La descripción de la tarea es requerida',
    }),
    date: z.string().datetime().optional(),
});
