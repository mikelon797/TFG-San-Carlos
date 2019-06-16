

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
                    document.getElementById("#boton-enviar").disabled = false;
                    document.getElementById("textTermina").style.display = "none";
                }
                if (ServicioSeleccionado == "Biblioteca") {
                    document.getElementById("bloquePeluqueria").style.display = "none";
                    document.getElementById("bloqueBiblioteca").style.display = "block";
                    document.getElementById("bloqueQuiosco").style.display = "none";
                    document.getElementById("bloqueAsistencia").style.display = "none";
                    document.getElementById("bloqueVoluntariado").style.display = "none";
                    document.getElementById("bloqueDieta").style.display = "none";
                    document.getElementById("bloqueEnviar").style.display = "block";
                    document.getElementById("#boton-enviar").disabled = false;
                    document.getElementById("textTermina").style.display = "none";

                }
                if (ServicioSeleccionado == "Asistencia Religiosa") {
                    document.getElementById("bloquePeluqueria").style.display = "none";
                    document.getElementById("bloqueBiblioteca").style.display = "none";
                    document.getElementById("bloqueQuiosco").style.display = "none";
                    document.getElementById("bloqueAsistencia").style.display = "block";
                    document.getElementById("bloqueVoluntariado").style.display = "none";
                    document.getElementById("bloqueDieta").style.display = "none";
                    document.getElementById("bloqueEnviar").style.display = "block";
                    document.getElementById("#boton-enviar").disabled = false;
                    document.getElementById("textTermina").style.display = "none";

                }
                if (ServicioSeleccionado == "Voluntariado") {
                    document.getElementById("bloquePeluqueria").style.display = "none";
                    document.getElementById("bloqueBiblioteca").style.display = "none";
                    document.getElementById("bloqueQuiosco").style.display = "none";
                    document.getElementById("bloqueAsistencia").style.display = "none";
                    document.getElementById("bloqueVoluntariado").style.display = "block";
                    document.getElementById("bloqueDieta").style.display = "none";
                    document.getElementById("bloqueEnviar").style.display = "block";
                    document.getElementById("#boton-enviar").disabled = false;
                    document.getElementById("textTermina").style.display = "none";

                }
                if (ServicioSeleccionado == "Quiosco") {
                    document.getElementById("bloquePeluqueria").style.display = "none";
                    document.getElementById("bloqueBiblioteca").style.display = "none";
                    document.getElementById("bloqueQuiosco").style.display = "block";
                    document.getElementById("bloqueAsistencia").style.display = "none";
                    document.getElementById("bloqueVoluntariado").style.display = "none";
                    document.getElementById("bloqueDieta").style.display = "none";
                    document.getElementById("bloqueEnviar").style.display = "block";
                    document.getElementById("#boton-enviar").disabled = false;
                    document.getElementById("textTermina").style.display = "none";

                }
                if (ServicioSeleccionado == "Dieta") {
                    document.getElementById("bloquePeluqueria").style.display = "none";
                    document.getElementById("bloqueBiblioteca").style.display = "none";
                    document.getElementById("bloqueQuiosco").style.display = "none";
                    document.getElementById("bloqueAsistencia").style.display = "none";
                    document.getElementById("bloqueVoluntariado").style.display = "none";
                    document.getElementById("bloqueDieta").style.display = "block";
                    document.getElementById("bloqueEnviar").style.display = "block";
                    document.getElementById("#boton-enviar").disabled = false;
                    document.getElementById("textTermina").style.display = "none";

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

        function sendServiceAjax(user, servicio, genero, dieta, texto) {
            //data '{"userid":"9","type_of_service":"Biblioteca","genre_library":"Historia", "text_info": "Texto 
            if (servicio == 'Biblioteca') {
                var datos = { "userid": user, "type_of_service": servicio, "genre_library": genero, "text_info": texto };
            }
            else if (servicio == 'Dieta') {
                var datos = { "userid": user, "type_of_service": servicio, "option_diet": dieta, "text_info": texto };
            }
            else {
                var datos = { "userid": user, "type_of_service": servicio,  "text_info": texto};
            }

            console.log(datos);
            $.ajax({
                url: "http://138.100.72.88/hsc/services/sendservice.php",
                type: "POST",
                dataType: 'json',
                data: JSON.stringify(datos),
                processData: false,
                success: function (data) {
                    if (data.status == 'KO') {
                        alert("Ya se ha enviado este incidente");
                    }
                    if (data.status == 'OK') {
                        console.log(data);
                        return true;
                    }
                    else {
                        console.log(data);
                    }
                }
            });
        }

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
        var dieta1 = new dieta(0,"Jovenes", "",m1, m2,m3);
        var dieta2 = new dieta(1,"Persona mayor","", p1, p2);

        //En esta variable de almacenan todos los bloques y opciones
        $scope.elementos = [dieta1, dieta2];

        $scope.sendService = function () {
            var servicio = $("#ServicioSeleccionado").val();
            var user = localStorage.getItem('user_id');
            var dieta = '';
            var genero = '';
            if ($("#DietaElegida").val() == 0) { dieta = $("#OpcionElegida0").val()}
            if ($("#DietaElegida").val() == 1) { dieta = $("#OpcionElegida1").val() }
            if ($("#ServicioSeleccionado").val() == 'Biblioteca') { genero = $("#Genero").val() }
            var texto = $scope.textOtro;
            sendServiceAjax(user, servicio, genero,dieta, texto);
            console.log($("#ServicioSeleccionado").val());
            //Hacer parte de enviar a la base de datos
            window.location.href = "index.html#!/main";
            $('modalId').modal('hide');
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
        }

        $(document).ready(function () {
            $('body').delegate('.textareaotro', 'keyup change', function () {
                $scope.textOtro = this.value;
            });
        });


    };

    app.controller("serviciosController", serviciosController);

}());