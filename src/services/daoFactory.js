const ProductMongoDAO = require("./productMongo.dao.js");
const CartMongoDAO = require("./cartMongo.dao.js");
const MessageMongoDAO = require("./messageMongo.dao.js");
const OrderMongoDAO = require("./orderMongo.dao.js");


class DaoFactoryProduct {
  createDao() {
     return new ProductMongoDAO();
  }
}
class DaoFactoryCart {
  createDao() {
     return new CartMongoDAO();
  }
}

class DaoFactoryMessages {
  createDao() {
     return new MessageMongoDAO();
  }
}

class DaoFactoryOrder {
  createDao() {
     return new OrderMongoDAO();
  }
}

module.exports= {DaoFactoryProduct, DaoFactoryCart, DaoFactoryMessages, DaoFactoryOrder}
