class Compra {
  constructor(libros, cliente) {
    this._libros = libros;
    this._cliente = cliente;
    this._fecha = new Date();
  }
  libros() {
    return this._libros;
  }
  cliente() {
    return this._cliente;
  }
  monto() {
    return this._libros.reduce((total, libro) => total + libro.precio(), 0);
  }
  delMesActual() {
    let hoy = new Date();
    return (
      hoy.getMonth() == this._fecha.getMonth() &&
      hoy.getYear() == this._fecha.getYear()
    );
  }
}
module.exports = Compra;

