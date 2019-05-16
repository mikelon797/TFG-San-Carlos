
(function () {
    
    var app = angular.module("tfgSanCarlos", ["ngRoute"]);
    
    app.config(function($routeProvider){
        $routeProvider
            .when("/login", {
                templateUrl: "./views/login.html",
                controller: "loginController"
            })
            .when("/ajustes", {
                templateUrl: "./views/ajustes.html",
                controller: "ajustesController"
            })
            .when("/quejas", {
                templateUrl: "./views/quejas.html",
                controller: "quejasController"
            })
            .when("/encuesta", {
                templateUrl: "./views/encuesta.html",
                controller: "encuestaController"
            })
            .when("/encuesta2", {
                templateUrl: "./views/encuesta2.html",
                controller: "encuesta2Controller"
            })
            .when("/main", {
                templateUrl: "./views/main.html",
                controller: "mainController"
            })
            .when("/servicios", {
                templateUrl: "./views/servicios.html",
                controller: "serviciosController"
            })
            .otherwise({redirectTo:"/main"});
    });
    
}());