(function () {

    var app = angular.module("tfgSanCarlos");

    var ajustesController = function ($scope) {

        $scope.toggleajustes = function (index) {
            var nombreclase = "ajustes" + index;
            var x = document.getElementsByClassName(nombreclase);
            try {
                for (var i = 0, length = x.length; i < length; i++) {
                    if (x[i].style.display === "none") {
                        x[i].style.display = "block";
                    } else {
                        x[i].style.display = "none";
                    }}}
            catch(err){}
        }

        $scope.logout = function () {
            localStorage.setItem('signedIn', 'No');
            localStorage.setItem('Perfil', '');
            localStorage.setItem('Area', '');
            localStorage.setItem('Apellido', '');
            localStorage.setItem('Hab', '');
            localStorage.setItem('Aux', '');
            window.location.href = "index.html";
        }

       
        $scope.get = function (index) {
            if (index == 'apellido') return localStorage.getItem('Apellido');
            else if (index == 'loca') return localStorage.getItem('Area');
            else if (index == 'perfil') return localStorage.getItem('Perfil');


        }

    };

    app.controller("ajustesController", ajustesController);

}());