const mongoose = require('mongoose')
const url = require('url')
const app = require('./app')
const config = require('./config')
const logger = require('./utils/logger')

async function startServer () {
  return Promise.all([
    mongoose.connect(config.MONGO_DB_URL, {
      readPreference: 'primaryPrefered',
      useNewUrlParser: true,
      promiseLibrary: global.Promise
    }),
    app.listen(config.PORT)
  ])
}

startServer()
  .then(() => {
    const mongoUrl = new url.URL(config.MONGO_DB_URL)
    logger.info(`Server (${process.env.NODE_ENV}) started on port ${config.PORT}. Connected to MongoDB at ${mongoUrl.host}`)
  })
  .catch(error => {
    logger.error(error)
  })
