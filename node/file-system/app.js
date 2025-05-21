import fs from 'fs';

const nomeArquivo = "exemplo.txt";
const conteudo = "Escrevendo em um arquivo com Node.js"

// Criar um arquivo
function criarArquivo(){
    fs.writeFile(nomeArquivo, conteudo, (error) => {
        if (error){
            console.error(`Erro ao criar/recriado no arquivo: ${error}`);
            return;
        };
        console.log("Arquivo criado/recriar com sucesso!")
    });
};

// Ler um arquivo
function lerArquivo(){
    fs.readFile(nomeArquivo, "utf-8", (error, dados) => {
        if (error){
            console.error(`Erro ao ler o arquivo: ${error}`);
            return;
        };
        console.log(`Conteúdo do arquivo: ${dados}`);
    });
};

const novoConteudo = "\nMais textos"

// Adicionar conteúdo
function adicionarConteudo(){
    fs.appendFile(nomeArquivo, novoConteudo,(error) => {
        if (error) {
            console.error(`Erro ao adicionar conteúdo no arquivo: ${error}`);
            return;
        };
        console.log("Conteúdo adicionado com sucesso!")
    });
};

// Excluir um arquivo
function excluirArquivo(){
    fs.unlink(nomeArquivo, (error) => {
        if (error) {
            console.error(`Erro ao excluir arquivo: ${error}`)
        };
        console.log("Arquivo excluído com sucesso!")
    });
};

const novoDiretorio = "novo_diretorio";

// Criar um diretório (pasta)
function criarDiretorio() {
    fs.mkdir(novoDiretorio, (error) => {
        if (error) {
            console.error("Erro ao criar o diretório:", error);
            return;
        }
    });
    console.log("Diretório criado com sucesso!");
}

// Excluir um diretório (pasta)
function excluirDiretorio() {
    fs.rm(novoDiretorio, { recursive: true }, (error) => {
        if (error) {
            console.error("Erro ao excluir o diretório:", novoDiretorio);
            return
        }
        console.log("Diretório excluído com sucesso");
    });
}

criarDiretorio();