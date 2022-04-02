const fs = require('fs')
class Contenedor {
    constructor(nombre) {
        this.nombre = nombre
    }

    async save(obj) {
        let productos
        let id = 1

        try {
            productos = await this.getAll()
            productos.length == 0 ? id = 1 : id = (productos[productos.length - 1].id) + 1
            obj = { ...obj, id: id }
            productos.push(obj)
        } catch (error) {
            console.log(`Error de Resultado: ${error} `)
        }

        try {
            await fs.promises.writeFile(`./${this.nombre}.txt`, JSON.stringify(productos, null, 2))
            return (id)
        } catch (error) {
            console.log(`Error de Lectura: ${error} `)
        }
    }

    async getById(id) {
        const productos = await this.getAll()
        const encontrado = productos.find(producto => producto.id == id)
        return encontrado
    }

    async getAll() {
        try {
            const productos = await fs.promises.readFile(`./${this.nombre}.txt`, 'utf-8')
            return (JSON.parse(productos))
        } catch (error) {
            console.log(`Error al recuperar datos: ${error}`);
            return [];
        }
    }

    async deleteById(id) {
        const objs = await this.getAll()
        const index = objs.findIndex(o => parseInt(o.id) == parseInt(id))
        console.log("aca estas", o.id)
        if (index == -1) {
            console.log(`Error al borrar: no se encontró el id ${id}`)
        }

        objs.splice(index, 1)
        try {
            await fs.promises.writeFile(this.ruta, JSON.stringify(objs, null, 2))
        } catch (error) {
            console.log(`Error al borrar: ${error}`)
        }
    }

    async deleteAll() {
        await fs.promises.writeFile(`./${this.nombre}.txt`, JSON.stringify([], null, 2))
    }

}
module.exports = Contenedor



