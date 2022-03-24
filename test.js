const Contenedor = require ('./contenedor.js')

const archivo = new Contenedor('productos')

archivo.save({
    title: 'Carpetas',
    price: 100.2,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png'
}
)

archivo.getById('1');

archivo.getAll();

archivo.deleteById('1')

archivo.deleteAll();