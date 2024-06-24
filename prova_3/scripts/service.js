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

function paginaDeMenu(){
    window.location.href = 'paginaDeMenu.html';
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

    if (marca === ""  && modelo === "" && cor === "" && tipo === "") {
        alert("É obrigatório informar pelo menos: Marca, modelo, cor ou tipo.");
        return;
    } else {
        var veiculoJSON = JSON.stringify(veiculo);
        salvarNoLocalStorage(veiculoJSON);
    }
}

function salvarNoLocalStorage(veiculo) {
    let veiculos = localStorage.getItem('veiculos');
        
    if (veiculos) {
        veiculos = JSON.parse(veiculos);
    } else {
        veiculos = [];
    }

    veiculos.push(veiculo);

    localStorage.setItem('veiculos', JSON.stringify(veiculos));

    alert('Veículo cadastrado com sucesso!');
}

/* Usando Jquery */
function listarVeiculo(){
    let veiculos = localStorage.getItem('veiculos');
    const veiculosList = $('#listaVeiculos');
    veiculosList.css('display', 'block');

    if(veiculos) {
        veiculos = JSON.parse(veiculos);
    } else {
        veiculos = [];
    }

    if (veiculos.length === 0) {
        veiculosList.html('<p class="msg-error">Nenhum veículo cadastrado.</p>');
        return;
    }

    var v = [];
    veiculos.forEach(jsonStr => {
        let veiculo_temp = JSON.parse(jsonStr);
        v.push(veiculo_temp);
    });

    let html = '<h3>Veículos Cadastrados: </h3><ul>';
    
    v.forEach(veiculo => {
        html += `<li>Marca: ${veiculo.marca}, Modelo: ${veiculo.modelo}, Ano: ${veiculo.anoFabricacao}, Preço: ${veiculo.preco}</li>`;
    });

    html += '</ul>';

    veiculosList.html(html);
    
    console.log(v);
}

/* function buscarVeiculo(){
    const veiculosList = $('#listaVeiculos');
    veiculosList.css('display', 'none');

    let html = '<label>Ano: </label>';

} */

function excluirVeiculo(){
    /* const marca = prompt("Digite a marca do veículo que deseja excluir:"); */
    const modelo = prompt("Digite o modelo do veículo que deseja excluir:");

    let veiculos = localStorage.getItem('veiculos');

    if (veiculos) {
        veiculos = JSON.parse(veiculos);
    } else {
        veiculos = [];
        alert('Nenhum veículo cadastrado para excluir.');
        return;
    }

    let v = [];
    veiculos.forEach(jsonStr => {
        let veiculo_temp = JSON.parse(jsonStr);
        v.push(veiculo_temp);
    });

    const index = v.findIndex(veiculo => veiculo.modelo === modelo);

    if (index === -1) {
        alert(`Veículo do modelo "${modelo}" não encontrado.`);
        return;
    }

    v.splice(index, 1);

    var veiculoJSON = JSON.stringify(v);
    console.log(veiculoJSON);
    salvarNoLocalStorage(veiculoJSON);

    alert(`Veículo do modelo "${modelo}" foi excluído com sucesso.`);

    listarVeiculo();
}


