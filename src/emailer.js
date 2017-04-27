/* eslint-env node */
var nodemailer = require("nodemailer");

var transport = nodemailer.createTransport();

module.exports = {
    sendEmail : function(from, to, subject, body){
        transport.sendMail({
            from: 'sender@address',
            to: 'receiver@gmail.com',
            subject: 'hello',
            html: '<b>hello world!</b>',
            text: 'hello world!'
        });
    }
};