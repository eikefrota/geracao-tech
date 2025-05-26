import express, { response } from "express"
import fs from "fs"
import path from "path"
import bcrypt from "bcrypt"
import uid from "uuid"

const routes = express.Router();
const usersFile = path.join(__dirname, "../data/user.json");

// Garante que o arquivo existe
if (!fs.existsSync(usersFile)) {
    fs.writeFileSync(usersFile, "[]")
};

router.post("/", async (request, response) => {
    // Desestruturaçõa dos dados enviados na requisição
    const { nome, email, senha } = request.body;

    // Verifica os campos em branco
    if (!nome || !email || !senha) {
        return response.status(400).json({
            erro: "Nome, Email e Senha são obrigatórios"
        });
    };
});