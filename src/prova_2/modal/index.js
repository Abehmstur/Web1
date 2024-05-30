  //aducuibar pessoas no arrya
  function addPessoasArray(pessoa, array_pessoas) {
    if(array_pessoas[pessoa.cpf]){
        return false;
    } else {
        array_pessoas.push(pessoa);
        console.log("Pessoas no objeto:", array_pessoas);
    }
}

// pega o Modal
var modal = document.getElementById("modalDeAlerta");

// pega o botao que abre o moodal
var btn = document.getElementById("cadastrar");

// pega o elemento spam para fechar o modal
var span = document.getElementsByClassName("fecharModal")[0];

// pega o botao btnListar
var btnList = document.getElementById("btnListar");

// vetor de pessoas BD temporario
var array_pessoas = [];
// acao que abre o modal
btn.addEventListener("click", async function (event) {
    event.preventDefault();
    //pegar valores preenchidos no form
    var _nome = document.getElementById('name').value;
    var _cpf = document.getElementById('cpf').value;
    var _data_nascimento = document.getElementById('data_nascimento').value;
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

//Evento que lista as pessoas ao clicar no botão
btnList.addEventListener("click", function () {
var divListagem = document.getElementById('listagem');
var divList = document.getElementById('listaPessoas');
    try {
        if(array_pessoas.length > 0 ){
            var html = ""; 

            array_pessoas.forEach(pessoa => {
                // Concatenar o HTML de cada pessoa
                html += `<p style="border: 1px solid white; padding: 0.5%; border-radius: 0.4rem"><strong>Nome:</strong> ${pessoa.nome} <br>
                          <strong>CPF:</strong> ${pessoa.cpf} <br>
                          <strong>Data de Nascimento:</strong> ${pessoa.data_nasc} <br>
                          <strong>Email:</strong> ${pessoa.email} <br></p>`;
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
});
 
// botao que fecha modal
span.onclick = function() {
    modal.style.display = "none";
}

// se clicar em qualquer lugar fora do modal, ele fecha o modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}