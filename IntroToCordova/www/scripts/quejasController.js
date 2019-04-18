(function () {

    var app = angular.module("tfgSanCarlos");

    var quejasController = function ($scope) {

        var pregunta = function (titulo, ...opciones) {
            
            this.titulo = titulo;
            this.opciones = opciones
        }
        var bloque = function (index,supertitulo, ...preguntas) {
            this.supertitulo = supertitulo;
            this.preguntas = preguntas;
            this.index = index;
        }
        var p1 = new pregunta("titulo1", "o10", "o20", "otro1");
        var p2 = new pregunta("titulo2", "o11", "o21", "otro2");
        var p3 = new pregunta("titulo3", "o12", "o22", "otro3");
        var p4 = new pregunta("titulo4", "o13", "o23", "otro4");
        var q1 = new pregunta("titulo6", "o10", "o20", "otro1");
        var q2 = new pregunta("titulo7", "o11", "o21", "otro2");
        var q3 = new pregunta("titulo8", "o12", "o22", "otro3");

        var bloque1 = new bloque(1,"supertitulo1",p1, p2, p3, p4);
        var bloque2 = new bloque(2,"supertitulo2",q1, q2, q3);
        $scope.elementos = [bloque1, bloque2];

        $scope.togglepreguntas = function (index) {
            console.log(index)
            var nombreclase = "preguntas" + index;
            var x = document.getElementsByClassName(nombreclase);
            for (var i = 0, length = x.length; i < length; i++) {
                if (x[i].style.display === "none") {
                    x[i].style.display = "block";
                } else {
                    x[i].style.display = "none";
                }
            }
        }
        $scope.toggleopciones = function (index) {
            console.log(index);
            var nombreclase = "opciones" + index;
            var x = document.getElementsByClassName(nombreclase);
            for (var i = 0, length = x.length; i < length; i++) {
                if (x[i].style.display === "none") {
                    x[i].style.display = "block";
                } else {
                    x[i].style.display = "none";
                }
            }
        }

    };

    app.controller("quejasController", quejasController);

}());


   

