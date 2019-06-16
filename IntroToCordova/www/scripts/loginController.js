(function () {

    var app = angular.module("tfgSanCarlos");

    var loginController = function ($scope) {

        //Comprueba si un string contiene numeros
        $scope.hasNumber = function (myString) {
            return /\d/.test(myString);
        }

        //Funcion para  comprobar credenciales y guardar en memoria
        $scope.logInSend = function () {
            
            var Area = $("#Area").val();
            var Perfil = $("#Perfil").val();
            var Apellido = $("#Apellido").val();
            var Hab = $("#Hab").val();
            var Genero = $("#Genero").val();
            var fechaNac = $("#FechaNac").val();
            loginAjax(Area, Apellido, Hab, Genero, fechaNac, Perfil);
            var uid = localStorage.getItem('signedIn')
            if (uid != '' && uid != null && uid != undefined) {
                    localStorage.setItem('signedIn', 'Yes');
                    localStorage.setItem('Perfil', Perfil);
                    localStorage.setItem('Area', Area);
                    localStorage.setItem('Apellido', Apellido);
                    localStorage.setItem('Hab', Hab);
                    localStorage.setItem('Genero', Genero);
                    localStorage.setItem('FechaNac', fechaNac);
                    localStorage.setItem('notificationSetting', 'Yes');

                    window.location.href = "index.html#!/main";

            }
            
            //Hacer la parte de preguntar a la base de datos
            
        }

        function loginAjax(Area, Apellido, Hab, Genero, fechaNac, Perfil) {
            if (Area=="HOSPITALIZADO") {
                var datos = {"area": Area,"apellido":Apellido,"fechanac":fechaNac,"habitacion":Hab};
                $.ajax({
                    url: "http://138.100.72.88/hsc/usuarios/checklogin.php",
                    type: "POST",
                    dataType: 'json',
                    data: JSON.stringify(datos),
                    processData: false,
                    success: function (data) {
                        if (data.status == 'KO') {
                            alert("Los datos introducidos NO son correctos");
                        }
                        if (data.status == 'OK') {
                            console.log(data);
                            localStorage.setItem('user_id', data.data[0].user_id);
                            return true;
                        }
                        else {
                            console.log(data);
                        }
                    },
                    error: function (b) {
                        console.log(b);
                        alert("Se ha producido un error, compruebe su conexión a internet");
                    }
                });
            }
            if(Area=="URGENCIAS") {
                var datos = { "area": Area, "apellido": Apellido, "fechanac": fechaNac, "genero": Genero };
                $.ajax({
                    url: "http://138.100.72.88/hsc/usuarios/checklogin.php",
                    type: "POST",
                    dataType: 'json',
                    data: JSON.stringify(datos),
                    processData: false,
                    success: function (data) {
                        if (data.status == 'KO') {
                            alert("Los datos introducidos no son correctos");
                        }
                        if (data.status == 'OK') {
                            console.log(data);
                            localStorage.setItem('user_id', data.data[0].user_id);
                        }
                        else {
                            console.log(data);
                        }
                    }
                });
            }   

        }
            
        //Si ya esta logeado lo manda a Main
        $(document).ready(function () {
            if (localStorage.getItem('signedIn') == 'Yes') { window.location.href = "index.html#!/main";}
        });


        //Cuando cambia alguna "select" comprueba si puede activar el boton de enviar
        $(document).ready(function () {
            $("select").change(function () {
                if ($scope.validateForm()) {
                    document.getElementById("#boton-enviar").disabled = false;
                    document.getElementById("textTermina").style.display = "none";
                }

            });
        });

        //Cuando cambia alguna "input" comprueba si puede activar el boton de enviar
        $(document).ready(function () {
            $( "input").change(function () {
               
                if ($scope.validateForm()) {
                    document.getElementById("#boton-enviar").disabled = false;
                    document.getElementById("textTermina").style.display = "none";
                }
                if (!$scope.validateForm()) {
                    document.getElementById("#boton-enviar").disabled = true;
                    document.getElementById("textTermina").style.display = "block";
                }
            });
        });

        //Valida el formulario
        $scope.validateForm = function () {
            var Area = $("#Area").val();
            var Perfil = $("#Perfil").val();
            var Apellido = $("#Apellido").val();
            var Hab = $("#Hab").val();
            var Genero = $("#Genero").val();
            var FechaNac = $("#FechaNac").val();
            if (Area == "Area") { return false }
            if (Perfil == "Perfil") { return false }
            if (Apellido == "") { return false }
            if (FechaNac == "") { return false }
            if (Genero == "" && Hab == undefined) {  return false; }
            if (Genero == undefined && Hab == "") { return false; }
            if ($scope.hasNumber(Apellido)) { return false }
            if ($("#PoliticaPrivacidad").prop("checked") == false) { return false}
            else return true
        }
    };

    app.controller("loginController", loginController);

}());