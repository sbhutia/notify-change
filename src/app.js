var scraper = require("./scraper");
var emailer = require("./emailer");
var config = require("./config")

var currentStatus ;

var formatDetails = function (details){
    var headers = details.tr[0].th;
    var detailsString = '';
    for(var i=1; i < details.tr.length; i++){
        headers.forEach(function(item, index){
            detailsString = detailsString + headers[index].content + " : " + details.tr[i].td[index] + "\n";
        });
        detailsString = detailsString + "============================================================\n\n";   
    }
    return detailsString
}

var checkStatus = function(){
    scraper.getTrackingInfo(config.consignmentParameter, function(response){
        if(response.status !== currentStatus){
            currentStatus = response.status;
            console.log("status has changed : " + currentStatus);
            console.log();
            emailer.sendEmail("test@gmail.com", currentStatus, formatDetails(response.details));
        }else{
            console.log("status unchanged : " + response.status);
        }
        setTimeout (checkStatus, 10000);
    });
};

checkStatus();
