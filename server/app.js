const express = require("express")
const app = express()
const fs = require("fs")
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let index = 460
app.post("/write", function(req, res){

 
  //fs.writeFileSync(Date.now().toString() + ".txt", req.body.array.join("\r\n"))
  fs.writeFile(index+ "-"+`Blancpain `+req.body.title + ".txt", req.body.array.join("\r\n"), function(err){
    if(err){
      console.log(err)
      res.status(500).json({
        msg : "failed"
      })
    }else {
      console.log("success")
      index++
      res.json("oke")
    }
    
  })
  
  
})


app.listen(3005, function(){
  console.log("test")
})