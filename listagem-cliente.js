// Pegando tbody anotado com data-conteudo-tabela
const corpoTabela = document.querySelector("[data-conteudo-tabela]")


// Criar função para exibir cliente
const exibeCliente = (cpf, nome) => {

    // Criando elemento tr
    const linha = document.createElement('tr')

    // ` : template literals (possibilita criar um layout)
    const conteudoLinha = `
    <td>${cpf}</td>
    <td>${nome}</td>
`
    // Preenchendo tbody
    linha.innerHTML = conteudoLinha

    return linha

}

listarClientes().then( exibe => {
    exibe.forEach(indice => {
        corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome))
})

})