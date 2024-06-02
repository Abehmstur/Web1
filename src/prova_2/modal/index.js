
//pega o Modal
var modal = document.getElementById("modalDeAlerta");

//pega o botao que abre o moodal
var btn = document.getElementById("cadastrar");

//pega o elemento spam para fechar o modal
var span = document.getElementsByClassName("fecharModal")[0];

//pega o botao btnListar
var btnList = document.getElementById("btnListar");

//vetor de pessoas BD temporario
var array_pessoas = [];

/*
Funcao para Listar pessoas utilizando  um foreach e try catch para captura e tratamento de erros, o array pessoas é varrido
com um form e se a pessoa for encontrada ela é inserida no html via js.
@Author: Matheus Barros
@Gitub: Abehmstur
*/
var btnBuscaCpf = document.getElementById('btnBuscarCpf');
btnBuscaCpf.addEventListener("click", function () {
    var inputCpf = document.getElementById('ib_cpf').value;
    try {
        var pessoaEncontrada = null;
        for (var i = 0; i < array_pessoas.length; i++) {
            if (array_pessoas[i].cpf === inputCpf) {
                pessoaEncontrada = array_pessoas[i];
                break;
            }
        }
        if (pessoaEncontrada) {
            divListagem.innerHTML = `<div style="display: flex; justify-content: space-between; align-items: center; border: 1px solid white; padding: 0.5%; border-radius: 0.4rem"><p ><strong>Nome:</strong> ${pessoaEncontrada.nome} <br>
                          <strong>CPF:</strong> ${pessoaEncontrada.cpf} <br>
                          <strong>Data de Nascimento:</strong> ${pessoaEncontrada.data_nasc} <br>
                          <strong>Email:</strong> ${pessoaEncontrada.email} <br></p>
                          <input type="button" id="removerPessoa" onclick="removerPessoa()" style="cursor: pointer; border-radius: 0.8rem; background-image: url('./icons8-remover-16.png'); background-size: contain; background-position: center;  background-repeat: no-repeat; width: 50px; height: 30px; border: none;" alt="remover"></div>`;
            //exibi a pessoa encontrada
            divListagem.style.display = "block";
            divList.style.display = "block";
        } else {
            throw new Error("Pessoa não encontrada.");
        }
    } catch (error) {
        alert("Erro ao buscar: " + error);
    }
});

/*
Funcao para REMOVER pessoas utilizando  um foreach e try catch para captura e tratamento de erros, o array pessoas é varrido
com um form e se a pessoa for encontrada ela é removida do array via js.
@Author: Matheus Barros
@Gitub: Abehmstur
*/
function removerPessoa(){
    var btnRemoverPessoa = document.getElementById('removerPessoa');
    if(btnRemoverPessoa){
        var inputCpf = document.getElementById('ib_cpf').value;
        try {
            var pessoaEncontrada = null;
            let indice = 0;
            for (var i = 0; i < array_pessoas.length; i++) {
                if (array_pessoas[i].cpf === inputCpf) {
                    pessoaEncontrada = array_pessoas[i];
                    indice = i;
                    break;
                }
            }
            if (pessoaEncontrada) {
                //o splice usa o indice para remover o elemento do vetor.
                array_pessoas.splice(indice, 1);
                alert("Pessoa Removida com sucesso!");
                ListarTodasPessoas();
            } else {
                throw new Error("Pessoa não encontrada.");
            }
        } catch (error) {
            alert("Erro ao buscar: " + error);
        }
    }
}

/*
Funcao para Cadastrar pessoas utilizando  um for e try catch para captura e tratamento de erros, as pessoas 
passam por duas validacoes de cpf, uma para verificar se está vazio e outra para verificar se ja existe no array,
as pessoas são criadas a partir de um objeto pessoa e adicionadas no array pessoas via js.
@Author: Matheus Barros
@Gitub: Abehmstur
*/
btn.addEventListener("click", function (event) {
    event.preventDefault();
    //pegar valores preenchidos no form
    var _nome = document.getElementById('name').value;
    var _cpf = document.getElementById('cpf').value;
    var dataNascimento = document.getElementById('data_nascimento').value;
    //conversor de data
    var _data_nascimento = moment(dataNascimento, "YYYY-MM-DD").format("DD/MM/YYYY");
    var _email = document.getElementById('email').value;

    //Objeto Pessoa para armazenar os dados
    var pessoa = {
        nome: _nome,
        cpf: _cpf,
        data_nasc: _data_nascimento,
        email: _email  
    }

    try {
        if (pessoa.cpf != "") {
            //verifica se cpf ja existe apos verificar se fora informado vazio.
            var cpfJaExiste = false;
            for (var i = 0; i < array_pessoas.length; i++) {
                if (array_pessoas[i].cpf === pessoa.cpf) {
                    cpfJaExiste = true;
                    break;
                }
            }
            if (!cpfJaExiste) {
                array_pessoas.push(pessoa);
                //libera o modal e limpa o form
                modal.style.display = "block";
                document.getElementById('name').value = "";
                document.getElementById('cpf').value = "";
                document.getElementById('data_nascimento').value = "";
                document.getElementById('email').value = "";
            } else {
                throw new Error("A pessoa informada já foi cadastrada.");
            }
        } else {
            throw new Error("É obrigatório informar o CPF.");
        }
    } catch (error) {
        alert("Erro ao enviar dados: " + error);
    }
});


/*
Funcao para Listar pessoas utilizando  um foreach e try catch para captura e tratamento de erros, as pessoas são
concatenadas na var html e inseridas no html via js.
@Author: Matheus Barros
@Gitub: Abehmstur
*/
var divListagem = document.getElementById('listagem');
var divList = document.getElementById('listaPessoas');
function ListarTodasPessoas() {
    try {
        if(array_pessoas.length > 0 ){
            var html = ""; 

            array_pessoas.forEach(pessoa => {
                // Concatenar o HTML de cada pessoa
                html += `<p style="border: 1px solid white; padding: 0.5%; border-radius: 0.4rem"><strong>Nome:</strong> ${pessoa.nome} <br>
                          <strong>CPF:</strong> ${pessoa.cpf} <br>
                          <strong>Data de Nascimento:</strong> ${pessoa.data_nasc} <br>
                          <strong>Email:</strong> ${pessoa.email} <br></p>`
            });
            // exibir o conteúdo da divListagem após o loop
            divListagem.innerHTML = html;
            divList.style.display = "block";
        } else {
            throw new Error("Não existem pessoas cadastradas.");
        }
    } catch (error) {
        alert("Erro ao listar dados: " + error);
    }
}


/*
Eventos para fechar o modal da msg de sucesso, um fecha ao clicar no 'x' e o outro ao clicar em qualquer local foca do modal via js.
@Author: Matheus Barros
@Gitub: Abehmstur
*/
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}