const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Metodos HTTP:
 *
 * GET: Busca/Listar uma informação do back-end
 * POST: criar uma informação no back-end
 * PUT: alterar uma informação no back-end
 * DELETE: deletar uma informação no back-end
 */
/**
 * Tipos de parametros:
 *
 * Query Parms: Parametros nomeados enviados na rota após "?" (Filtros/Paginação)
 * Route Parms: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recurso
 */

/**
 * SQL: SQlite, MySQL, PostgreSQL, Microsoft SQL Server
 * NoSQL: MongoBD, CouchDB, etc
 */

/**
 * Driver: select * from user
 * Query Builder: tabela ('users')
 */
