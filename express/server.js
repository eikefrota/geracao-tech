import express from "express";

const server = express();
const host = "localhost";
const port = 3000;

// Exemplo de Middleware
server.use((request, response, next) => {
    console.log(`${request.method}, ${request.url}`);
    next(); // Chama a próxima função middleware da 
});


// Rota para a Home
server.get("/", (request, response) => {
    response.send("Hello, World!");
});

// Rota para o About
server.get("/about", (request, response) => {
    response.send("Sobre");
});

// Rota para Submit
server.post("/submit", (request, response) => {
    const dados = request.body;

    // Converte os dados enviado no body (Corpo da Requisição)
    response.json({
        message: "Dados recebidos!",
        dados: dados
    });
});

// // Rota para PUT
// server.put("/update", (request, response) => {
//     response.send("Dados atualizados!");
// });

// // Rota para DELETE
// server.delete("/delete", (request, response) => {
//     response.send("Dados deletados!");
// });

server.listen(port, () => {
    console.log(`Servidor rodando em http://${host}:${port}`);
});
