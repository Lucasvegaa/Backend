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

app.get('/productRandom', (req, res) => {
    let productos = archivo.getAll();
    let random =Math.floor(Math.random() * (productos.length - 0) + 0) + 1
    console.log(random)
    archivo.getById(random).then(x => res.send(`${JSON.stringify(x)}`))
});

// async function getRandom() {
//     try {

//         let productos = await archivo.getAll();
//         return Math.floor(Math.random() * (productos.length - 0) + 0) + 1
//     } catch (error) {
//         console.log(error)
//     }
// }

//console.log(getRandom().then(x=>x))
//archivo.getById("2").then(x=> console.log(x))



