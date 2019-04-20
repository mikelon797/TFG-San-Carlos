(function () {

    var app = angular.module("tfgSanCarlos");

    var loginController = function ($scope) {

        $scope.hasNumber=function (myString) {
            return /\d/.test(myString);
        }
        $scope.validateForm = function (area,perfil,apellido,hab,aux) {
            if (area == "Area") { return false }
            if (perfil == "Perfil") { return false }
            if ($scope.hasNumber(apellido) ) { return false }
            if ($scope.hasNumber(hab)) { return true }
            else return true;
        }
        $scope.logInSend = function () {
            var Area = $("#Area").val();
            var Perfil = $("#Perfil").val();
            var Apellido = $("#Apellido").val();
            var Hab = $("#Hab").val();
            var Aux = $("#Aux").val();
            if ($scope.validateForm(Area, Perfil, Apellido, Hab, Aux)) {
                localStorage.setItem('signedIn', 'Yes');
                localStorage.setItem('Perfil', Perfil);
                localStorage.setItem('Area', Area);
                localStorage.setItem('Apellido', Apellido);
                localStorage.setItem('Hab', Hab);
                localStorage.setItem('Aux', Aux);
                window.location.href = "index.html#!/main";
            }
            else {alert("No has rellenado los campos correctamente")}
            
        };

        $(document).ready(function () {
            if (localStorage.getItem('signedIn') == 'Yes') { window.location.href = "index.html#!/main";}
        });
        
        
    };

    app.controller("loginController", loginController);

}());