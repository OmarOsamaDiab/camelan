require("dotenv").config()

const http = require("http")
const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json');
const routes = require('./routes/index')

const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', routes)

const server = http.createServer(app)
const port = process.env.PORT || 3000
server.listen(port)
server.on('listening', () => {
    console.log(`server is running on port ${port}`)
})
