# Banco de dados, Modelagem de Dados e Dizzle ORM
> *informações durante aula 06.08 - arquivo para consulta*
- CRUD = Create, Read, Update, Delete (operações com dados)
- Banco de dados = conjunto de tabela
    - cada tabela = uma entendidade, registro de uma entidade
    - cada linha da tabela (um "objeto") tem linhas, e cada linha possui uma chave primária
        - a chave primária é o que identifica o elemento como único
- Banco de dados relacional = tabelas que se relacionam (entidades)
    - chave estrangeira -> eh a chave que vai fazer com que seja possível relacionar duas tabelas
- ORM = biblioteca que permite escrever em JS em transformar isso em SQL

## Serviço usado nesse repo para armazenar banco de dados:
NEON - por meio do Drizzle -> *Neon é um serviço de armazenamento online*
- Drizzle trás funções prontas do CRUD, caso contrário teríamos que escrever string com SQL e por o Js para executar o comando
    - ele cria SQL, e faz alterações (migrações)
    - "out" é o caminho onde ele coloca os arquivos, e se não existir a pasta indicada, ele cria ela
    - banco usado = postgre (banco relacional, e SQL), ele está armazenado em servidores online
    - pega o schema, e atualiza o banco com o novo schema
    - ORM permite tipagem de variáveis ou objetos, não nativo no Js
        - ele faz isso por meio do typescript
    - *Drizzle docs: [Documentation - Drizzle](https://orm.drizzle.team/docs/overview)*
- **NEON**:
    - acc is the same as github acc
    - website = [Neon Website](neon.com)
    - comando para instalar no projeto com o NPM: npm install @neondatabase/serverless

## Explicando Arquivos:
- `.env` = arquivo que guarda as variáveis do sistema
- `drizzle.config.js` = configura as principais funcionalidades envolvidas com o "dotenv" e retorna um obj
- `src/db/schema` = onde a tabela é escrita
- `index.js` = pega schema e configuracoes e cria uma instancia do banco de dados. o drizzle usa essa instancia p copiar ela no banco de dados real

## Useful Links (Documentations, etc):
- [Documentation CORS](https://www.npmjs.com/package/cors);
- [Documentation Helmet](https://helmet.js.org/);

## Middle Airs de Seguranca 
> As ferramentas abaixo foram usadas para implementar servicos de seguranca do banco de dados, com referencia ao navegador, a outras rotas, outro usuarios, outros scripts e etc. Obs: Varias coisas podem ser visualizadas nas ferramentas do desenvolvedor.
- Helmet Middle Ware -> Configuracao de cabecalhos
- Cors
- CSP -> Content Security Polity (eh usada dentro do Helmet)
    - bloqueio e seguranca de scripts externos

## Criptografia: O que eh?
- Pegar um texto que estah escrito de um jeito e mudar a escrita (passar para um codigo)
- Os processos de criptografia sao feitos por um algoritmo em sua maioria