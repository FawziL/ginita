const Message = require("../models/mensajes.model");
const CustomError = require("../utils/CustomError")

class MessageMongoDAO {
    constructor() {
      this.collection = Message
    }
    getAll = async () => {
        try {
            const messages = await this.collection.find().lean()
            return messages   
        } catch (error) {
            console.log(err)
            return []
        }
      } 

    getMessagesByUSername = async(username) => {
        const messagesByUser = await this.collection.findOne({ username: username });
        return messagesByUser || { error: 'Mensajes de usuario no encontrados' }
    }

    saveMessage = async(newMessage) => {

        try {
          mensaje.timestamp = Date.now()
          const createdMessage = await this.collection.create(newMessage);

          return createdMessage;
        } catch (error) {
            throw new CustomError(500, "Error creating message");
        }
    }

  }

module.exports =  MessageMongoDAO