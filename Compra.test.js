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

test('monto de compra con multiples libros', () => {
  const compra = clienteNormal.comprar([libroDigital, libroImpreso]);
  expect(compra.monto()).toBe(704);
});

test('libros de una compra', () => {
  const compra = clienteNormal.comprar([libroDigital, libroImpreso]);
  expect(compra.libros()).toContain(libroDigital);
});

