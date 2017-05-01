var sendmail = require('sendmail')();

module.exports = {
    sendEmail = function(){
            sendmail({
            from: 'test@gmail.com',
            to: 'test@gmail.com',
            subject: 'test sendmail',
            html: 'Mail of test sendmail ',
          }, function(err, reply) {
            console.log(err && err.stack);
            console.dir(reply);
        });
    }
}