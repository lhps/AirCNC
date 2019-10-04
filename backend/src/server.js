const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');


const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-b89wo.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
// GET, POST, PUT, DELETE

// req.query = Acessar query parameters (para filtros)
// req.params = Acessar route parameters (para edição - put e delete)
// req.body = Acessar corpo da requisição ( para criação e edição)

app.use(express.json())
app.use(routes);

app.listen(3333);