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
        from: 'no-reply@jamboradio.co.uk', // sender address
        to: `info@jamboradio.co.uk`, // list of receivers
        subject: "Message from Contact page - Mobile App", // plain text body
        // text: `${name}, ${phone} and ${message}`, // html body
        html: `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Lato&family=Montserrat:wght@700&display=swap" rel="stylesheet">
            <title>BlayFind - Firm Account Creation</title>
        
            <style>
                *,::before,::after {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }
                body {
                    width:100vw;
                    height:100vh;
                    /* background-color: red; */
                    background-color:#ededed;
                    font-family:'Lato', sans-serif;
                    letter-spacing:normal;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
        
                h1 {
                    font-family: 'Montserrat', sans-serif;
                }
    
                .font-bold {
                    font-weight: 700;
                }
        
                .container {
                    margin-left:auto;
                    margin-right:auto;
                    width:75%;
                    background-color:#FFD300;
                    border-radius:12px;
                    padding:40px 70px;
                    color:#222222
                }
        
                @media(max-width: 30rem){
                    .container {
                        padding: 40px 15px;
                    }
                }
        
                @media(max-width: 50rem){
                    .container {
                        padding: 40px 30px;
                    }
                }
            </style>
        
        </head>
        <body>
        
            <div role="main" class="container">
                <h1 style="font-size:3em;margin-bottom:1.2rem">
                    Jambo! Radio
                </h1>
        
                <p style="margin-top:2rem;margin-bottom:2rem;">Hi Admin, a message was sent using the mobile application. Details below.<br /><br />
    
                    Name: <span class="font-bold">${name}</span><br/>
                    Phone number: <span class="font-bold">${phone}</span><br/>
                    Message: <span class="font-bold">${message}</span>
                    
                </p>
    
                <p>
                Have a great day!<br />
                Jambo! Radio
                </p>
        
                <hr style="margin-top:.7rem;margin-bottom:.7rem;opacity:0.2">
        
                <p style="color:#555555;font-size:0.825em;text-align:center;margin-bottom:10px;">The email was sent by <b style="color:black">Jambo! Radio</b></p>
                <p style="color:gray;font-size:0.825em;text-align:center">&copy; <span id="copyYear"></span> Jambo! Radio. All Rights Reserved</p>
            </div>
    
            <script>
                const year = new Date().getFullYear();
                document.getElementById("copyYear").innerText = year;
            </script>
        
        </body>
        </html>`
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