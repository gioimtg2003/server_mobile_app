const bodyParser = require("body-parser");
const e = require("express");
let express = require("express");
let app = express();
const cros = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cros());

let router = require("./V1/Router/Router");

app.use("/api/v1", router.initRouter, (req, res, next)=>{
    console.log("Time: ", Date.now(), "Request URL: ", req.originalUrl, "Request Type: ", req.method, "Code: ", res.statusCode);
    next();
});  
app.get("/api/v1/version", (req, res)=>{
    res.status(200).json({
        code: 200,
        message: "Success", 
        version: "1.0.12"
    });
})

app.listen(PORT, ()=>{
    console.log("Server is running on port: "+ PORT);
})
