const createError = require("http-errors");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");


// Define routes here 
const schedule = require("./routes/schedule");


const app = express();


app.use(logger("dev"));
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended : false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.use("/schedule", schedule);

app.use(function(req, res, next){
    next(createError(404));
});

// app.use(function(err,req,res,next){
//     res.locals.message = err.message;
//     res.locals.error = req.app.get("env") === 'development' ? err : {};

//     res.status(err.status || 500);
//     res.json({ error: err });
//     next();
// });

app.listen(process.env.PORT || 5000);