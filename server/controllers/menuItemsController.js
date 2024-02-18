const MenuItem = require('../models/MenuItem')

async function createMenuItem(req, res) {
    try{
        const title = req.body.title
        const description = req.body.description
        const restaurant = req.body.restaurant
        const course = req.body.course
        const allergyWarnings = req.body.allergyWarnings
        const mealPeriodAndPrices = req.body.mealPeriodAndPrices
        const subsAndUpcharges = req.body.subsAndUpcharges

        const newMenuItem = new MenuItem({
            title, 
            description,
            restaurant,
            course,
            allergyWarnings,
            mealPeriodAndPrices,
            subsAndUpcharges
        })

        const savedMenuItem = await newMenuItem.save()
        res.json({
            success : true,
            menuItem : savedMenuItem
        })


    }
    catch (e) {
        res.json({
            success : false,
            error : e.toString()
        })
    }
}

async function allMenuItems(req, res){
    try{
        const menuItems = await MenuItem.find({})

        res.json({
            success : true,
            menuItems : menuItems
        })
    }
    catch (e) {
        res.json({
            success : false, 
            error : e.toString()
        })
    }
}

module.exports = {
    createMenuItem, 
    allMenuItems
}