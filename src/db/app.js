import express from 'express'
import 'dotenv/config'
import { db } from './db/index.js' 
import { pacientes } from './db/schema.js'
import { v4 as gerarSenha } from 'uuid'

import cors from 'cors'
import { corsOptions } from './config/cors.js'

//importando o helmet middle ware
import { helmetMiddleWare } from './config/helmet.js'

const server = express();

//deve vir no topo da pilhar -> tudo tem que estar configurado e seguro para funcionar ent deve estar no topo
server.use(helmetMiddleWare);

server.use(cors(corsOptions)); //middle ware de seguranca

//pega a requisicao e converte para json
server.use(express.json());

// get =  pedir alguma coisa para o server
// a rota get lista todos os paciencientes
/*
server.get('/pacientes', async () => {
    try{
        console.log("req recebida");
        const lista = await db.select().from(pacientes);
        //select faz a busca por meio de criar uma select query (comando de busca de selecao)
    }
    catch(erro){
        res.status(500).json({erro: "erro ao fazer buscas no banco de dados"});
    }
});
*/

server.get('/pacientes',(req, res)=>{
    res.status(200).json("teste")
})

server.post('/pacientes', async (req, res) => {
    console.log(req.body)
    const novo_paciente = {
        id: gerarSenha(),
        nome: req.body.nome,
        idade: req.body.idade,
        urgencia: req.body.urgencia
    }
    await db.insert(pacientes).values(novo_paciente)
    res.status(201).json(novo_paciente)
})

server.post('/uruarios', async (req, res) => {
    try {
        const {nome, email, senha} = req.body;
        if(!nome || !email || !senha){
            return res.status(400).json("Eh preciso do nome, email e senha para cadastrar um user.");
        }
        const usuariosExistentes = await db.select()
            .from(usuarios)
            .where(eq(usuarios.email, email))
        if(usuariosExistentes > 0){
            return res.status(400).json("Email ja cadastrado");
        }

        const seltRounds = 10;
        const senhaHash = await bcrypt.hash(senha, saltRounds);
    }
    catch(erro){

    }
})

server.listen(3030, () => {console.log("running...")});

    
