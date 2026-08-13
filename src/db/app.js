import express from 'express'
import 'dotenv/config'
import { db } from './db/index.js' 
import { pacientes } from './db/schema.js'

const server = express();

//pega a requisicao e converte para json
server.use(express.json());

// get =  pedir alguma coisa para o server
// a rota get lista todos os paciencientes
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

server.listen(3030, () => {console.log("running...")});
    
