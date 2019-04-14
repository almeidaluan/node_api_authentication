const mongoose = require('mongoose')
const logger = require('./../util/logger')

const User = require('./../model/user')

module.exports = {

    async index(req, res) {
        logger.info(`${req.method} - Entrando no fluxo da pagina Index de Usuarios`)
        const listUsers = await User.find({})
        return res.send(listUsers)
    },

    async store(req, res) {

        const { email, password } = req.body

        if (!email || !password) return res.status(400).json({ error: "insufficient data" })
        User.findOne({ email }, (err, data) => { // {email:email}
            if (err) return res.status(400).send({ error: 'Error search user !' });
            if (data) return res.status(400).send({ error: 'user has account' });

            const userCreated = User.create(req.body, (err, data) => {
                if (err) return res.send({ error: 'error create user' })
                return res.status(201).send(data)
            })
        })

    }
}