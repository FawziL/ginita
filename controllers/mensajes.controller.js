const {DaoFactoryMessages} =require("../src/services/daoFactory")
const daoFactoryMessages = new DaoFactoryMessages();
const Message = daoFactoryMessages.createDao();
const logger = require("../src/utils/logs/logger")

class MessagesController {

    async getAll(req, res) {
        try {
            const messages = await Message.getAll()
            res.format({
                html: function () {
                    res.render('messages', { messages })
                  },
                  json: function () {
                    res.json(messages)
                  }
            })  
        } catch (error) {
            logger.error(`No se ha encontrado ningún mensaje: ${error}`)}
        }



    async getMessagesByUSername(req, res) {
        try {
            let messageArray = await Message.getMessagesByUSername(req.user.username)
            res.render('message', { mensajes: messageArray})
            } catch (error) {
            logger.error(`Error al mostrar mensajes`)
            }
    }

    async saveMessage(req, res)  {
        res.json(await Message.saveMessage(req.body))
    }
}

module.exports =  MessagesController