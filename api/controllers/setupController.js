 var Todos =require("../models/todoModel.js");

 module.exports = function(app){
     app.get("/api/setupTodos",function(req,res){
         
        var seedTodos =[
            {
                text:"Học Nodejs",
                isDone:false
            },
            {
                text:"Học Angular",
                isDone:false
            },
            {
               text:"create a complete app",
               isDone:false 
            }
        ];
        Todos.create(seedTodos,function(err,results){
            res.send(results);  
        })

     });
 }