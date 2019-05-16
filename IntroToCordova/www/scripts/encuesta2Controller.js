(function () {

    var app = angular.module("tfgSanCarlos");

    var encuesta2Controller = function ($scope) {

        Survey.Survey.cssType = "bootstrap";

        var surveyJSON = { pages: [{ name: "page1", elements: [{ type: "rating", name: "Pregunta Nº 1", title: "¿Qué le parecen nuestras instalaciones?", isRequired: true, minRateDescription: "Mal", maxRateDescription: "Genial" }, { type: "rating", name: "question1", title: "¿Cúal es su opinión respecto a nuestro servicio?", isRequired: true, minRateDescription: "Mal", maxRateDescription: "Genial" }, { type: "rating", name: "question2", title: "¿Qué opina usted de la cafetería?", isRequired: true, minRateDescription: "Mal", maxRateDescription: "Genial" }, { type: "rating", name: "question3", title: "¿Cómo definiría la velocidad de atención?", isRequired: true, minRateDescription: "Mal", maxRateDescription: "Genial" }] }, { name: "page2", elements: [{ type: "checkbox", name: "question4", title: "¿Se ha leido usted lo anterior?", choices: [{ value: "item1", text: "Sí" }, { value: "item2", text: "No" }, { value: "item3", text: "¿Qué?" }] }] }] }

        function sendDataToServer(survey) {
            survey.sendResult('18b64521-dced-4f6f-a0a4-08de1edc0faf');
            alert("The results are:" + JSON.stringify(survey.data));

        }

        var survey = new Survey.Model(surveyJSON);
        $("#surveyContainer").Survey({
            model: survey,
            onComplete: sendDataToServer
        });

    };
        app.controller("encuesta2Controller", encuesta2Controller);

}());

    
   