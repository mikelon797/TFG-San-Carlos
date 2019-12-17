<?php

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/dbclass.php';

include_once '../class.usuarios.php';
include_once '../class.services.php';

$service = new services();

$data = json_decode(file_get_contents("php://input"));

$service->user_id = $data->userid;
$service->type_of_service = $data->type_of_service;
$service->text_info = $data->text_info;
$service->date_informed = 'NULL';
$service->date_closed = 'NULL';
$service->closed = 'NULL';
$service->informed = 'NULL';
$service->rate_pacient = 'NULL';
$service->rate_worker = 'NULL';
$fec = date('Y-m-d H:i:s');
$service->date_service  = $fec;
if (array_key_exists('genre_library', $data)) {
    $service->genre_library = $data->genre_library;
}
if (array_key_exists('option_diet', $data)) {
    $service->option_diet = $data->option_diet;
}
$exp["status"] = "KO";
$res = $service->insert();
#
$exp["status"] = "OK";
$exp["survey_id"] = $service->service_id;
#
echo json_encode($exp);
?>
