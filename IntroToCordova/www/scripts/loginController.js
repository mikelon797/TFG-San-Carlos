(function () {

    var app = angular.module("tfgSanCarlos");

    var loginController = function ($scope) {

        $scope.logInSend = function() {
            var Area = $("#Area").val();
            var Perfil = $("#Perfil").val();
            var Apellido = $("#Apellido").val();
            var Hab = $("#Hab").val();
            localStorage.setItem('signedIn', 'Yes');
            console.log(localStorage.getItem('signedIn'));
            console.log(Perfil + Area + Apellido + Hab);
        };

    };

    app.controller("loginController", loginController);

}());