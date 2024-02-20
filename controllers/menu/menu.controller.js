const menus = require("../../database/menus.json")
module.exports = (req,res) => {
    const idMenu = req.params.idProduct
    const menuEncontrado = menus.find((menu) => menu.id === +idMenu)
    res.render("detalleMenu", {menu : menuEncontrado})
}