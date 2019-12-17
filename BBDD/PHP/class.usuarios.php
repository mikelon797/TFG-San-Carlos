<?php
/*
*
* -------------------------------------------------------
* CLASSNAME:        usuarios
* GENERATION DATE:  08.06.2019
* CLASS FILE:       /vg-user/home/jb/soft/rest/cgen/generated_classes/class.usuarios.php
* FOR MYSQL TABLE:  users
* FOR MYSQL DB:     hsc
* -------------------------------------------------------
*
*/

include_once("config/class.database.php");

// **********************
// CLASS DECLARATION
// **********************

class usuarios
{ // class : begin


// **********************
// ATTRIBUTE DECLARATION
// **********************

var $user_id;   // KEY ATTR. WITH AUTOINCREMENT

var $name;   // (normal Attribute)
var $surname1;   // (normal Attribute)
var $surname2;   // (normal Attribute)
var $date_of_birth;   // (normal Attribute)
var $gender;   // (normal Attribute)
var $mail;   // (normal Attribute)
var $phone;   // (normal Attribute)

var $database; // Instance of class database


// **********************
// CONSTRUCTOR METHOD
// **********************

function usuarios()
{

$this->database = new Database();

}


// **********************
// GETTER METHODS
// **********************


function getuser_id()
{
return $this->user_id;
}

function getname()
{
return $this->name;
}

function getsurname1()
{
return $this->surname1;
}

function getsurname2()
{
return $this->surname2;
}

function getdate_of_birth()
{
return $this->date_of_birth;
}

function getgender()
{
return $this->gender;
}

function getmail()
{
return $this->mail;
}

function getphone()
{
return $this->phone;
}

// **********************
// SETTER METHODS
// **********************


function setuser_id($val)
{
$this->user_id =  $val;
}

function setname($val)
{
$this->name =  $val;
}

function setsurname1($val)
{
$this->surname1 =  $val;
}

function setsurname2($val)
{
$this->surname2 =  $val;
}

function setdate_of_birth($val)
{
$this->date_of_birth =  $val;
}

function setgender($val)
{
$this->gender =  $val;
}

function setmail($val)
{
$this->mail =  $val;
}

function setphone($val)
{
$this->phone =  $val;
}

// **********************
// SELECT METHOD / LOAD
// **********************

function select($id)
{

$sql =  "SELECT * FROM users WHERE user_id = $id;";
$result =  $this->database->query($sql);
$result = $this->database->result;
$row = mysqli_fetch_object($result);


$this->user_id = $row->user_id;

$this->name = $row->name;

$this->surname1 = $row->surname1;

$this->surname2 = $row->surname2;

$this->date_of_birth = $row->date_of_birth;

$this->gender = $row->gender;

$this->mail = $row->mail;

$this->phone = $row->phone;

}

// **********************
// DELETE
// **********************

function delete($id)
{
$sql = "DELETE FROM users WHERE user_id = $id;";
$result = $this->database->query($sql);

}

// **********************
// INSERT
// **********************

function insert()
{
$this->user_id = ""; // clear key for autoincrement

$sql = "INSERT INTO users ( name,surname1,surname2,date_of_birth,gender,mail,phone ) VALUES ( '$this->name','$this->surname1','$this->surname2','$this->date_of_birth','$this->gender','$this->mail','$this->phone' )";
$result = $this->database->query($sql);
$this->user_id = mysqli_insert_id($this->database->link);

}

// **********************
// UPDATE
// **********************

function update($id) {

$sql = " UPDATE users SET  name = '$this->name',surname1 = '$this->surname1',surname2 = '$this->surname2',date_of_birth = '$this->date_of_birth',gender = '$this->gender',mail = '$this->mail',phone = '$this->phone' WHERE user_id = $id ";

$result = $this->database->query($sql);

}

function CheckLogin($area,$apellido,$fecha,$noh,$gen) {
   if (strcmp(strtoupper($area),"HOSPITALIZADO") ==0 ) {
     $sql = "SELECT a.user_id, a.surname1, ".
                " a.date_of_birth, a.gender, a.mail, a.phone ".
                " FROM users a, instance_hospitalized b  WHERE " .
                " a.date_of_birth = '$fecha' AND b.user_id = a.user_id ".
                " AND b.exit_date is NULL AND a.surname1 = '$apellido' ".
                " AND b.bed_number = '$noh' ";
   }
   if (strcmp(strtoupper($area),"URGENCIAS")==0) {
     $sql = "SELECT a.user_id, a.surname1, ".
                " a.date_of_birth, a.gender, a.mail, a.phone ".
                " FROM users a, instance_emergency b  WHERE " .
                " a.date_of_birth = '$fecha' AND b.user_id = a.user_id ".
                " AND b.exit_date is NULL AND a.surname1 = '$apellido' ".
                " AND a.gender = '$gen' ";
   }
   $result = $this->database->query($sql);
   $result = $this->database->result;
   $this->result = $result;
   $row = mysqli_fetch_all($result,MYSQLI_ASSOC);
   return($row);
}

} // class : end
?>
