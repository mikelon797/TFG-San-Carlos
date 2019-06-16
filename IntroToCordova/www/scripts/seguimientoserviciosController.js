(function () {

    var app = angular.module("tfgSanCarlos");

    var seguimientoserviciosController = function ($scope) {

        //En el caso de que no este "logeado" el usuario el envia al LogIn
        $(document).ready(function () {
            if (localStorage.getItem('signedIn') != 'Yes') { window.location.href = "index.html#!/login"; }
        });

        

        //$.when(getServicios()).done(function (a1) {
        //    $("#loading").hide();
        //    $("#tablaservicios").load(location.href + " #tablaservicios");

        //});

        function getServicios() {
            var datos = { "userid": localStorage.getItem('user_id') };
            console.log(datos);
            $.ajax({
                url: "http://138.100.72.88/hsc/services/getservices.php",
                type: "POST",
                dataType: 'json',
                data: JSON.stringify(datos),
                processData: false,
                success: function (data) {
                    if (data.status == 'KO') {
                        alert("algo ha salido mal");
                    }
                    if (data.status == 'OK') {
                        console.log(data);
                        var elementosenviar = createServices(data);
                        console.log(elementosenviar);
                        
                        $scope.$apply(function () {
                            $scope.elementos = elementosenviar;
                            console.log('yoppp');
                            console.log($scope.elementos);
                        });

                        return elementosenviar;
                    }
                    else {
                        console.log(data);
                    }
                }
            });
        }

        //Clase servicio
        var servicio = function (servicio, fecha, informed,closed) {
            this.servicio = servicio;
            
            this.fecha = fecha;
            if (informed == 1) { this.informed = "Sí" }
            if (informed == 0) { this.informed = "No" }
            if (informed == null) { this.informed = "No" }
            if (closed == 1) { this.closed = "Sí" }
            if (closed == 0) { this.closed = "No" }
            if (closed == null) { this.closed = "No" }

        }

        function createServices(data) {
            var elementoss = [];
            data.data.forEach(function (element) {
                var fecha1 = element.date_service;
                var fecha2 = fecha1.substring(0, fecha1.length - 9);
                var incidenciaux = new servicio(element.type_of_service, fecha2, element.informed, element.closed)
                elementoss.push(incidenciaux);
            });
            $scope.elementos = elementoss;
            console.log('hey');
            pruebascope();
           
            return elementoss;
        }
        function pruebascope() {
            console.log($scope.elementos);
        }
        
        ////Creo las preguntas y bloques
        //var servicio1 = new servicio("Biblioteca", "06/05/19",1,0);
        //var servicio2 = new servicio("Peluqueria", "04/05/19", 1, 0);
        //var servicio3 = new servicio("Quiosco", "20/04/19", 1, 1);
        //var servicio4 = new servicio("Asistencia Religiosa", "14/04/19", 1, 1);
        //var servicio5 = new servicio("Biblioteca", "04/03/19", 1, 1);
        //var servicio6 = new servicio("Peluqueria", "18/02/19", 1, 1);

        //$scope.elementos = [servicio1, servicio2, servicio3,servicio4,servicio5,servicio6];

        $scope.elementos = getServicios();
        console.log('pp');
        console.log($scope.elementos);
        //$('#tablaservicios').click(function () {
        //    location.reload();
        //});
    };

    app.controller("seguimientoserviciosController", seguimientoserviciosController);

}());