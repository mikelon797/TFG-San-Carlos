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
        var servicio2 = new servicio("Peluqueria", "04/05/19", 1, 0);
        var servicio3 = new servicio("Quiosco", "20/04/19", 1, 1);
        var servicio4 = new servicio("Asistencia Religiosa", "14/04/19", 1, 1);
        var servicio5 = new servicio("Biblioteca", "04/03/19", 1, 1);
        var servicio6 = new servicio("Peluqueria", "18/02/19", 1, 1);

        $scope.elementos = [servicio1, servicio2, servicio3,servicio4,servicio5,servicio6];

    };

    app.controller("seguimientoserviciosController", seguimientoserviciosController);

}());