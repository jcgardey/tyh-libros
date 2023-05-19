const LibroDigital = require('./LibroDigital');
const LibroImpreso = require('./LibroImpreso');

test('precio de un libro impreso', () => {
  const gamma = new LibroImpreso('OO Patterns', 'Gamma et al', 3000);
  expect(gamma.precio()).toBe(3430);
});

test('precio de un libro digital', () => {
  const mackenzie = new LibroDigital(
    'Empirical Research in HCI',
    'MacKenzie',
    5300
  );
  expect(mackenzie.precio()).toBe(5406);
});

