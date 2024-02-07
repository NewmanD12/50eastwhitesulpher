const mongoose = require('mongoose')

const menuItemSchema = new mongoose.Schema({
    title : String,
    price : String,
    description : String,
    course : String,
    allergyWarnings : [String],
    subsAndUpcharge : [{
        title : String,
        price : String
    }]
})

const MenuItem = mongoose.model('menuitems', menuItemSchema)
module.exports = MenuItem