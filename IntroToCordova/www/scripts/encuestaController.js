(function () {

    var app = angular.module("tfgSanCarlos");

    var encuestaController = function ($scope) {

        var pregunta = function (titulo,o1,o2,o3,o4) {
            this.titulo = titulo;
            this.opciones = [o1,o2,o3,o4]
        }
        var p1 = new pregunta("tit1", "o10", "o20", "o30", "o40");
        var p2 = new pregunta("tit2", "o11", "o21", "o31", "o41");
        var p3 = new pregunta("tit3", "o12", "o22", "o32", "o42");
        var p4 = new pregunta("tit4", "o13", "o23", "o33", "o43");
        
         $scope.preguntas = [p1, p2, p3, p4];

    };

    app.controller("encuestaController", encuestaController);

}());