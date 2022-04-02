
//Funcao de listar

function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(usuario){
    linha = document.createElement("tr")
    tdId = document.createElement("td");
    tdNome = document.createElement("td");
    tdUsername = document.createElement("td");
    tdEmail = document.createElement("td");
    tdSenha = document.createElement("td");
    tdTelefone = document.createElement("td");
    
    tdId.innerHTML = usuario.id 
    tdNome.innerHTML = usuario.nome 
    tdUsername.innerHTML = usuario.username
    tdEmail.innerHTML = usuario.email
    tdSenha.innerHTML = usuario.senha
    tdTelefone.innerHTML = usuario.telefone
    
    linha.appendChild(tdId)
    linha.appendChild(tdNome)
    linha.appendChild(tdUsername)
    linha.appendChild(tdEmail)
    linha.appendChild(tdSenha)
    linha.appendChild(tdTelefone)

    return linha
}

function main(){
    data = fazGet("http://localhost:8080/usuarios/listar")
    usuarios = JSON.parse(data)
    let tabela = document.getElementById("tabela")

    usuarios.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
}

main()