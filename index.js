require("dotenv").config()

const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json');
const routes = require('./routes/index')

const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', routes)

const port = process.env.PORT || 3000
const server = app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})

module.exports = server