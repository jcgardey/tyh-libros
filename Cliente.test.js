const Cliente = require('./Cliente');
const LibroDigital = require('./LibroDigital');
const LibroImpreso = require('./LibroImpreso');

let clienteNormal;
let libroDigital;
let libroImpreso;
beforeEach(() => {
  clienteNormal = new Cliente();
  clienteNormal.recargarCredito(320);
  libroDigital = new LibroDigital('Study in Scarlet', 'Sherlock Holmes', 100);
  libroImpreso = new LibroImpreso('El principito', 'Antoine', 200);
});

test('recarga de crédito sin bonificar', () => {
  clienteNormal.recargarCredito(80);
  expect(clienteNormal.credito()).toBe(400);
});

test('descuento de crédito al comprar', () => {
  clienteNormal.comprar(libroDigital);
  expect(clienteNormal.credito()).toBe(218);
});

test('cliente pasa a ser VIP', () => {
  expect(clienteNormal.esVIP()).toBeFalsy();
  clienteNormal.comprar(libroImpreso);
  expect(clienteNormal.esVIP()).toBeTruthy();
});

