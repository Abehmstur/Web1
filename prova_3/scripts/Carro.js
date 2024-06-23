import Veiculo from './scripts/Veiculo.js';

class Carro extends Veiculo{
    constructor(marca, modelo, anoFabricacao, cor, tipo, quilometragem, qtdPortas, preco, airbag) {
        super(marca, modelo, anoFabricacao, cor, tipo, quilometragem, qtdPortas, preco);
        this.airbag = airbag;
    }

}

export default Carro;
