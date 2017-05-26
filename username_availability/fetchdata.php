<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
require_once('connection.php');

    #$username = $_POST['username'];  #'rao123dk4'; 
    $username       = mysqli_real_escape_string($conn,$_POST['username']); 
    $query = "SELECT * FROM users where user_name='".$username."' ";     
    $result = $conn->query($query);
  
    $r = array();
    if( $result->num_rows>0){
    while($row = $result->fetch_assoc()){
        $r[] = $row;
        }
    }
    $userarraylength = count($r);
    
        if($userarraylength>0){
            echo "<span> Username Not Available.</span>";
            }else{ 
            echo "<span> Username Available.</span>";
        }


?>
