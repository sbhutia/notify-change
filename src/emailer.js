/* eslint-env node */
var nodemailer = require("nodemailer");
var config = require("./config");

var transport = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: config.useremail,
            pass: config.password 
        }
    });

module.exports = {
    sendEmail : function(to, subject, body){
        transport.sendMail({
            from: config.useremail,
            to: to,
            subject: subject,
            text: body
        });
    }
};