const express = require('express')
const { PORT } = require('./config')

const app = express()

app.get('/', (req, res) => {
  res.json({
    message: 'hi, there'
  })
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server has started, listening on port: ${PORT}`)
})
