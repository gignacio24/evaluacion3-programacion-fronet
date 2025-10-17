import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      productos: [
        { id: 1, nombre: 'Audífono', precio: 30000, stock: 3, imagen: '/src/assets/images/audifono.png' },
        { id: 2, nombre: 'Mouse', precio: 20000, stock: 5, imagen: '/src/assets/images/mouse.png' },
        { id: 3, nombre: 'Teclado', precio: 15000, stock: 10, imagen: '/src/assets/images/teclado.png' },
        { id: 4, nombre: 'Gabinete', precio: 35000, stock: 4, imagen: '/src/assets/images/gabinete.png' },
        { id: 5, nombre: 'Pantalla', precio: 175000, stock: 3, imagen: '/src/assets/images/pantalla.png' },
        { id: 6, nombre: 'Silla', precio: 150000, stock: 2, imagen: '/src/assets/images/silla.png' }
      ],
      carrito: []
    }
  },
  mutations: {
    agregarAlCarrito(state, producto) {
      const item = state.carrito.find(p => p.id === producto.id)
      if (item) {
        if (item.cantidad < producto.stock) {
          item.cantidad++
        } else {
          alert(`No hay más unidades disponibles en stock de ${producto.nombre}`)
        }
      } else {
        state.carrito.push({ ...producto, cantidad: 1 })
      }
    },
    removerDelCarrito(state, productoId) {
      state.carrito = state.carrito.filter(p => p.id !== productoId)
    }
  },
  getters: {
    totalPagar(state) {
      return state.carrito.reduce((total, p) => total + (p.precio * p.cantidad), 0)
    }
  }
})
