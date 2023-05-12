const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const express = require('express')
const app = express()

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'My API description'
    }
  },
  apis: ['./routes/*.js'] // Path to the API routes folder
}

const swaggerDocs = swaggerJSDoc(swaggerOptions)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

module.exports = app
