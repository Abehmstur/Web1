import Usuario from './Usuario.js';
import Carro from './scripts/Carro.js';
import Moto from './scripts/Moto.js';

const admin = new Usuario("admin","admin");

const carro = new Carro('Toyota', 'Corolla', 2020, 'Preto', 'Sedan', 15000, 4, 80000, true);
carro.exibirDetalhes();

const moto = new Moto('Yamaha', 'MT-07', 2021, 'Azul', 'Esportiva', 5000, 0, 35000, 200);
moto.exibirDetalhes();

