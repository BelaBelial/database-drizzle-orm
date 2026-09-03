//controla os enderecos que tem acesso ao servidor e podem fazer requisições/modificacoes
//CORS = protocol que informa ao browser quem eh autorizado a enviar o recurso, por quais metodos, e usando quais cabecalhos

//middle wares de seguranca devem vir no topo da pilha

//vetor de string bellow
const origensPermitidas = [
    'http://localhost:5173',
    'http://localhost:3000'
]

//corsOption = objeto -> exportacao nomeada
export const corsOptions = {
    //origin eh uma funcao que recebe uma origem e uma funcao de callback
    origin: (origin, callback) => {
        if(!origin || origensPermitidas.includes(origin)){
            callback(null, true);
        }
        else{
            callback(new Error("Acesso bloqueado pela CORS policy."));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}