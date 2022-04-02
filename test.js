const Contenedor = require ('./contenedor.js')

const archivo = new Contenedor('productos')

//archivo.getAll().then(x=>console.log(x))
archivo.save({
    "title": "Escuadra",
    "price": 123.45,
    "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
    "id": 1
  })
  
//archivo.deleteAll();
//archivo.getById("4").then(x=>console.log("el objeto es :",x))

//archivo.deleteById("2")



async function getRandom() {
  try {
    console.log("hola");
    let productos = await archivo.getAll();
  console.log(productos.length);
  return Math.floor(Math.random() * (productos.length - 0) + 0) +1
  } catch (error) {
    console.log(error)
  }
  
}

//getRandom().then (x=>console.log(x))

archivo.getById(4).then(x=>console.log(JSON.stringify(x)));