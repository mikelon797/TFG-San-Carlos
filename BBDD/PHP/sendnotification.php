<?php

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/dbclass.php';

include_once '../class.usuarios.php';
include_once '../class.notifications.php';

$notification = new notifications();

$data = json_decode(file_get_contents("php://input"));

$notification->user_id = $data->userid;
$notification->question = $data->question;
$notification->answer  = $data->answer;
$fec = date('Y-m-d H:i:s');
$notification->date_notification   = $fec;

$exp["status"] = "KO";
$res = $notification->insert();
#
$exp["status"] = "OK";
$exp["notification_id"] = $notification->notification_id;
#
echo json_encode($exp);
?>
