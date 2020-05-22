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

server.post('/headlines', (req, res) => {
    Headlines.add(req.body)
    .then(headline => {
        res.status(201).json(headline)
    })
    .catch(e => {
        res.status(500).json({ message: 'Could not add headline' })
    })
})

server.delete('/headlines/:id', (req, res) => {
    const id = req.params.id
    Headlines.remove(id)
    .then(deleted => {
        if(deleted) {
            res.status(200).json({ message: 'Deleted'})
        } else {
            res.status(404).json({message: "Could not find headline"})
        }
    })
    .catch(e => {
        res.status(500).json({ error: e.message})
    })
})

module.exports = server