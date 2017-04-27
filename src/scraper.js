/* eslint-env node */
var http = require("http");
var YQL = require("yql");

module.exports = {
    getData : function(url, callback){
        http.get(url, function(response){
            response.on("data", function(data){
                callback(data.toString());
            });
        });
    },
    getTrackingInfo : function(param, callback){
        var query = YQL("select * from html where url='https://www.indiapost.gov.in/VAS/Pages/trackconsignment.aspx?t=0r3LFfrnYm6Z5xaREdzaMA==' and xpath='//*[@id=\"secPgContent\"]'");
        query.exec( function (error, response){
            var status = response.query.results.section.div.div[1].div[1].div[0].span[1].content;
            var eventDetails = response.query.results.section.div.div[1].div[1].div[1].div.table.tbody;
            callback({status: status, details : eventDetails});
        });
    }
}