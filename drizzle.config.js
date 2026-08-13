//arquivo de configuracao

import 'dotenv/config' //importando o módulo

export default{
    //caminho onde os esquemas das tabelas vao estar armazenados
    schema: './src/db/schema.js',
    out: './drizzle',
    dialect: 'postgresql', //postgre eh um banco SQL relacional
    dbCredentials: {url: process.env.DATABASE_URL}
}