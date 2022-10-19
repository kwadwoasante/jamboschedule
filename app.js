require("dotenv").config();
const http = require("http");
const createError = require("http-errors");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const nodemailer = require("nodemailer");

const { data } = require("./scheduleData");

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
        // data : data
        message : `we are good to go`
    })
})

app.post("/send-email", async function(req,res){
    const { name, phone, message } = req.body;

    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_SERVER,
        port: process.env.SMTP_PORT,
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER, // generated ethereal user
          pass: process.env.SMTP_PASS, // generated ethereal password
        },
    });

    // send mail with defined transport object
    let mailOptions = await transporter.sendMail({
        from: 'kwadwo@asantekwabiah.com', // sender address
        to: `kwadwo.asante@aiesec.net`, // list of receivers
        subject: "Message from Contact page - Mobile App", // plain text body
        text: `${name}, ${phone} and ${message}`, // html body
    });

    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            return res.status(400).json({
                message : `Error: ${err}`
            })
        } 
        
        if(data) {
            return res.status(200).json({
                message : `Message sent`
            })
        }
    });
    
})

app.use(function(req, res, next){
    next(createError(404));
});

httpServer.listen(process.env.PORT || 5000);