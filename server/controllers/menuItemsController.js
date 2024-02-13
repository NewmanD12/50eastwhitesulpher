const MenuItem = require('../models/MenuItem')

async function createMenuItem(req, res) {
    try{
        const title = req.body.title
        const price = req.body.price
        const description = req.body.description
        const restaurant = req.body.restaurant
        const allergyWarnings = req.body.allergyWarnings
        const courseAndPrice = req.body.courseAndPrice
        const subsAndUpcharge = req.body.subsAndUpcharge

        console.log(subsAndUpcharge)

        const newMenuItem = new MenuItem({
            title, 
            price,
            description,
            restaurant,
            allergyWarnings,
            courseAndPrice,
            subsAndUpcharge
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