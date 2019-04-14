const express = require('express')
const requireDir = require('require-dir')
const bodyParser = require('body-parser');
const app = express()

//BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

requireDir('./src/model')
app.use('/api', require('./routes'))

require('dotenv').config()
require('./src/db/database')
app.listen(8888)