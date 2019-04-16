
(function () {
    
    var app = angular.module("tfgSanCarlos", ["ngRoute"]);
    
    app.config(function($routeProvider){
        $routeProvider
            .when("/login", {
                templateUrl: "login.html",
                controller: "loginController"
            })
            .when("/ajustes", {
                templateUrl: "ajustes.html",
                controller: "ajustesController"
            })
            .when("/quejas", {
                templateUrl: "quejas.html",
                controller: "quejasController"
            })
            .when("/encuesta", {
                templateUrl: "encuesta.html",
                controller: "encuestaController"
            })
            .otherwise({redirectTo:"/login"});
    });
    
}());