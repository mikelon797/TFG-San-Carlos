(function () {

    var app = angular.module("tfgSanCarlos");

    var encuestaController = function ($scope) {

        var pregunta = function (titulo,o1,o2,o3,o4) {
            this.titulo = titulo;
            this.opciones = [o1,o2,o3,o4]
        }
        var p1 = new pregunta("titulo1", "o10", "o20", "o30", "o40");
        var p2 = new pregunta("titulo2", "o11", "o21", "o31", "o41");
        var p3 = new pregunta("titulo3", "o12", "o22", "o32", "o42");
        var p4 = new pregunta("titulo4", "o13", "o23", "o33", "o43");
        var p5 = new pregunta("titulo5", "o13", "o23", "o33", "o43");
        var p6 = new pregunta("titulo4", "o13", "o23", "o33", "o43");

        $scope.preguntas = [p1, p2, p3, p4,p5,p6];

        $scope.sendEncuesta = function () {
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