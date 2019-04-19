(function () {

    var app = angular.module("tfgSanCarlos");

    var quejasController = function ($scope) {

        var pregunta = function (titulo,id, ...opciones) {
            this.titulo = titulo;
            this.opciones = opciones;
            this.id=id;
        }
        var bloque = function (index,supertitulo, ...preguntas) {
            this.supertitulo = supertitulo;
            this.preguntas = preguntas;
            this.index = index;
        }
        var a1 = new pregunta("titulo1","11", "o10", "o20", "Otro");
        var a2 = new pregunta("titulo2", "12", "o11", "o21", "Otro");
        var a3 = new pregunta("titulo3", "13", "o12", "o22", "Otro");
        var i1 = new pregunta("titulo6", "21", "o10", "o20", "Otro");
        var i2 = new pregunta("titulo7", "22", "o11", "o21", "Otro");
        var i3 = new pregunta("titulo8", "23", "o12", "o22", "Otro");
        var c1 = new pregunta("titulo6", "31", "o10", "o20", "Otro");
        var c2 = new pregunta("titulo7", "32", "o11", "o21", "Otro");
        var c3 = new pregunta("titulo8", "33", "o12", "o22", "Otro");

        var bloque1 = new bloque(1,"Atención",a1, a2, a3);
        var bloque2 = new bloque(2, "Instalaciones", i1, i2, i3);
        var bloque3 = new bloque(3, "Comida", c1, c2, c3);

        $scope.elementos = [bloque1, bloque2,bloque3];

        $scope.togglepreguntas = function (index, bloqueindex) {
            var nombreclase = "preguntas" + bloqueindex + index;
            var x = document.getElementsByClassName(nombreclase);
            for (var i = 0; i < 4; i++) {
                for (var j = 0; j < 4; j++) {
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
            for (var i = 0; i < 4; i++) {
                var nombreresto = "opciones" + bloqueindex + i;
                var y = document.getElementsByClassName(nombreresto);
                try { y[0].style.display = "none"; }
                catch(err){}
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
            alert("Ha sido enviada su queja, lo solucionaremos lo más pronto posible" );
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

    };

    app.controller("quejasController", quejasController);

}());


   

