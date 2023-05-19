const Libro = require('./LibroImpreso.js');
const LibroImpreso = require('./LibroImpreso.js');
const LibroDigital = require('./LibroDigital.js');
const Cliente = require('./Cliente.js');
const ClienteVIP = require('./ClienteVIP.js');

hugo = new Cliente();
gamma = new LibroImpreso('OO Patterns', 'Gamma et al', 3000);
mackenzie = new LibroDigital('Empirical Research in HCI', 'MacKenzie', 5300);

hugo.comprar(gamma);
hugo.comprar(mackenzie);

console.log(hugo);
