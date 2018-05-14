var app = angular.module("app.todos"); // taoj app angular 

// create service 
app.factory("svTodos", ["$http", function ($http) { // có một service thì chỉ có một tham số trong callback function
    return {
        get: function () {
            var response =$http.get("/api/todos");
            console.log(response);

            return response;
        },
        create: function (todoData) {
            return $http.post("/api/todo", todoData);
        },
        update: function (todoData) {
            return $http.put("/api/todo", todoData);
        },
        delete: function (id) {
            return $http.delete("/api/todo/" + id);
        }
    };
}]);