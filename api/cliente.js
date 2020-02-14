listarClientes = () => {
    /* O comando fetch retorna uma promisse, que possibilita a execução
    assíncrona do javascript
    Pegamos a resposta da promisse com then */
    return fetch('http://localhost:4000/clientes')
        .then(resposta => {
            // Transformamos o PromisseValue para json para poder trabalhar melhor
            return resposta.json()
        })
        .then(json => { // Essa é a resposta da promisse anterior em json
            return json
        })
}