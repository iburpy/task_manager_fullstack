import mongoose from 'mongoose'


export const conn_db = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/crud-auth')
        console.log('Database connected')
    } catch (error) {
        console.log('Database not connected', error)
    }
    
}