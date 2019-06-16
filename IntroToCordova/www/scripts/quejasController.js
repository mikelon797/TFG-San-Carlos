(function () {

    var app = angular.module("tfgSanCarlos");

    var quejasController = function ($scope) {

        //En el caso de que no este "logeado" el usuario el envia al LogIn
        $(document).ready(function () {
            if (localStorage.getItem('signedIn') != 'Yes') { window.location.href = "index.html#!/login"; }
        });

        //Clase Pregunta
        var pregunta = function (titulo, id, ...opciones) {
            this.titulo = titulo;
            this.opciones = opciones;
            this.id = id;
        }
        //Clase Bloque (de preguntas)
        var bloque = function (index, supertitulo, ...preguntas) {
            this.supertitulo = supertitulo;
            this.preguntas = preguntas;
            this.index = index;
        }

        function sendincidentAjax(user, hosporeme, titulo, otro) {
            var datos = { "userid": user, "hosporeme": hosporeme, "title": titulo, "other": otro };
            console.log(datos);
                $.ajax({
                    url: "http://138.100.72.88/hsc/incidents/sendincident.php",
                    type: "POST",
                    dataType: 'json',
                    data: JSON.stringify(datos),
                    processData: false,
                    success: function (data) {
                        if (data.status == 'KO') {
                            alert("Ya se ha enviado correctamente el incidente");
                        }
                        if (data.status == 'OK') {
                            console.log(data);
                            return true;
                        }
                        else {
                            console.log(data);
                        }
                    }
                });
        }

        //Creo las preguntas y bloques
        var a1 = new pregunta("Medicamentos", "11", "o10", "o20", "Otro");
        var a2 = new pregunta("Asistencia", "12", "o11", "o21", "Otro");
        var a3 = new pregunta("Horarios", "13", "o12", "o22", "Otro");
        var i1 = new pregunta("Temperatura", "21", "Subir la temperatura", "Bajar la temperatura", "Otro");
        var i2 = new pregunta("Limpieza", "22", "o11", "o21", "Otro");
        var i3 = new pregunta("Mobiliario", "23", "o12", "o22", "Otro");
        var c1 = new pregunta("Calidad", "31", "o10", "o20", "Otro");
        var c2 = new pregunta("Alergias", "32", "o11", "o21", "Otro");
        var c3 = new pregunta("Cantidad", "33", "o12", "o22", "Otro");
        var o1 = new pregunta("Otra incidencia", "41", "Otro");

        var bloque1 = new bloque(1, "Atención", a1, a2, a3);
        var bloque2 = new bloque(2, "Instalaciones", i1, i2, i3);
        var bloque3 = new bloque(3, "Comida", c1, c2, c3);
        var bloque4 = new bloque(4, "Otra incidencia", o1);

        var bloque11 = new bloque(1, "Atención Urgencias", a1, a2, a3);
        var bloque22 = new bloque(2, "Instalaciones Urgencias", i1, i2, i3);
        var bloque44 = new bloque(4, "Otra incidencia", o1);

        if (localStorage.getItem('Area') == 'HOSPITALIZADO') {
            //En esta variable de almacenan todos los bloques y preguntas de hospitalizados
            $scope.elementos = [bloque1, bloque2, bloque3, bloque4];
        }
        if (localStorage.getItem('Area') == 'URGENCIAS') {
            //En esta variable de almacenan todos los bloques y preguntas  de urgencias
            $scope.elementos = [bloque11, bloque22, bloque44];
        }
       
        

        //Esta función se encarga de hacer desaparecer y aparecer las PREGUNTAS
        $scope.togglepreguntas = function (index, bloqueindex) {
            var nombreclase = "preguntas" + bloqueindex + index;
            var x = document.getElementsByClassName(nombreclase);
            for (var i = 0; i < $scope.elementos.length; i++) {
                for (var j = 0; j < 5; j++) {
                    var nombreresto = "preguntas" + j + i;
                    var y = document.getElementsByClassName(nombreresto);
                    try { y[0].style.display = "none"; }
                    catch (err) { }
                }

            }
            for (var i = 0, length = x.length; i < length; i++) {
                if (x[i].style.display === "none") {
                    x[i].style.display = "block";
                } else {
                    x[i].style.display = "none";
                }
            }
        }

        //Esta función se encarga de hacer desaparecer y aparecer las OPCIONES de las preguntas
        $scope.toggleopciones = function (index, bloqueindex) {
            var nombreclase = "opciones" + bloqueindex + index;
            var x = document.getElementsByClassName(nombreclase);
            for (var i = 0; i < 5; i++) {
                var nombreresto = "opciones" + bloqueindex + i;
                var y = document.getElementsByClassName(nombreresto);
                try { y[0].style.display = "none"; }
                catch (err) { }
            }
            for (var i = 0, length = x.length; i < length; i++) {
                if (x[i].style.display === "none") {
                    x[i].style.display = "block";
                } else {
                    x[i].style.display = "none";
                }
            }
        }

        //Se encarga de enviar la queja, redireccionar y quitar el "fade"
        $scope.sendQueja = function () {
            var user = localStorage.getItem('user_id');
            if (localStorage.getItem('Area') == 'HOSPITALIZADO') { var hosporeme = 0; }
            if (localStorage.getItem('Area') == 'URGENCIAS') { var hosporeme = 1; }
            var titulo = $scope.selectedIncident; 
            var otro = '';
            if (titulo.includes('Otro')) { console.log("tiene otro"); var otro = $scope.textOtro;}
            sendincidentAjax(user, hosporeme, titulo, otro);
            //Añadir enviar base de datos
            window.location.href = "index.html#!/main";
            $('modalId').modal('hide');
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
        }

       
        $(document).ready(function () {
            $('body').delegate('.textareaotro', 'keyup change', function () {
                $scope.textOtro = this.value;
            });
        });
        
   
        //Cuando cambia alguna opción comprueba si puede activar el boton de enviar
        $(document).ready(function () {
            $("select").change(function () {
                $scope.selectedIncident = this.value;
                console.log($scope.selectedIncident);
                if ($scope.validateForm()) {
                    document.getElementById("#boton-enviar").disabled = false;
                    document.getElementById("textTermina").style.display = "none";
                }
                
            });
            

        });
        
        //Valida que se haya elejido alguna queja
        $scope.validateForm = function () {
            var count = 0;
            for (var i = 0; i < $scope.elementos.length + 1; i++) {
                for (var j = 0; j < 5; j++) {
                    if ($("#select" + i + j).val() != "") { count = count + 1; }
                }
            }
            if (count > 0) { return true; }
            else { return false }
        }

        //Quita la primera opcion varia de las opciones
        $(document).ready(function () {
            for (var i = 0; i < $scope.elementos.length+1; i++) {
                for (var j = 0; j < 5; j++) {

                    try { $("#select"+i+j).find("option").eq(0).remove(); }
                    catch (err) { }
                }
            }
        });
    

    };

    app.controller("quejasController", quejasController);

}());


   

