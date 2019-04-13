const express = require('express')

const app = express()

app.use(express.json())
app.use('/api', require('./routes'))


require('dotenv').config()
require('./src/db/database')
app.listen(8080)