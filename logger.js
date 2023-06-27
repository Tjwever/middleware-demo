const fs = require('fs')
const path = require('path')

const logDirectory = path.join(__dirname, 'logs')

// Create the logs directory if it doesn't exist
if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory)
}

const logger = (req, res, next) => {
    const { method, url } = req
    const logMessage = `${new Date().toISOString()} - ${method} ${url}\n`

    fs.appendFile(path.join(logDirectory, 'app.log'), logMessage, (err) => {
        if (err) {
            console.error('Error writing to log file:', err)
        }
    })

    next()
}

module.exports = logger
