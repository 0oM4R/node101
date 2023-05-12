const express = require('express')
const swagger = require('./swagger')
const app = express()
const port = 3000
app.use(swagger)

/**
 * @swagger
 * /:
 *   get:
 *     summary: Home page
 *     description:for testing purposes
 *     responses:
 *       200:
 *         description: A welcome message to our Node101 project.
 */
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
