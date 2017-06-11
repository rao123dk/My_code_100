$(document).ready(function () {
    $("#encode_area").focus();
    
});

function encode(){
    var encode_Input_String = $("#encode_area").val();
    encodedData = window.btoa(encode_Input_String); // encode a string
    $("#secret_message").html(encodedData);
 
  console.log(encodedData);
}

function decode(){
  var encoded_data = $("#decode_area").val();
  var decodedData = window.atob(encoded_data);
  $("#public_message").html(decodedData);
  console.log(decodedData);
}

function copyToClipboard(element) {
    //alert("hello");
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}