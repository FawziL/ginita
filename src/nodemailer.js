const nodemailer = require("nodemailer");
const {adminEthereal, passwordEthereal } = require("../config");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: "lola.wuckert61@ethereal.email",
        pass: "3KfC7rEXWbWkkK7xvf" 
    }
});
module.exports = transporter