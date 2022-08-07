//need to add another npm framework called body-parser

const express = require("express")
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(req, res){
  console.log(__dirname)
  res.sendFile(__dirname + "/index.html")
})

//post the velocity after calculations
app.post("/", function(req, res){
  console.log(req.body)
  //TODO: initialize distance, time, velocity (velocity = distance/time)
  let distance = req.body.distance;
  let time = req.body.time;
  velocity = distance/time;

  res.send("The velocity is : " + velocity)
})

app.listen(3000, function(){
  console.log("Server for velocity calculator is running on PORT: 3000.")
})
