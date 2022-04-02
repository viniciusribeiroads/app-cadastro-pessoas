const formulario = document.querySelector("form");
const Inome = document.querySelector(".nome");
const Iuser = document.querySelector(".username");
const Iemail = document.querySelector(".email");
const Isenha = document.querySelector(".senha");
const Itel = document.querySelector(".tel");

function cadastrar() {
    fetch("http://localhost:8080/usuarios/cadastrar",
    {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          method: "POST",
        body: JSON.stringify({
            nome: Inome.value,
            username: Iuser.value,
            email: Iemail.value,
            senha: Isenha.value,
            telefone: Itel.value,
            
        })
    })
    .then(function (res) {console.log(res)})
    .catch(function (res) {console.log(res)})
};

function limpar(){
    Inome.value = "";
    Iuser.value = "";
    Iemail.value = "";
    Isenha.value = "";
    Itel.value = "";
}

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    console.log(formulario);
    cadastrar();
    alert("Cadastro efetuado com sucesso!");
    limpar();
    
})

