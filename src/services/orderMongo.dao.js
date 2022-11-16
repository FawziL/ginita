const Order = require("../models/ordenes.model");
const CustomError = require("../utils/CustomError")
const transporter = require("../../src/nodemailer")
require("dotenv").config();
const config = require("../../config");


let instance;

class OrderMongoDAO {
  constructor() {
    this.collection = Order;
  }
 
  getAll = async () => {
    try {
        const allOrders = await this.collection.find().lean()
        return allOrders   
    } catch (error) {
        return []
    }
  }

  getByUsername = async(username) => {
      const order = await this.collection.findOne({ username: username });
      return order
  }

  saveOrder = async (username, productos) =>{
    try {
      const orders = await this.getAll()
      const numberOfOrder = orders.length + 1;
      const mailFormat = new this.collection({username:username, timestamp:Date.now(), productos:productos, numberOfOrder: numberOfOrder})
      const productosArray = JSON.stringify(productos)
      const mailOptions = {
        from: "Servidor Node",
        to: "lola.wuckert61@ethereal.email",
        subject: `Nueva Orden Generada: ${numberOfOrder}`,
        html: 
        `
        <h2>Email: ${username}</h2>
        <h2>Fecha: ${Date.now()}</h2>
        <h2>Número de Orden: ${numberOfOrder}</h2>
        <h2>Productos: ${productosArray}</h2>
        `,
      };

      async function enviarMail() {
        const info = await transporter.sendMail(mailOptions);
        console.log(info);
      }
      try {
        enviarMail()
      } catch (error) {
        console.log(error);
      }   
      await mailFormat.save() 
      return mailFormat       
  } catch (error) {
    console.log(error)
  }}

  static getInstance() {
    if (!instance) {
      instance = new OrderMongoDAO();
    }
    return instance;
  }
}

module.exports = OrderMongoDAO;
