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
        var incidencia3 = new incidencia("Error Comida", "20/04/19", 1, 1);
        var incidencia4 = new incidencia("Mobiliario", "02/04/19", 1, 1);
        var incidencia5 = new incidencia("Horario", "15/03/19", 1, 1);
        var incidencia6 = new incidencia("Comida Alegria", "13/03/19", 1, 1);

        $scope.elementos = [incidencia1, incidencia2, incidencia3, incidencia4, incidencia5, incidencia6];

    };

    app.controller("seguimientoquejasController", seguimientoquejasController);

}());