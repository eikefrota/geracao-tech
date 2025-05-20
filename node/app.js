// Importa o Módulo HTTP
// const http = require('http');

// Importa o Módulo HTTP (ES Module - recomendado)
import http from 'http'

// Dados do servidor
const hostname = '127.0.0.1';
const port = 3000;

// Criar o servidor
const server = http.createServer((request, response) => {
    response.statusCode = 200; // OK
    response.setHeader("Content-Type", "text/html");
    response.end("<h1>Hello, World!</h1>")
});

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://localhost:3000`)
});

