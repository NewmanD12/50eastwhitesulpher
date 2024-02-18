const mongoose = require('mongoose')

const menuItemSchema = new mongoose.Schema({
    title : String,
    description : String,
    restaurant: String,
    course : String,
    allergyWarnings : [String],
    mealPeriodAndPrices : [{
        course : String,
        price : String
    }],
    subsAndUpcharges : [{
        title : String,
        price : String
    }]
})

const MenuItem = mongoose.model('menuitems', menuItemSchema)
module.exports = MenuItem