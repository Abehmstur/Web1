import Veiculo from './scripts/Veiculo.js';

class Moto extends Veiculo{
    constructor(marca, modelo, anoFabricacao, cor, tipo, quilometragem, qtdPortas, preco, cilindradas) {
        super(marca, modelo, anoFabricacao, cor, tipo, quilometragem, qtdPortas, preco);
        this.cilindradas = cilindradas;
    }

}

export default Moto;
