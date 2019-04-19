(function () {

    var app = angular.module("tfgSanCarlos");

    var mainController = function ($scope) {

        $scope.redirect = function (index) {
            if (index == '1') { window.location.href = "index.html#!/quejas"; }
            else if (index == '2') { window.location.href = "index.html#!/encuesta"; }
            else if (index == '3') { window.location.href = "index.html#!/ajustes"; }
            
        }
        

    };

    app.controller("mainController", mainController);

}());