const mongoose = require('mongoose')
const logger = require('./../util/logger')

module.exports = {

    async index(req, res) {
        logger.info(`${req.method} - Acessando rota Index de product`)
        res.send("Bem vindo")

    }


}