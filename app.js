const Express = require('express')
const logger = require('./logger');
const isAuth = require('./auth');

const app = Express()
const port = 3004
const envName = 'localhost'

const helloWorld = async (req, res) => {
    res.send('Hello World!!')
}

const status = async (req, res) => {
    const message = `Environment '${envName}' running on port: ${port}`
    res.send(message)
}

const error = async (req, res) => {
    res.status(400)
    res.send('error')
}

app.get('/hello', isAuth.isAuth, helloWorld)

app.get('/status', logger, status)

app.get('/error', logger, error)

app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})
