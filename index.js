const express = require('express');
require('dotenv').config();

const app = express();

//Middleware

//Directorio Público
app.use(express.static('public'));

//Lectura y parseo del body
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));

app.listen(process.env.PORT, () => {
    console.log(`Servidor ON: http://localhost:${process.env.PORT}/`);
});