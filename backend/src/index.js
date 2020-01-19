const express = require ('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const app = express();

mongoose.connect('mongodb+srv://thiago:324050@cluster0-9zasr.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

//app.use(cors({ origin:"http://localhost:3000"})); // libera a aplicação para apenas este endereço
app.use(cors()); // libera a aplicação para todos os endereços
app.use(express.json());
app.use(routes);

app.listen(3333);