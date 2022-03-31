const Contenedor = require ('./contenedor.js')

const archivo = new Contenedor('productos')

archivo.getAll().then(x=>console.log(x))
archivo.save({
    "title": "Escuadra",
    "price": 123.45,
    "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
    "id": 1
  })
  
//archivo.deleteAll();
//archivo.getById("4").then(x=>console.log("el objeto es :",x))

//archivo.deleteById("2")

