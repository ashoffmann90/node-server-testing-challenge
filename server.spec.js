const request = require('supertest')
const {add, remove} = require('./headlines/headlines-model')
const server = require('./server')
const db = require( './data/db-config')

afterEach(async () => {
    await db('headlines').truncate()
})

describe('server tests', () => {
    describe('GET /', () => {
        it('runs tests', () => {
            expect(true).toBeTruthy()
        })
    })

    describe('POST /headlines', () => {
        // before each test runs it will clear out the old data
        // beforeEach(async function() {
        //     await db('headlines').truncate()
        // })
        it('should give new headline', async () => {
            await add({title: 'some headline'})
            const headlines = await db('headlines')
            expect(headlines).toHaveLength(1)
        })
        it('should send a 201 status code', async () => {
            const response = await request(server)
            .post('/headlines')
            .send({
                title: 'something'
            })
            expect(response.status).toBe(201)
            //IF USING BELOW, REMOVE ASYNC
            // return request(server)
            // .post('/headlines')
            // .send({title:"something"})
            // .then(response => {
            //     expect(response.status).toBe(201)
            // })
        })
    })

    describe('DELETE /', () => {
        // beforeEach(async function() {
        //     await db('headlines').truncate()
        // })
        it('should delete a headline', async () => {
            request(server)
            .post('/headlines')
            .send({
                title: 'something'
            })
            await remove({id:1})
            const headlines = await db('headlines')
            expect(headlines).toHaveLength(0)
        })
        it('status code 200 after delete', async () => {
            const posting = await request(server)
            .post('/headlines')
            .send({
                title: 'something'
            })
            console.log(posting.body)
            const response = await request(server)
            .delete('/headlines/1')
            expect(response.status).toBe(201)
        })
    })
})