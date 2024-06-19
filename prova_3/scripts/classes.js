/**
 * Classes do Projeto.
 */

class Veiculo{
    Veiculo(){
        this.nome = "",
        this.marca = "",
        this.modelo = "",
        this.quilometragem = 0;
        this.isNovo = true;
        this.preco = 0;
    }

    
}

class Carro extends Veiculo{
    Carro(){
        super(),
        this.qtdPortas = 0;
    }
}

// c = new Carro();
// c.isNovo = false;

// console.log("Carro é novo: " + c.isNovo);