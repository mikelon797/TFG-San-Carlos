<?php

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/dbclass.php';

include_once '../class.usuarios.php';
include_once '../class.incidents.php';

$incident = new incidents();

$data = json_decode(file_get_contents("php://input"));

$incident->user_id = $data->userid;
$incident->hosp_or_emerg = $data->hosporeme;
$incident->incident_title   = $data->title;
$incident->other_text   = $data->other;
$res = $incident->consultaTit($data->userid,$data->hosporeme,$data->title);
#
if (sizeof($res) > 0) {
   $exp["status"] = "KO";
   $exp["data"] = $res;
} else {
   $exp["status"] = "OK";
   $fec = date('Y-m-d H:i:s');
   $incident->date_incident   = $fec;
   $incident->insert();
   $exp["incideintid"] = $incident->incident_id;
}
echo json_encode($exp);

?>
