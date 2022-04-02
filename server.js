const express = require('express');
const Contenedor = require('./contenedor.js')
const archivo = new Contenedor('productos')
const app = express();

app.get('/', (req, res) => {
    res.send('<h1 style="color: blue">Bienvenidos al servidor express</h1>');
});

const server = app.listen(8080, () => {
    console.log('servidor http en el puerto 8080');
});

app.get('/productos', (req, res) => {
    archivo.getAll().then(x => res.send(`${JSON.stringify(x)}`))
});

app.get('/productoRandom', (req,res) => {
    archivo.getAll().then(x => {  
        const i = parseInt(Math.random() * x.length)
        res.send(x[i])
        })
})


