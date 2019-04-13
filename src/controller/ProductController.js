const mongoose = require('mongoose')
const logger = require('./../util/logger')

module.exports = {

    async index(req, res) {
        logger.info(`${req.method} - Entrando no fluxo da pagina Index de Produtos`)
        res.send('pagina inicial de produtos')
    }
}