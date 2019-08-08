const express = require('express');

const routes = express();

routes.get('/', (req, resp) => {
    return resp.json({ message: `Ola ${req.query.name}`} )
})

routes.post('/devs', (req, resp) => {
    console.log(req.body);
    return resp.json({ ok:true })
})

module.exports = routes;
