$(document).ready(function(){
	$('#start_test').click(function(){
		// $.ajax({
  //       	type: 'GET',
  //       	url: 'http://localhost:3000/hello'
  //   	});
  	window.location.assign("http://localhost:3000/hello");
	});
});