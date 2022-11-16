const {DaoFactoryOrder} =require("../src/services/daoFactory")
const daoFactoryOrder = new DaoFactoryOrder();
const Order = daoFactoryOrder.createDao();
const logger = require("../src/utils/logs/logger")

class OrderController {
    getOrders = async (req, res) => {
        try {
            const orders = await Order.getAll()
            res.format({
                html: function () {
                    res.render('orders', { orders })
                  },
                  json: function () {
                    res.json(orders)
                  }
            })
        } catch (error) {
            logger.error(`Error al mostrar ordenes`)}
    };
    
    
    getOrdersByUSername = async (req, res) => {
        try {
            res.json(await Order.getByUsername(req.params.username))
        } catch (err) {
            logger.error(` ${err}`)
        }
    }; 
    
    
}

module.exports =  OrderController