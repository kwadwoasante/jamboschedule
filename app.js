const createError = require("http-errors");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");

const { data } = require("./scheduleData");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended : false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));


app.get("/", async function(req,res){
    res.status(200).json({
        data : data
    })
})

app.use(function(req, res, next){
    next(createError(404));
});

app.listen(process.env.PORT || 5000);