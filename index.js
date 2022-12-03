const express = require('express');
require('dotenv').config();

const app = express();

//Middleware

//Directorio Público
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.json({
        ok: true,
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor ON: http://localhost:${process.env.PORT}/`);
});