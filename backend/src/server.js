const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes')

const server = express();

mongoose.connect('mongodb+srv://omena:omenaasd123456@tindev-uniw3.mongodb.net/tindev?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

server.use(express.json());
server.use(routes);

server.listen(3333);