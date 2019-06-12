const request = require('request');
const forecast = require('./utils/forcast');
const geocode = require('./utils/coba');
const chalk = require('chalk');

// const url = 'https://api.darksky.net/forecast/500c7765534f0bb4d1fa2bae3269dacc/37.8267,-122.4233?lang=id';

// request({ url : url, json: true}, (error, response)=>{
//     if(error){
//         console.log('error services done');
//     }else if(response.body.error){
//         console.log('location note found');
//     }
//     else{
//         console.log('temperature : '+response.body.currently.temperature+' dan precip probality : '+response.body.currently.precipProbability+'%');
//     }
// });



const address = process.argv[2];
console.log(address);
if(!address){
    console.log('please enter address');
}else{
    geocode(address, (error, {latitude, longitude, location}) =>{
        if(error){
            return console.log(error);
        }
        forecast(latitude,longitude, (error, response)=>{
            if(error){
                return console.log(error);
            }
            console.log(chalk.green(location));
            console.log(chalk.red(response));
        });
    });
}






