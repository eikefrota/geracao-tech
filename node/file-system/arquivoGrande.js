import fs from 'fs'

const filePath = "large_file.txt";
const lines = 1000000;

function criarArquivo(){
    const writeStream = fs.createWriteStream(filePath);
    for (let i = 1; i <= lines; i++){
        writeStream.write(`Linhas ${i}\n`);
    };

    writeStream.end(() => {
        console.log(`${lines} linhas escritas em ${filePath}`);
    });
};

// Ler arquivo grande de forma sincrona (sync)
function lerArquivoSincrono(){
    console.log("\n1. Iniciando leitura do arquivo sincrono...");

    try {
        const dados = fs.readFileSync(filePath, "utf-8");
        console.log(`\n2. Conteúdo do arquivo (sincrono): \n${dados.slice(0, 1000)}`);
    } catch (error) {
        console.error(`\nErro ao ler o arquivo: ${error}`)
    }

    console.log("\n3. Continua executando após a leitura sincrona...\n")
    
};

// criarArquivo();
// lerArquivoSincrono();