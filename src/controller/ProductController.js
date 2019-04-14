const mongoose = require('mongoose')
const logger = require('./../util/logger')

const User = require('./../model/user')

module.exports = {

    async index(req, res) {
        logger.info(`${req.method} - Entrando no fluxo da pagina Index de Usuarios`)
        const listaDeUsuarios = await User.find({})
        return res.send(listaDeUsuarios)
    },

    async store(req, res) {

        const { email, password } = req.body

        if (!email || !password) return res.status(400).json({ error: "Dados insuficientes" })
        User.findOne({ email }, (err, data) => { // {email:email}
            if (err) return res.status(400).send({ error: 'Erro ao buscar usuario !' });
            if (data) return res.status(400).send({ error: 'Usuario ja registrado' });

            const userCreated = User.create(req.body, (err, data) => {
                if (err) return res.send({ error: 'Erro ao criar usuario' })
                return res.status(201).send(data)
            })
        })

    }
}