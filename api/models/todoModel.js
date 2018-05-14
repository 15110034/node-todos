var mongoose = require("mongoose"); //tạo ra đối tượng model ( kiểu như bảng trong cơ sở dữ liệu quan hệ , k biết là có thể nói nó là collection trong này không  )
var Schema =mongoose.Schema;

var todoSchema = new Schema({
    text :String,
    isDone:Boolean  
});

var Todos = mongoose.model("Todos",todoSchema);

module.exports =Todos ;