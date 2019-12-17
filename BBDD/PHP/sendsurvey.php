<?php

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/dbclass.php';

include_once '../class.usuarios.php';
include_once '../class.surveys.php';

$survey = new surveys();

$data = json_decode(file_get_contents("php://input"));

$survey->user_id = $data->userid;
$survey->survey_model = $data->survey_model;
$survey->answer  = $data->answer;
$fec = date('Y-m-d H:i:s');
$survey->date_survey   = $fec;

$exp["status"] = "KO";
$res = $survey->insert();
#
$exp["status"] = "OK";
$exp["survey_id"] = $survey->survey_id;
#
echo json_encode($exp);
?>
