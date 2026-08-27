//vai trazer um conjunto de middle wares de seguranca
//impede cabecalhos informativos, adiciona protecoes contra ataque
import helmet from 'helmet'

export const helmetMiddleWare = helmet({
    hidePoweredBy: true,
    frameguard: {action: 'deny'},
    noSniff: true
});