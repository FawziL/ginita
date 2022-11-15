const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'ludwig59@ethereal.email',
        pass: 'rncD2e4WQB7uTA4KKd'
    }
});
module.exports = transporter