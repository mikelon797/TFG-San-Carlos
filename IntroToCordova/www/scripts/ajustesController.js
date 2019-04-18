(function () {

    var app = angular.module("tfgSanCarlos");

    var ajustesController = function ($scope) {

        $scope.toggleajustes = function (index) {
            console.log(index);
            var nombreclase = "ajustes" + index;
            var x = document.getElementsByClassName(nombreclase);
            for (var i = 0, length = x.length; i < length; i++) {
                if (x[i].style.display === "none") {
                    x[i].style.display = "block";
                } else {
                    x[i].style.display = "none";
                }
            }
        }

        $scope.logout = function () {
            alert("Esta seguro que desea cerrar su cuenta?");

        }

        $scope.logInSend = function () {
            var Area = $("#Area").val();
            console.log(Area)
        };

    };

    app.controller("ajustesController", ajustesController);

}());