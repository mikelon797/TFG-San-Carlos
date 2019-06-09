(function () {

    var app = angular.module("tfgSanCarlos");

    var ajustesController = function ($scope) {

        //En el caso de que no este "logeado" el usuario el envia al LogIn
        $(document).ready(function () {
            if (localStorage.getItem('signedIn') != 'Yes') { window.location.href = "index.html#!/login"; }
        });
        
     
        //Esta función se encarga de hacer desaparecer y aparecer los DETALLES de los apartados
        $scope.toggleajustes = function (index) {
            var nombreclase = "ajustes" + index;
            var x = document.getElementsByClassName(nombreclase);
            try {
                for (var i = 0, length = x.length; i < length; i++) {
                    if (x[i].style.display === "none") {
                        x[i].style.display = "block";
                    } else {
                        x[i].style.display = "none";
                    }}}
            catch(err){}
        }

        //Se encarga de CERRAR SESIÓN
        $scope.logout = function () {
            localStorage.setItem('signedIn', 'No');
            localStorage.setItem('Perfil', '');
            localStorage.setItem('Area', '');
            localStorage.setItem('Apellido', '');
            localStorage.setItem('Hab', '');
            localStorage.setItem('Aux', '');
            window.location.href = "index.html";
        }

       //Coje informacion de la memoría
        $scope.get = function (par) {
            if (par == 'apellido') return localStorage.getItem('Apellido');
            else if (par == 'loca') return localStorage.getItem('Area');
            else if (par == 'perfil') return localStorage.getItem('Perfil');
        }

        //Envia el Reporte a la base de datos
        $scope.sendReport = function () {
            //Hacer parte de BBDD
            console.log($("#textReport").val());
            window.location.href = "index.html#!/main";
            $('modalId').modal('hide');
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
        }

        $(document).ready(function () {
            $("input").change(function () {
                if ($("#NotificationCheckbox").prop("checked") == false) {
                    localStorage.setItem('notificationSetting', 'No');
                }
                if ($("#NotificationCheckbox").prop("checked") == true) {
                    localStorage.setItem('notificationSetting', 'Yes');
                }
            });
        });

        //$(document).ready(function () {
        //    if (localStorage.getItem('notificationSetting') == 'Yes') {
        //        document.getElementById("PoliticaPrivacidad").checked = true;
        //    }
        //    if (localStorage.getItem('notificationSetting') == 'No') {
        //        document.getElementById("PoliticaPrivacidad").checked = false;
        //    }
        //});
               
                
            


    };

    app.controller("ajustesController", ajustesController);

}());