

(function () {

    var app = angular.module("tfgSanCarlos");

    var serviciosController = function ($scope) {

        //Cuando cambia alguna "select" comprueba si puede activar el boton de enviar
        $(document).ready(function () {
            $("select").change(function () {
                var ServicioSeleccionado = $("#ServicioSeleccionado").val();
                console.log(ServicioSeleccionado);
                if (ServicioSeleccionado == "Peluqueria") {
                    document.getElementById("bloquePeluqueria").style.display = "block";
                    document.getElementById("bloqueBiblioteca").style.display = "none";
                    document.getElementById("bloqueQuiosco").style.display = "none";
                    document.getElementById("bloqueAsistencia").style.display = "none";
                    document.getElementById("bloqueVoluntariado").style.display = "none";
                    document.getElementById("bloqueDieta").style.display = "none";
                }
                if (ServicioSeleccionado == "Biblioteca") {
                    document.getElementById("bloquePeluqueria").style.display = "none";
                    document.getElementById("bloqueBiblioteca").style.display = "block";
                    document.getElementById("bloqueQuiosco").style.display = "none";
                    document.getElementById("bloqueAsistencia").style.display = "none";
                    document.getElementById("bloqueVoluntariado").style.display = "none";
                    document.getElementById("bloqueDieta").style.display = "none";
                }
                if (ServicioSeleccionado == "Asistencia Religiosa") {
                    document.getElementById("bloquePeluqueria").style.display = "none";
                    document.getElementById("bloqueBiblioteca").style.display = "none";
                    document.getElementById("bloqueQuiosco").style.display = "none";
                    document.getElementById("bloqueAsistencia").style.display = "block";
                    document.getElementById("bloqueVoluntariado").style.display = "none";
                    document.getElementById("bloqueDieta").style.display = "none";
                }
                if (ServicioSeleccionado == "Voluntariado") {
                    document.getElementById("bloquePeluqueria").style.display = "none";
                    document.getElementById("bloqueBiblioteca").style.display = "none";
                    document.getElementById("bloqueQuiosco").style.display = "none";
                    document.getElementById("bloqueAsistencia").style.display = "none";
                    document.getElementById("bloqueVoluntariado").style.display = "block";
                    document.getElementById("bloqueDieta").style.display = "none";
                }
                if (ServicioSeleccionado == "Quiosco") {
                    document.getElementById("bloquePeluqueria").style.display = "none";
                    document.getElementById("bloqueBiblioteca").style.display = "none";
                    document.getElementById("bloqueQuiosco").style.display = "block";
                    document.getElementById("bloqueAsistencia").style.display = "none";
                    document.getElementById("bloqueVoluntariado").style.display = "none";
                    document.getElementById("bloqueDieta").style.display = "none";
                }
                if (ServicioSeleccionado == "Dieta") {
                    document.getElementById("bloquePeluqueria").style.display = "none";
                    document.getElementById("bloqueBiblioteca").style.display = "none";
                    document.getElementById("bloqueQuiosco").style.display = "none";
                    document.getElementById("bloqueAsistencia").style.display = "none";
                    document.getElementById("bloqueVoluntariado").style.display = "none";
                    document.getElementById("bloqueDieta").style.display = "block";
                }

            });
        });

    };

    app.controller("serviciosController", serviciosController);

}());