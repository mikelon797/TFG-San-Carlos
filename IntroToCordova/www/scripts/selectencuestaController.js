(function () {

    var app = angular.module("tfgSanCarlos");

    var selectencuestaController = function ($scope) {

        //Clase Pregunta
        var encuesta = function (titulo, json) {
            this.titulo = titulo;
            this.json = JSON.stringify(json);
        }
        
        var surveyJSON = {
            pages: [{ name: "page1", elements: [{ type: "rating", name: "Pregunta Nº 1", title: "¿Qué le parecen nuestras instalaciones?", isRequired: true, minRateDescription: "Mal", maxRateDescription: "Genial" }, { type: "rating", name: "question1", title: "¿Cúal es su opinión respecto a nuestro servicio?", isRequired: true, minRateDescription: "Mal", maxRateDescription: "Genial" }, { type: "rating", name: "question2", title: "¿Qué opina usted de la cafetería?", isRequired: true, minRateDescription: "Mal", maxRateDescription: "Genial" }, { type: "rating", name: "question3", title: "¿Cómo definiría la velocidad de atención?", isRequired: true, minRateDescription: "Mal", maxRateDescription: "Genial" }] }, { name: "page2", elements: [{ type: "checkbox", name: "question4", title: "¿Se ha leido usted lo anterior?", choices: [{ value: "item1", text: "Sí" }, { value: "item2", text: "No" }, { value: "item3", text: "¿Qué?" }] }] }], completedHtml: "<h4>Muchas Gracias por compartir su opinión</h4>" };
        var surveyJSON2 = { pages: [{ name: "page1", elements: [{ type: "rating", name: "Pregunta Nº 1", title: "¿Qué opinión le merecen nuestras instalaciones? (v2)", isRequired: true, minRateDescription: "Mal", maxRateDescription: "Genial" }, { type: "rating", name: "question1", title: "¿Cúal es su opinión respecto a nuestro servicio?", isRequired: true, minRateDescription: "Mal", maxRateDescription: "Genial" }, { type: "rating", name: "question2", title: "¿Qué opina usted de la cafetería?", isRequired: true, minRateDescription: "Mal", maxRateDescription: "Genial" }, { type: "rating", name: "question3", title: "¿Cómo definiría la velocidad de atención?", isRequired: true, minRateDescription: "Mal", maxRateDescription: "Genial" }] }, { name: "page2", elements: [{ type: "checkbox", name: "question4", title: "¿Se ha leido usted lo anterior?", choices: [{ value: "Si", text: "Sí" }, "No", { value: "Que", text: "¿Qué?" }] }] }], completedHtml: "<h4>Muchas gracias por compartir su opinión</h4>" };
        var surveyJSONselected = null;
        //Creo las preguntas y bloques
        var encuesta1 = new encuesta("Encuesta1", surveyJSON);
        var encuesta2 = new encuesta("Encuesta2", surveyJSON2);
        $scope.elementos = [encuesta1, encuesta2];


        //En el caso de que no este "logeado" el usuario el envia al LogIn
        $(document).ready(function () {
            if (localStorage.getItem('signedIn') != 'Yes') { window.location.href = "index.html#!/login"; }
        });


        Survey.Survey.cssType = "bootstrap";
        
             
        function sendDataToServer(survey) {
            survey.sendResult('18b64521-dced-4f6f-a0a4-08de1edc0faf');
            alert("The results are:" + JSON.stringify(survey.data));
        }
        

        //var survey = new Survey.Model(surveyJSONsent);
        //surveyJSONselected = surveyJSONsent;
        $scope.displaySurvey = function (survey) {
            var surveyJSONsent = JSON.parse(survey);
            document.getElementById("surveyContainer").style.display = "block";
            document.getElementById("selectencuesta").style.display = "none";
            document.getElementById("titulo").style.display = "none";


            var survey = new Survey.Model(surveyJSONsent);

            $("#surveyContainer").Survey({
                model: survey,
                onComplete: sendDataToServer
            });
        }

        

    };

    app.controller("selectencuestaController", selectencuestaController);

}());