const express = require('express')

const Headlines = require('./headlines/headlines-model')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json({api: 'Running'})
})

server.get("/headlines", (req, res) => {
    Headlines.find()
      .then(headlines => {
        res.status(200).json(headlines);
      })
      .catch(e => {
        res.status(500).json(e);
      });
  });

server.post('/', (req, res) => {
    Headlines.add(req.body)
    .then(headline => {
        res.status(200).json(headline)
    })
    .catch(e => {
        res.status(500).json({ message: 'Could not add headline' })
    })
})

module.exports = server