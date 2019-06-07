(function () {

    var app = angular.module("tfgSanCarlos");

    var seguimientoquejasController = function ($scope) {

        //En el caso de que no este "logeado" el usuario el envia al LogIn
        $(document).ready(function () {
            if (localStorage.getItem('signedIn') != 'Yes') { window.location.href = "index.html#!/login"; }
        });
        var incidencia = function (incidencia, fecha, informed, closed) {
            this.incidencia = incidencia;
            
            this.fecha = fecha;
            if (informed == 1) { this.informed = "Sí" }
            if (informed == 0) { this.informed = "No" }
            if (closed == 1) { this.closed = "Sí" }
            if (closed == 0) { this.closed = "No" }
        }


        //Creo las preguntas y bloques
        var incidencia1 = new incidencia("Temperatura Alta", "05/05/19", 1, 0);
        var incidencia2 = new incidencia("Limpieza", "02/05/19", 1, 1);
        $scope.elementos = [incidencia1, incidencia2];

    };

    app.controller("seguimientoquejasController", seguimientoquejasController);

}());