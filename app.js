require("dotenv").config();
const http = require("http");
const createError = require("http-errors");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const nodemailer = require("nodemailer");

const { data } = require("./scheduleData");
const { returnDay } = require("./constants/functions");
const moment = require("moment-timezone");
const { parseISO, getTime } = require("date-fns");
const { formatInTimeZone, zonedTimeToUtc } = require('date-fns-tz');
const { DateTime } = require("luxon");


const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended : false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

const httpServer = http.createServer(app);

app.get("/", async function(req,res){
    res.status(200).json({
        message : `we are good to go`
    })
})

app.get("/current-show", async function(req,res){

    let today = new Date();
    let day = today.getDay();
    let dayText = returnDay(day);
    let dayData = data[dayText];
    let show;

    // let londonTime = moment.tz("Europe/London").hour();
    // let ghanaTime = moment.tz("Africa/Accra").hour();
    // let timeDiff = londonTime - ghanaTime;

    // // alternative ms option
    // // if time difference is not equal to 0, add diff of 3600000
    // let newTimeMs;
    // if(timeDiff !== 0){
    //     newTimeMs = new Date().getTime() + 3600000;
    // } else {
    //     newTimeMs = new Date().getTime();
    // }
    // console.log(newTimeMs)

    // show = dayData?.filter((item) => {
    //     return ((parseISO(item?.startTime).getTime() < newTimeMs) && (parseISO(item?.endTime).getTime() > newTimeMs))
    // })

    let momentDate = moment.tz("Europe/London");
    let momentHour = momentDate.hour();

    if(momentHour !== 23){
        show = dayData?.filter((item) => {
            return (momentHour >= parseISO(item?.startTime).getHours()) && (momentHour < parseISO(item?.endTime).getHours())
        })
    } else {
        show = dayData?.filter((item) => {
            return (momentHour === parseISO(item?.startTime).getHours())
        });
    }

    res.status(200).json({
        message : show[0]
    }) 
})

app.post("/day-schedule", async function(req,res){

    let day = req.body.day;
    let dayData = data[day];

    let active, activeItem;

    let momentDate = moment.tz("Europe/London");
    let momentHour = momentDate.hour();

    for (let i = 0; i < dayData?.length; i++) {
        if(momentHour !== 23){
            if((momentHour >= parseISO(dayData[i]?.startTime).getHours()) && (momentHour < parseISO(dayData[i]?.endTime).getHours())){
                active = i;
                activeItem = dayData[i]
            }
        } else {
            if((momentHour === parseISO(dayData[i]?.startTime).getHours())){
                active = i;
                activeItem = dayData[i]
            }
        }
    }

    // alternative ms option
    // if time difference is not equal to 0, add diff of 3600000
    // let londonTime = moment.tz("Europe/London").hour();
    // let ghanaTime = moment.tz("Africa/Accra").hour();
    // let timeDiff = londonTime - ghanaTime;

    // let newTimeMs;
    // if(timeDiff !== 0){
    //     newTimeMs = new Date().getTime() + 3600000;
    // } else {
    //     newTimeMs = new Date().getTime();
    // }

    // for (let i = 0; i < dayData?.length; i++) {
    //     if((parseISO(dayData[i]?.startTime).getTime() < newTimeMs) && (parseISO(dayData[i]?.endTime).getTime() > newTimeMs)){
    //         active = i;
    //         activeItem = dayData[i]
    //     }
    // }

    res.status(200).json({
        message : dayData,
        active : active,
        activeItem : activeItem
    }) 

})

app.use(function(req, res, next){
    next(createError(404));
});

httpServer.listen(process.env.PORT || 3000);