const supertest = require('supertest')
const server = require('./server')
const db = require( './data/db-config')

// afterEach(async () => {
//     await db('headlines').truncate()
// })

describe('server tests', () => {
    describe('GET /', () => {
        it('runs tests', () => {
            expect(true).toBeTruthy()
        })
    })

    describe('POST /', () => {

    })

    describe('DELETE /', () => {
        
    })
})