//vai trazer um conjunto de middle wares de seguranca
//impede cabecalhos informativos, adiciona protecoes contra ataque
import { text } from 'drizzle-orm/gel-core';
import { serial } from 'drizzle-orm/mysql-core';
import helmet from 'helmet'

//Injecao de cabecalhos 
export const helmetMiddleWare = helmet({
    hidePoweredBy: true,
    frameguard: {action: 'deny'},
    noSniff: true, //navegador nao tenta adivinhar o conteudo enviado na requisicao - gera problemas de seguranca caso contrario
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'", "'unsafe-inline'", "http://cdn.jsdelivr.net"], //autoriza o swagger
            styleSrc: ["'self'", "'unsafe-inline'", "http://cdn.jsdelivr.net"],
            imgSrc: ["'self'", "data:", "http:"],
            connectSrc: ["'self'"]
        }       
    }
});

//acesso para pessoas e senhas (criptografia e autenticacao)
//seguranca de senhas
//senhas ficam armazenadas em banco de dados -> protegidos por medidas anti vazamento de dados

//LGPD = lei geral da protecao de dados -> direitos pra cidadaos e users de plataformas
//gerando a tabela
export const usuarios = pgTable('usuarios', {
    id: serial('id').primaryKey(),
    nome: text('nome').notNull(),
    email: text('email').notNull().unique(), //nao pode ter dois registros com o mesmo email
    senha: text('senha').notNull()
});