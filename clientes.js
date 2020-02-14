const informacoesClientes = [
    {
        cpf: "95362080911",
        nome: "Enzo Heitor da Mata"
    },
    {
        cpf: "02442161346",
        nome: "Carlos Eduardo Noah Oliver Rocha"
    },
    {
        cpf: 74250774937,
        nome: "Regina Benedita Santos"
    }
]

const corpoTabela = document.querySelector("[data-conteudo-tabela]")

const exibeCliente = (cpf, nome) => {
    const linha = document.createElement('tr')
    const conteudoLinha = `
    <td>${cpf}</td>
    <td>${nome}</td>
`
    linha.innerHTML = conteudoLinha
    return linha
}

informacoesClientes.forEach(indice => {
    corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome))
})