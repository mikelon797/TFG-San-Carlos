(function () {

    var app = angular.module("tfgSanCarlos");

    var loginController = function ($scope) {

        $scope.logInSend = function() {
            var Area = $("#Area").val();
            var Perfil = $("#Perfil").val();
            var Apellido = $("#Apellido").val();
            var Hab = $("#Hab").val();
            var Aux = $("#Aux").val();
            localStorage.setItem('signedIn', 'Yes');
            localStorage.setItem('Perfil', Perfil);
            localStorage.setItem('Area', Area);
            localStorage.setItem('Apellido', Apellido);
            localStorage.setItem('Hab', Hab);
            localStorage.setItem('Aux', Aux);
            window.location.href = "index.html#!/main";
        };

    };

    app.controller("loginController", loginController);

}());