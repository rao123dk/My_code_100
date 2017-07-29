<?php 
 header('Access-Control-Allow-Origin: *');  
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');
?>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	<title>Form</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script type='text/javascript' src="http://cdnjs.cloudflare.com/ajax/libs/jquery-ajaxtransport-xdomainrequest/1.0.1/jquery.xdomainrequest.min.js"></script>
</head>
<body>
<p>Hello World</p>
<div>
	
	
	Name:-
	<input id="name" name="name"  type="text"  placeholder="Name"><br/>
	<br/>
	Mobile:- 
	<input id="mobile" name="mobile" type="text"  placeholder="Mobile no">
	<br/>
	<br/>
	<button id="ButtonSubmit" onclick="postContactToGoogle()" 
     type="button" >Send</button> 

		
</div>
<script src="script.js"></script>
</body>
</html>




