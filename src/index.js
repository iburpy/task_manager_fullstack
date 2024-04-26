import app from './app.js'
import {conn_db} from './db.js'

conn_db()
app.listen(4000)
console.log('Listening on port', 4000)