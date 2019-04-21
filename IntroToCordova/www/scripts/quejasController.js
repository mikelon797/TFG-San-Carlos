(function () {

    var app = angular.module("tfgSanCarlos");

    var quejasController = function ($scope) {


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

        var bloque1 = new bloque(1, "Atención", a1, a2, a3);
        var bloque2 = new bloque(2, "Instalaciones", i1, i2, i3);
        var bloque3 = new bloque(3, "Comida", c1, c2, c3);

        //En esta variable de almacenan todos los bloques y preguntas
        $scope.elementos = [bloque1, bloque2, bloque3];

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
            //Añadir enviar base de datos
            window.location.href = "index.html#!/main";
            $('modalId').modal('hide');
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
        }

   
        //Cuando cambia alguna opción comprueba si puede activar el boton de enviar
        $(document).ready(function () {
            $("select").change(function () {
                //if ($scope.validateForm() == "otro") {
                //    //document.getElementById("textTermina").innerText = "Debe especificar la otra razon";
                //    //document.getElementById("textTermina").style.display = "block";
                //    document.getElementById("#boton-enviar").disabled = true;
                //}
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
                    //if ($("#select" + i + j).val() == "Otro") { if ($("#textOtro" + i + j).val()=="") return "otro" }
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


   

