const url = require('url')
const express = require('express')
const config = require('./config')

const app = express()

const { port } = new url.URL(config.URL)

app.get('/', (req, res) => {
  res.json({
    message: 'hi, there'
  })
})

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server has started, listening on port: ${port}`)
})
