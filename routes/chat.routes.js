const { Router, express } = require('express');
const router = Router()
const { auth} = require("../src/middlewares")
const MessagesController =require("../controllers/mensajes.controller")
const compression = require('compression')
router.use(compression())

class RouterChat{
  constructor() {
    this.controller = new MessagesController();
  }
  start() {
    router.get("/", auth, this.controller.getAll);
    router.post("/:id", this.controller.saveMessage);
    router.get("/:id", this.controller.getMessagesByUSername);
    
    return router;
  }
}

  module.exports = RouterChat;
  