const express = require('express')
const router = express.Router()

const menuItemsController = require('../controllers/menuItemsController')

router.post('/create-menu-item', menuItemsController.createMenuItem)
router.get('/all-menu-items', menuItemsController.allMenuItems)

module.exports = router