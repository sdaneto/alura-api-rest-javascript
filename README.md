# Fetch API: Consumindo uma API Rest com JavaScript

Minhas anotações do curso de API Rest com JavaScript da Alura

## Aula 01

No arquivo *clientes.html* Identificar o tbody da tabela com *data-atributtes*, em vez de classes CSS. Vamos usar `data-conteudo-tabela`

    <tbody data-conteudo-tabela>

Vamos criar um array de dados de clientes no arquivo *clientes.js*:

    const informacoesClientes = [
        {
            cpf: "23443234567",
            nome: "Enzo Heitor da Mata"
        },
        {
            cpf: "09856787656",
            nome: "Carlos Eduardo Noah Oliver Rocha"
        },
        {
            cpf: 78906654321,
            nome: "Regina Benedita Santos"
        }
    ]
  
Após, vamos atribuir o tbody da tabela a uma variável:

    // Pegando tbody anotado com data-conteudo-tabela
    const corpoTabela = document.querySelector("[data-conteudo-tabela]")


Então, criamos uma função para exibir os dados do cliente na tabela. Vamos usar template literals (`) para criar o layout da linha. 
      
    const exibeCliente = (cpf, nome) => {
        const linha = document.createElement('tr')
        const conteudoLinha = `
        <td>${cpf}</td>
        <td>${nome}</td>
    `
        linha.innerHTML = conteudoLinha    
        return linha    
    }  
  
Note que na função acima criamos um elemento *tr* que será a linha e anexamos a ele a variável *conteudoLinha*.  

Por fim, vamos criar uma função de loop para exibir os dados:  

    informacoesClientes.forEach(indice => {
        corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome))
    })      