require("dotenv").config()


module.exports = {
mongodbProducts: {
  connectionString: "mongodb://localhost:27017/productos",
},
mongodbUsers: {
  connectionString: "mongodb://localhost:27017/usuarios",
},
mongodbCarts: {
  connectionString: "mongodb://localhost:27017/carritos",
},
adminEthereal: process.env.ADMIN_ETHEREAL,
passwordEthereal: process.env.PASSWORD_ETHEREAL,
}
