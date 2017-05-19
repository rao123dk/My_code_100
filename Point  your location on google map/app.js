//document.getElementById('display_battery_level').innerHTML=battery_charge +"%";
var map_type ="ROADMAP";

document.getElementsByClassName('mapType')[0].addEventListener("click" , function(){
	map_type = this.value;
	alert(map_type);
	myMap(map_type);
})

// Displaay by Search
var latitude;
var longitude;
var city_location;
var search_value='';
var endpoint ="https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/master/a-detailed-version.json";

var our_database=[];
function showBySearch (){
   //fetch(endpoint).then(data => console.log(data) );
    search_value_now = $("#show_by_search").val();
    search_value =search_value_now.toLowerCase();
    $.getJSON(endpoint , function(newdata){
            for(let x in newdata){
                    our_database.push(newdata[x]);
            }
            //console.log(our_database[0].city);
            our_database.forEach(function(filter_data){
                //console.log(filter_data.city);
                if(search_value === filter_data.city){
                  latitude = filter_data.latitude;
                  longitude =filter_data.longitude;
                  city_location =filter_data.city;
                  myMap(latitude,longitude);
                }
                
            });
            
    });   
    
}

// Displaay by Search end here ->

// get current location
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  latitude =crd.latitude;
  longitude =  crd.longitude;
  myMap(latitude,longitude);
};

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

navigator.geolocation.getCurrentPosition(success, error, options);
//get current location end here

// Show the Map

 function myMap(latitude,longitude) {
  var myCenter = new google.maps.LatLng(latitude,longitude);
  var mapCanvas = document.getElementById("googleMap");
  var mapOptions = {center: myCenter, zoom:15};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);
  
}

