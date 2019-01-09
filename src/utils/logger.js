const winston = require('winston')

// TODO: what kind of transports do we want to have in production? Maybe Logentries?

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json()
})

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }))
}

module.exports = logger
