# Fetch API: Consumindo uma API Rest com JavaScript

Minhas anotações do curso de API Rest com JavaScript da Alura

## Aula 02

### Instalar node (usar versão 10.X do Node.js devido ao server-petshop)
    sudo apt install nodejs

### Instalar npm
    sudo apt install npm

### Atualizar npm
    sudo npm install npm@latest -g

### Configuranção proxy, caso necessário
    npm config set proxy http://proxy.company.com:8080
    npm config set https-proxy http://proxy.company.com:8080 

### Instalar Postman
    https://www.getpostman.com/

### Servidor server-petshop
https://github.com/felipedotcom/server-petshop  
  
Entrar na pasta do servidor e executar  
  
    npm install

Para rodar o servidor executar  
  
    npm start

Deverá apresentar uma saída como a abaixo:    

    [nodemon] 1.19.0
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching: *.*
    [nodemon] starting `node server.js`
    consign v0.1.6 Initialized in /home/sneto/Ambiente/workspace/vscode/alura-api-rest-javascript/server-petshop
    + ./controllers/atendimento.js
    + ./controllers/cliente.js
    + ./controllers/pet.js
    + ./controllers/servico.js
    Servidor rodando na porta 4000

### Usar Postman para consumir as APIs

Por exemplo, para listar todos os clientes, fazer GET para: 

http://localhost:4000/clientes  