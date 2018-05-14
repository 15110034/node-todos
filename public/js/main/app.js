var app = angular.module("app.todos", ["xeditable"]); // khai báo tên app và không phụ thuộc vào thư viện nào cả  // khai baos Một ứng dụn ở phía client 


app.controller("todoController", ['$scope', 'svTodos', function ($scope, svTodos) {
    $scope.appName = "Node Todos !!!";
    $scope.formData = {};
    $scope.loading = true ;
    /* $scope.todos =[
         {
             text:"khởi tạo dự án ,include thư viện bootstrap ,fontawesome,angularjs,...",
             isDone:true
         },
         {
             text:"cài đặt angular js app,controller ,khởi tạo dữ liệu ban đầu ",
             isDone:true
         }
         ,{
             text:"tạo server gọi api,bingding dữ liệu ,action,...",
             isDone:false
         },
         {
             text:"hoàn thành ứng dụng , deploy lên heroku,...",
             isDone:false
         }
     ]*/
    // load data from api
    $scope.todos = [];

    svTodos.get().then(function (data) {

        $scope.todos = data.data;
        $scope.loading = false;
        console.log(data.data);
    });
    $scope.createTodo = function () {
        $scope.loading = true ;
        //  console.log($scope.formData);
        var todo = {
            text: $scope.formData.text,
            isDone: false
        };

       // $scope.todos.push(todo);
       // $scope.formData.text = "";

       svTodos.create(todo).then(function(data){
           
            $scope.todos = data.data;
            $scope.formData.text ="";
            $scope.loading =false;

       });

    };

    $scope.updateTodo = function (todo) {
        $scope.loading= true;
        console.log("update todo", todo);
        svTodos.update(todo).then(function(data){
            $scope.todos = data.data;
            $scope.loading = false;

        });
    };
    $scope.deleteTodo = function (todo) {
        $scope.loading = true ;
        console.log("delete todo", todo);
        svTodos.delete(todo._id).then(function(data){
            $scope.todos = data.data;
            $scope.loading = false ;
        });
    };
}]);    