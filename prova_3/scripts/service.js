function verificarLogin(login, senha) {
    return login === 'admin' && senha === 'admin';
}

function realizarLogin(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (verificarLogin(login, senha)){
        window.location.href = 'paginaDeMenu.html';
    } else {
        alert("Login ou senha inválidos!");
    }
}

function paginaDeCadastro(){
    window.location.href = 'paginaDeCadastro.html';
}

function paginaDeListagem(){
    window.location.href = 'paginaDeListagem.html';
}

function paginaDeExcluir(){
    window.location.href = 'paginaDeExcluir.html';
}

function toggleAtributo() {
    var qtdPortas = document.getElementById('qtdPortas');
    var airbag = document.getElementById('airbag');
    var cilindradas = document.getElementById('cilindradas')

    var airbagDiv = document.getElementById('airbagDiv');
    var cilindradasDiv = document.getElementById('cilindradasDiv');

    if (qtdPortas.value === '0') {
        cilindradasDiv.style.display = 'block';
        airbagDiv.style.display = 'none';
        airbag.checked = !airbag.checked;
    } else if (qtdPortas.value === '2' || qtdPortas.value === '4') {
        airbagDiv.style.display = 'block';
        cilindradasDiv.style.display = 'none';
        cilindradas.value = '';
    } else {
        cilindradasDiv.style.display = 'none';
        cilindradas.value = '';
        airbagDiv.style.display = 'none';
        airbag.checked = !airbag.checked;
    }
}

function cadastrarVeiculo(){
    var marca = document.getElementById('marca').value;
    var modelo = document.getElementById('modelo').value;
    var anoFabricacao = document.getElementById('anoFabricacao').value;
    var cor = document.getElementById('cor').value;
    var tipo = document.getElementById('tipo').value;
    var quilometragem = document.getElementById('quilometragem').value;
    var qtdPortas = document.getElementById('qtdPortas').value;
    var preco = document.getElementById('preco').value;
    var airbag = document.getElementById('airbag').checked;
    var cilindradas = document.getElementById('cilindradas').value;

    if (qtdPortas > 0){
        var veiculo = {
            marca: marca,
            modelo: modelo,
            anoFabricacao: anoFabricacao,
            cor: cor,
            tipo: tipo,
            quilometragem: quilometragem,
            qtdPortas: qtdPortas,
            preco: preco,
            airbag: airbag
        };
    } else {
        var veiculo = {
            marca: marca,
            modelo: modelo,
            anoFabricacao: anoFabricacao,
            cor: cor,
            tipo: tipo,
            quilometragem: quilometragem,
            qtdPortas: qtdPortas,
            preco: preco,
            cilindradas: cilindradas
        };
    }

    var veiculoJSON = JSON.stringify(veiculo);
    localStorage.setItem('veiculo', veiculoJSON);
    alert('Veículo cadastrado com sucesso!');
}

