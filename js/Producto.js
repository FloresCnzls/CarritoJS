// Define la clase Producto en el ámbito global
class Producto {
    constructor(nombre, precio, imagen, cantidad = 1) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.cantidad = cantidad;
    }
}


window.Producto = Producto;