const { Router, express } = require('express');
const path = require("path");
const router = Router()
const OrderController=require("../controllers/order.controller")
const { auth} = require("../src/middlewares")
const compression = require('compression')
router.use(compression())


class RouterCart{
  constructor() {
    this.controller = new OrderController();
  }
  start() {

  router.get("/", this.controller.getOrders);
  router.post('/:username', this.controller.getOrdersByUSername);

  return router;
  }

}


module.exports = RouterCart;
