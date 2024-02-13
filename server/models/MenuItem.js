const mongoose = require('mongoose')

const menuItemSchema = new mongoose.Schema({
    title : String,
    price : String,
    description : String,
    restaurant: String,
    allergyWarnings : [String],
    courseAndPrice : [{
        course : String,
        price : String
    }],
    subsAndUpcharge : [{
        title : String,
        price : String
    }]
})

const MenuItem = mongoose.model('menuitems', menuItemSchema)
module.exports = MenuItem