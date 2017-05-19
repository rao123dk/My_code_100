var battery_charge;
var chrger_connected;
window.onload = function(){
	setInterval(displayBatteryLevel, 100);
	setColor();
}

function displayBatteryLevel(){
	navigator.getBattery().then(function(data){
		battery_charge = 100 * data.level;
		if(data.charging){
			chrger_connected="Connected ";
		}else{
			chrger_connected="disconnected";
		}
		
		document.getElementById('display_battery_level').innerHTML=battery_charge +"%";
		document.getElementById('chrger_connected').innerHTML= "Charger " +chrger_connected ;
		document.getElementById('chargeTime').innerHTML= "FullCharge Time:- "+data.chargingTime;
		document.getElementById('dischargeTime').innerHTML= "Shut down after:-" +data.dischargingTime +" Sec";
		
	});

}

function setColor(){
	if(battery_charge >= 84){
	navigator.vibrate(1000);
	document.getElementById('display_battery_level').style.color="green";
	}else{
	document.getElementById('display_battery_level').style.color="red";
	}
}

var tempColor = setInterval(setColor,2000);



//$('video').currentTime = $('video').duration

//https://malekbenz.com/blog/2017/03/11/Building-simple-Slide-application-using-SocketIO

//http://developer.telerik.com/content-types/tutorials/building-conversational-bot-javascript/

