var compte = function(){
	var date = document.getElementById('countdown');
	var today = new Date();
	var end = new Date("Aug 14 17:30:00 2018");
	var day = (end - today) / (1000 * 60 * 60 * 24);
	var hour = (day - Math.floor(day)) * 24;
	var minute = (hour - Math.floor(hour)) * 60;
	var second = (minute - Math.floor(minute)) * 60;

	date.innerHTML = 'il reste : ' + Math.floor(day) + ' jours ' + Math.floor(hour) + ' heures ' + Math.floor(minute) + ' minutes ' + Math.floor(second) + ' secondes';
}

setInterval(compte, 1000);
