
var contentType ="application/x-www-form-urlencoded; charset=utf-8";
 
if(window.XDomainRequest) //for IE8,IE9
    contentType = "text/plain";

function postContactToGoogle() {
        var name = $('#name').val();
        var mobile = $('#mobile').val();
        

            $.ajax({
                url: "https://docs.google.com/forms/d/e/1FAIpQLSeIlsIE7_a7tRxlcBPdLUKrgwt7E2vmgAxhiA8-1JyxOW4pEQ/formResponse",
                data: { "entry.568987534": name,
                "entry.1354050965": mobile },
                type: "POST",
                dataType: "xml",
                contentType:contentType,
                statusCode: {
                    0: function () {
                        //window.location.replace("ThankYou.html");
                        alert("error");
                    },
                    200: function () {
                        window.location.replace("ThankYou.html");
                    }
                }
            });
    }