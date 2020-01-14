const express = require('express');

const app = express();

app.get('/', (request,response) => {
    return response.json({message: 'Eae Bro'});
})

//métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:

//Query params: request.query (Filtros, ordenação,paginação ...) -> usado principalmente com get
//Route params: request.params(identificar um recurso em uma alteração ou remoção) -. usado principalmente com put e dele 
//Body params: 

app.listen(3333);