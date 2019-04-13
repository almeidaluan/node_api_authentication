const app = require('express')()

app.use('/api', require('./routes'))

app.listen(3333)