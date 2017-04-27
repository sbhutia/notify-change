/* eslint-env node */
var textbelt = require('textbelt');

module.exports = {
    send : function(number, text){
        textbelt.sendText('00447526169055', 'A sample text message!', {region:'intl',}, function(res) {
          if (res) {
            console.log(res);
          }
        });
    }
};

