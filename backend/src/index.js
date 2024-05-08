import app from './app.js';
import { conn_db } from './db.js';

async function startServer() {
  try {
    await conn_db();
    app.listen(4000);
    console.log('Listening on port', 4000);
  } catch (error) {
    console.error('Error starting server:', error);
  }
}

startServer();
