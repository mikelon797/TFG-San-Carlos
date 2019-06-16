(function () {

    var app = angular.module("tfgSanCarlos");

    var seguimientoquejasController = function ($scope) {



        //En el caso de que no este "logeado" el usuario el envia al LogIn
        $(document).ready(function () {
            if (localStorage.getItem('signedIn') != 'Yes') { window.location.href = "index.html#!/login"; }
        });


        function getIncidencias() {
            var datos = { "userid": localStorage.getItem('user_id')};
            console.log(datos);
            $.ajax({
                url: "http://138.100.72.88/hsc/incidents/getincidents.php",
                type: "POST",
                async: false,
                dataType: 'json',
                data: JSON.stringify(datos),
                processData: false,
                success: function (data) {
                    if (data.status == 'KO') {
                        alert("algo ha salido mal");
                    }
                    if (data.status == 'OK') {
                        console.log(data);
                        var elementosenviar = createIncidents(data);
                        console.log(elementosenviar);
                        return elementosenviar;
                    }
                    else {
                        console.log(data);
                    }
                }
            });
        }

        var incidencia = function (incidencia, fecha, informed, closed) {
            this.incidencia = incidencia;
            
            this.fecha = fecha;
            if (informed == 1) { this.informed = "Sí" }
            if (informed == 0) { this.informed = "No" }
            if (closed == 1) { this.closed = "Sí" }
            if (closed == 0) { this.closed = "No" }
        }

        function createIncidents(data) {
            var elementoss = [];
            data.data.forEach(function (element) {
                var fecha1 = element.date_incident;
                var fecha2 = fecha1.substring(0, fecha1.length - 9);
                var incidenciaux = new incidencia(element.incident_title, fecha2, element.informed, element.closed)
                elementoss.push(incidenciaux);
            });
            $scope.elementos = elementoss;

            
            return elementoss;
        }


        //Creo las preguntas y bloques
        //var incidencia1 = new incidencia("Temperatura Alta", "05/05/19", 1, 0);
        //var incidencia2 = new incidencia("Limpieza", "02/05/19", 1, 1);
        //var incidencia3 = new incidencia("Error Comida", "20/04/19", 1, 1);
        //var incidencia4 = new incidencia("Mobiliario", "02/04/19", 1, 1);
        //var incidencia5 = new incidencia("Horario", "15/03/19", 1, 1);
        //var incidencia6 = new incidencia("Comida Alegria", "13/03/19", 1, 1);

        $scope.elementos = getIncidencias();
        console.log('pp');

        console.log(getIncidencias());
        console.log($scope.elementos);
        $('#tablaincidentes').click(function () {
            location.reload();
        });

    };

    app.controller("seguimientoquejasController", seguimientoquejasController);

}());