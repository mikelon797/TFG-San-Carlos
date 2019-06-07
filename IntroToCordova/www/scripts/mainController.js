(function () {

    var app = angular.module("tfgSanCarlos");

    var mainController = function ($scope) {

        //Funcion para redireccionar con los botones
        $scope.redirect = function (index) {
            if (index == '1') { window.location.href = "index.html#!/quejas"; }
            else if (index == '2') { window.location.href = "index.html#!/selectencuesta"; }
            else if (index == '3') { window.location.href = "index.html#!/ajustes"; }
            else if (index == '4') { window.location.href = "index.html#!/servicios"; }
            
        }

        //En el caso de que no este "logeado" el usuario el envia al LogIn
        $(document).ready(function () {
            if (localStorage.getItem('signedIn') != 'Yes') { window.location.href = "index.html#!/login"; }
        });

    };

    app.controller("mainController", mainController);

}());