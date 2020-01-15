const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

mongoose.connect('mongodb+srv://gabriel:<532289687545a>@cluster0-qjkem.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3333);
//métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:

//Query params: request.query (Filtros, ordenação,paginação ...) -> usado principalmente com get
//Route params: request.params(identificar um recurso em uma alteração ou remoção) -. usado principalmente com put e dele 
//Body params: 

