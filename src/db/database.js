const mongoose = require('mongoose')
const logger = require('./../util/logger')
const options = { reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true }

mongoose.connect(process.env.MONGO_URL, options)

mongoose.connection.on('error', (err) => {
    logger.error(`Erro na conexao com banco de dados ${err}`)
})

mongoose.connection.on('disconnected', () => {
    logger.error(`Aplicação desconectada  do banco de dados`)
})
mongoose.set('useCreateIndex', true);