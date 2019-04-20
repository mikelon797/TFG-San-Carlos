(function () {

    var app = angular.module("tfgSanCarlos");

    var quejasController = function ($scope) {

        var pregunta = function (titulo, id, ...opciones) {
            this.titulo = titulo;
            this.opciones = opciones;
            this.id = id;
        }
        var bloque = function (index, supertitulo, ...preguntas) {
            this.supertitulo = supertitulo;
            this.preguntas = preguntas;
            this.index = index;
        }
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

        $scope.elementos = [bloque1, bloque2, bloque3];

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
        $scope.sendQueja = function () {
            window.location.href = "index.html#!/main";
            $('modalId').modal('hide');
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
        }

        $scope.toggleConf = function () {
            var x = document.getElementsByClassName('confirmarqueja');
            for (var i = 0, length = x.length; i < length; i++) {
                if (x[i].style.display === "none") {
                    x[i].style.display = "block";
                } else {
                    x[i].style.display = "none";
                }
            }
        }

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


   

