(function () {

    var app = angular.module("tfgSanCarlos");

    var seguimientoserviciosController = function ($scope) {

        //En el caso de que no este "logeado" el usuario el envia al LogIn
        $(document).ready(function () {
            if (localStorage.getItem('signedIn') != 'Yes') { window.location.href = "index.html#!/login"; }
        });
        //Clase servicio
        var servicio = function (servicio, fecha, informed,closed) {
            this.servicio = servicio;
            
            this.fecha = fecha;
            if (informed == 1) { this.informed = "Sí" }
            if (informed == 0) { this.informed = "No" }
            if (closed == 1) { this.closed = "Sí" }
            if (closed == 0) { this.closed = "No" }
        }

        
        //Creo las preguntas y bloques
        var servicio1 = new servicio("Biblioteca", "06/05/19",1,0);
        var servicio2 = new servicio("Peluqueria", "04/05/19", 1,1);
        $scope.elementos = [servicio1, servicio2];

    };

    app.controller("seguimientoserviciosController", seguimientoserviciosController);

}());