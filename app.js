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
const { parseISO } = require("date-fns");

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