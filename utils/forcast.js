const request = require('request');

const forcast = (latitude, longitude, callback) =>{
    url = 'https://api.darksky.net/forecast/500c7765534f0bb4d1fa2bae3269dacc/'+latitude+','+longitude;
    request({url, json: true}, (error, {body})=>{
        if(error){
            callback('error this server', undefined);
        }else if(body.error){
            callback('location the unable', undefined);
        }else{
            callback(undefined, 'temperature : '+body.currently.temperature+' dan precip probality : '+body.currently.precipProbability+'%');
        }
    });
}


module.exports = forcast;