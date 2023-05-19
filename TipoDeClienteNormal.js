class TipoClienteNormal {
  esVIP() {
    return false;
  }

  bonificarCompra(cliente, monto) {}

  bonificarRecarga(monto) {
    return 0;
  }
}
module.exports = TipoClienteNormal;

