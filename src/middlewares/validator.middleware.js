
export const validate = (schema) => async (req, res, next) => {
    try {
        await schema.parseAsync(req.body);
        next();
    } catch (error) {
        const errorMessages = error.errors.map(error => error.message);
        return res.status(400).json({ error: errorMessages.join('; ') });
    }
};
