const express = require('express')

const router = express.Router()

const ProductController = require('./src/controller/ProductController')

router.get('/', ProductController.index)


module.exports = router;