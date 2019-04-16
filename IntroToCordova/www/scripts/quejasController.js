(function () {

    var app = angular.module("tfgSanCarlos");

    var quejasController = function ($scope) {

        var pregunta = function (titulo, ...opciones) {
            
            this.titulo = titulo;
            this.opciones = opciones
        }
        var bloque = function (supertitulo, ...preguntas) {
            this.supertitulo = supertitulo;
            this.preguntas = preguntas;
        }
        var p1 = new pregunta("titulo1", "o10", "o20", "otro1");
        var p2 = new pregunta("titulo2", "o11", "o21", "otro2");
        var p3 = new pregunta("titulo3", "o12", "o22", "otro3");
        var p4 = new pregunta("titulo4", "o13", "o23", "otro4");
        var q1 = new pregunta("titulo6", "o10", "o20", "otro1");
        var q2 = new pregunta("titulo7", "o11", "o21", "otro2");
        var q3 = new pregunta("titulo8", "o12", "o22", "otro3");

        var bloque1 = new bloque("supertitulo1",p1, p2, p3, p4);
        var bloque2 = new bloque("supertitulo2",q1, q2, q3);
        $scope.elementos = [bloque1, bloque2];


    };

    app.controller("quejasController", quejasController);

}());


    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    function myFunction2() {
        document.getElementById("myDropdown2").classList.toggle("show");
    }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
        if (!event.target.matches('.dropbtn')) {
            var x = document.getElementById("op11");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
            
        }
    }

