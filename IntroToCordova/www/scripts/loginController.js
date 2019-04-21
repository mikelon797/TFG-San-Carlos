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
            var Aux = $("#Aux").val();
            //Hacer la parte de preguntar a la base de datos
            localStorage.setItem('signedIn', 'Yes');
            localStorage.setItem('Perfil', Perfil);
            localStorage.setItem('Area', Area);
            localStorage.setItem('Apellido', Apellido);
            localStorage.setItem('Hab', Hab);
            localStorage.setItem('Aux', Aux);
            window.location.href = "index.html#!/main";
        }
            
        //Si ya esta logeado lo manda a Main
        $(document).ready(function () {
            if (localStorage.getItem('signedIn') == 'Yes') { window.location.href = "index.html#!/main";}
        });


        //Cuando cambia alguna "select" comprueba si puede activar el boton de enviar
        $(document).ready(function () {
            $("select").change(function () {
                console.log("menterao")
                if ($scope.validateForm()) {
                    document.getElementById("#boton-enviar").disabled = false;
                    document.getElementById("textTermina").style.display = "none";
                }

            });
        });

        //Cuando cambia alguna "input" comprueba si puede activar el boton de enviar
        $(document).ready(function () {
            $( "input").change(function () {
                console.log("menterao")
                if ($scope.validateForm()) {
                    document.getElementById("#boton-enviar").disabled = false;
                    document.getElementById("textTermina").style.display = "none";
                }

            });
        });

        //Valida el formulario
        $scope.validateForm = function () {
            var Area = $("#Area").val();
            var Perfil = $("#Perfil").val();
            var Apellido = $("#Apellido").val();
            var Hab = $("#Hab").val();
            var Aux = $("#Aux").val();
            if (Area == "Area") { return false }
            if (Perfil == "Perfil") { return false }
            if (Apellido == ""  ) { return false }
            if (Aux == "" && Hab == "") { return false }
            if ($scope.hasNumber(Apellido)) { console.log("hey1"); return false }
            else return true
        }

        
        
        
    };

    app.controller("loginController", loginController);

}());