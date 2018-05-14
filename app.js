var express = require("express");
var bodyParser = require("body-parser"); // server nhận được dữ liệu được gửi từ client 
var morgan = require("morgan");
var setupController = require("./api/controllers/setupController.js");
var todoController = require("./api/controllers/todoController.js");
var moogose = require("mongoose")
var config = require("./config");
var app = express();
var port =process.env.PORT || 3000 ; // port được caais hình thông qua một biến môi trường, nếu PORT k đc xét thì gawnsm ặc định là 3000 

app.use("/assets",express.static(__dirname+"/public")); // người dùng truy cập thông qua địa chỉ /assets  thì sẽ truy cập tài nguyên tĩnh  ,__dirname : thư mục hiện tại 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));  // extended : true, bình thường chỉ có kiểu ket:value nhưng hiện tại thì chấp nhận nhiều kiểu khác nữa 

app.use(morgan("dev")); // log toàn bộ request ra console 

app.set("view engine","ejs"); // ejs để front hiểu được dữ liệu được trả về từ server  



// db info 

//console.log(config.getDbConnectiongString());
moogose.connect(config.getDbConnectiongString());
app.get("/",function(req,res){
    res.render("index.ejs");
})

setupController(app);
todoController(app);

app.listen(port,function(){
    console.log("app listening on port: "+ port);  
})