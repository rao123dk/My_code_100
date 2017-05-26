<?php
#echo "<h2>PHP is Fun!</h2>";
header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json; charset=UTF-8");
$servername = "localhost";
$username = "dkumar";
$password = "Admin@123"; //Your User Password
$dbname = "dkumar_username_availability"; //Your Database Name


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    echo "<h2>PHP not!</h2>";
    die("Connection failed: " . $conn->connect_error);
} 


