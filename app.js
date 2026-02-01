const express = require("express")
const app = express()
const tasks = require('./routes/tasks')
const connDB = require("./db/connect")
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')

// Middleware
app.use(express.json())

// Routes
app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandler)

const port = 3000

const start = async () => {
    try {
        await connDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()
