import express from "express";

//@types/express
const app = express();

// GET=> Buscar uma informação
// POST=> Inserir (Criar) uma informação
// PUT=> Alterar uma informaçao
// DELETE=> Remover uma informação
// PATCH=> Alterar uma informação específica

app.get("/test", (request, response)=>{
    //Request => Entrando
    //Response => Saindo
    return response.send("óla, NLW")
})

app.post("/test-post",(request, response)=>{
    return response.send("óla, NLW post")
})

// http://localhost:3000
app.listen(3000, () => console.log("Server is running"))