const express = require("express");
const router = express.Router();

const { data } = require("../scheduleData.js");

router.get("/", async function(req,res){
    res.status(200).json({
        data : data
    })
    // console.log(data);
})

module.exports = router;