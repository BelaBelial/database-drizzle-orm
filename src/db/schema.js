import { pgTable, serial, text, integer } from 'drizzle-orm/pg-core' //pegando a tipagem da lib e tudo mais

//pgTable recebe o nome da tabela e as colunas
//as colunas vão ser um objeto, cada atributo é uma coluna
export const pacientes = pgTable("pacientes", {
    id: serial("id").primaryKey(),
    nome: text("nome").notNull(),
    idade: integer("idade").notNull(),
    urgencia: text("urgencia").notNull()
});