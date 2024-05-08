import { z } from 'zod';

export const createTaskSchema = z.object({
    title: z.string({
        required_error: 'No puedes omitir el título de la tarea',
    }),
    description: z.string({
        required_error: 'No puedes omitir la descripción de la tarea',
    }),
    date: z.string().datetime().optional(),
});
