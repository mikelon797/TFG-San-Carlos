(function () {

    var app = angular.module("tfgSanCarlos");

    var encuestaController = function ($scope) {

        var pregunta = function (titulo,o1,o2,o3,o4) {
            this.titulo = titulo;
            this.opciones = [o1,o2,o3,o4]
        }
        var p1 = new pregunta("¿Qué le parecen nuestras instalaciones?", "Genial", "Bien", "Meh", "Mal");
        var p2 = new pregunta("¿Cúal es su opinión respecto a nuestro servicio?", "Genial", "Bien", "Meh", "Mal");
        var p3 = new pregunta("¿Qué opina usted de la cafetería?", "Genial", "Bien", "Meh", "Mal");
        var p4 = new pregunta("¿Cómo definiría la velocidad de atención?", "Genial", "Bien", "Meh", "Mal");
        var p5 = new pregunta("¿Que opina de la localización del hospital?", "Genial", "Bien", "Meh", "Mal");
        var p6 = new pregunta("¿Qué aspecto considera que debemos mejorar principalmente?", "Instalaciones", "Servicio", "Cafetería", "Velocidad");

        $scope.preguntas = [p1, p2, p3, p4,p5,p6];

        $scope.sendEncuesta = function () {
            var answer = "";
            for (i = 0; i < $scope.preguntas.length ; i++) {
                answer = answer + $("#select" + i).val();
            }
            console.log(answer);
            window.location.href = "index.html#!/main";
            $('modalId').modal('hide');
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
        }

        $scope.toggleConf = function () {
            var x = document.getElementsByClassName('confirmarencuesta');
            for (var i = 0, length = x.length; i < length; i++) {
                if (x[i].style.display === "none") {
                    x[i].style.display = "block";
                } else {
                    x[i].style.display = "none";
                }
            }
        }

    };

    app.controller("encuestaController", encuestaController);

}());