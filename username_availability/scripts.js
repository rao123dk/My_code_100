function checkAvailability() {
    var username =$('#username').val();
    
        $.ajax({
        type: "POST",
        url: "fetchdata.php",
        data:"username="+ username,
        
        success:function(data){
            $("#user-availability-status").html(data);
            
        },
        error:function (){
            console.log("error");
           
        }
        
    });
    //console.log(data);
}