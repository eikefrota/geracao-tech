import supabase from "../config/supabase";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Cadastro de Usuário
const registerUser = async (request, response) => {
    // Desestruturação do objeto
    const { nome, email, senha } = request.body;

    // Cria um hash para a senha informada
    const passwordHashed = await bcrypt.hash(senha, 10);

    // Abre a conexão com o Supabase (Tabela Users)
    const {data, error} = await supabase.from("users").insert([
        {
            nome,
            email,
            senha: passwordHashed
        }
    ]);

    if (error) {
        return response.status(500).json({
            erro: "Erro: ", error
        });
    }

    response.status(201).json({
        mensagem: "Usuário cadastrado com sucesso!"
    })
};

// Login
const authentication = async (request, response) => {
    // Desestruturação do objeto
    const { email, senha } = request.body;
    
    // Abre a conexão com o Supabase(Tabela Users)
    const {data: user, error} = await supabase.from("users")
        .select("*")
        .eq("email", email)  // SELECT * FROM users WHERE email = (email)
        .single()

    if (error || !user) {
        return response.status(401).json({
            mensagem: "Usuário ou senha inválidos"
        });
    }

    // Criptografa a senha e compara com a do DB
    const senhaEnviada = await bcrypt.compare(senha, user.senha);
    if (!senhaEnviada) {
        response.status(401).json({
            mensagem: "Usuário ou senha inválidos"
        })
    }

    // Gera o token
    const token = jwt.sign(
        {id: user.id},
        process.env.JWT_SECRET,
        {expiresIn: "id"}
    )

    // Devolve o token gerado
    response.json({ token })
};

// Listar todos os usuários
const listUsers = async () => {};