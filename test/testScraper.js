/* eslint-env node */
var scraper = require("../src/scraper");

/*scraper.getData("https://www.google.com", function(data){
    console.log(data);
});*/

scraper.getTrackingInfo(null, function(data){
    console.log(data.status);
    console.log(data.details.toString());
});
