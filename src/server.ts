import express from "express";
import "reflect-metadata";

import "./database";

//@types/express
const app = express();

// GET=> Buscar uma informação
// POST=> Inserir (Criar) uma informação
// PUT=> Alterar uma informaçao
// DELETE=> Remover uma informação
// PATCH=> Alterar uma informação específica

//Tipos de parâmetros:
// Routes params => parametros que fazem partes da rota ex: http://localhost:3000/products/124801924
// Query params => parametros que fazm parte de uma query ex: http://localhost:3000/products?name=teclado&description=tecladobom (não obrigatórios)
// Body params => parametros do corpo da requisição ex:
// {
//     "name": "telcado",
//     "description": "teclado bom"
// }

// app.get("/test", (request, response)=>{
//     //Request => Entrando
//     //Response => Saindo
//     return response.send("óla, NLW")
// })

// app.post("/test-post",(request, response)=>{
//     return response.send("óla, NLW post")
// })

// http://localhost:3000
app.listen(3000, () => console.log("Server is running"))