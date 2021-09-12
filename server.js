'use strict'
require('dotenv').config();
const fastify = require('fastify')({ 
    logger: true,
    ignoreTrailingSlash: true ,
    wildcard: false
});
const path = require('path');
const port = process.env.PORT || 5000;


fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'build'),
    list: true
})
fastify.setNotFoundHandler((req, res) => {
    res.sendFile('index.html')
  })

fastify.get('/envars', (request, reply) => {
    console.log(process.env.SEARCH_INDEX)
    console.log(process.env.SEARCH_API_KEY)
    const envars = {
        index:process.env.SEARCH_INDEX,
        searchApiKey: process.env.SEARCH_API_KEY
    }
reply.send(envars)
})
fastify.listen(port, "127.0.0.1", (err, address) => {
    if (err) throw err
    fastify.log.info(`server listening on ${address}`)
})