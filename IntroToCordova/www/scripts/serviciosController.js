

(function () {

    var app = angular.module("tfgSanCarlos");

    var serviciosController = function ($scope) {

        //En el caso de que no este "logeado" el usuario el envia al LogIn
        $(document).ready(function () {
            if (localStorage.getItem('signedIn') != 'Yes') { window.location.href = "index.html#!/login"; }
        });

        //Cuando cambia alguna "select" comprueba si puede activar el boton de enviar
        $(document).ready(function () {
            $("select").change(function () {
                var ServicioSeleccionado = $("#ServicioSeleccionado").val();

                if (ServicioSeleccionado == "Peluqueria") {
                    document.getElementById("bloquePeluqueria").style.display = "block";
                    document.getElementById("bloqueBiblioteca").style.display = "none";
                    document.getElementById("bloqueQuiosco").style.display = "none";
                    document.getElementById("bloqueAsistencia").style.display = "none";
                    document.getElementById("bloqueVoluntariado").style.display = "none";
                    document.getElementById("bloqueDieta").style.display = "none";
                    document.getElementById("bloqueEnviar").style.display = "block";
                }
                if (ServicioSeleccionado == "Biblioteca") {
                    document.getElementById("bloquePeluqueria").style.display = "none";
                    document.getElementById("bloqueBiblioteca").style.display = "block";
                    document.getElementById("bloqueQuiosco").style.display = "none";
                    document.getElementById("bloqueAsistencia").style.display = "none";
                    document.getElementById("bloqueVoluntariado").style.display = "none";
                    document.getElementById("bloqueDieta").style.display = "none";
                    document.getElementById("bloqueEnviar").style.display = "block";

                }
                if (ServicioSeleccionado == "Asistencia Religiosa") {
                    document.getElementById("bloquePeluqueria").style.display = "none";
                    document.getElementById("bloqueBiblioteca").style.display = "none";
                    document.getElementById("bloqueQuiosco").style.display = "none";
                    document.getElementById("bloqueAsistencia").style.display = "block";
                    document.getElementById("bloqueVoluntariado").style.display = "none";
                    document.getElementById("bloqueDieta").style.display = "none";
                    document.getElementById("bloqueEnviar").style.display = "block";

                }
                if (ServicioSeleccionado == "Voluntariado") {
                    document.getElementById("bloquePeluqueria").style.display = "none";
                    document.getElementById("bloqueBiblioteca").style.display = "none";
                    document.getElementById("bloqueQuiosco").style.display = "none";
                    document.getElementById("bloqueAsistencia").style.display = "none";
                    document.getElementById("bloqueVoluntariado").style.display = "block";
                    document.getElementById("bloqueDieta").style.display = "none";
                    document.getElementById("bloqueEnviar").style.display = "block";

                }
                if (ServicioSeleccionado == "Quiosco") {
                    document.getElementById("bloquePeluqueria").style.display = "none";
                    document.getElementById("bloqueBiblioteca").style.display = "none";
                    document.getElementById("bloqueQuiosco").style.display = "block";
                    document.getElementById("bloqueAsistencia").style.display = "none";
                    document.getElementById("bloqueVoluntariado").style.display = "none";
                    document.getElementById("bloqueDieta").style.display = "none";
                    document.getElementById("bloqueEnviar").style.display = "block";

                }
                if (ServicioSeleccionado == "Dieta") {
                    document.getElementById("bloquePeluqueria").style.display = "none";
                    document.getElementById("bloqueBiblioteca").style.display = "none";
                    document.getElementById("bloqueQuiosco").style.display = "none";
                    document.getElementById("bloqueAsistencia").style.display = "none";
                    document.getElementById("bloqueVoluntariado").style.display = "none";
                    document.getElementById("bloqueDieta").style.display = "block";
                    document.getElementById("bloqueEnviar").style.display = "block";

                }

                if ($("#DietaElegida").val() == 0) {
                    document.getElementById("opcionesDieta0").style.display = "flex";
                    document.getElementById("opcionesDieta1").style.display = "none";
                }
                if ($("#DietaElegida").val() == 1) {
                    document.getElementById("opcionesDieta0").style.display = "none";
                    document.getElementById("opcionesDieta1").style.display = "flex";
                }

                for (var i = 0; i < $scope.elementos.length; i++) {
                    if ($("#DietaElegida").val() == i) {
                        if (($("#OpcionElegida" + (i )).val()) != "") {
                            $scope.opcionElegida = $("#OpcionElegida" + (i)).val();
                            $scope.dietaElegida = $("#DietaElegida").val();
                        }
                        
                    }
                }

                
            });
        });

        //Clase opcion
        var opcion = function (index,nombreOpcion, info) {
            this.nombreOpcion = nombreOpcion;
            this.info = info;
            this.index = index;
        }
        //Clase dieta
        var dieta = function (index,nombreDieta,info, ...opciones) {
            this.index = index;
            this.nombreDieta = nombreDieta;
            this.info = info;
            this.opciones = opciones;
        }
        //Creo las opciones y dieta
        var m1 = new opcion(0,"Vegetariana", "Quinoa <br/> Tofu");
        var m2 = new opcion(1,"Cetogenica", "Aguacate <br/> Chuletón");
        var m3 = new opcion(2,"Paleo", "Conejo <br/> Patata");
        var p1 = new opcion(0,"Dieta blanca", "Arroz  <br/> Pollo");
        var p2 = new opcion(1,"Puré", "Puré verduras  <br/> Yogurt natural")

        var dietaNone = new dieta(0, "","",new opcion("", ""));
        var dieta1 = new dieta(0,"Modernez", "",m1, m2,m3);
        var dieta2 = new dieta(1,"Persona mayor","", p1, p2);

        //En esta variable de almacenan todos los bloques y preguntas
        $scope.elementos = [dieta1, dieta2];

        


    };

    app.controller("serviciosController", serviciosController);

}());