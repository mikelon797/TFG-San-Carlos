<?php

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/dbclass.php';

include_once '../class.usuarios.php';

$usuario = new usuarios();

$data = json_decode(file_get_contents("php://input"));

$usuario->surname1 = $data->apellido;
$usuario->date_of_birth = $data->fechanac;
$usuario->gender   = $data->genero;
$res = $usuario->CheckLogin($data->area,$usuario->surname1,$usuario->date_of_birth,$data->habitacion,$usuario->gender);
if (sizeof($res) > 0) {
   $exp["status"] = "OK";
   $exp["data"] = $res;
} else {
   $exp["status"] = "KO";
}
echo json_encode($exp);

?>
