function validateForm()
{
	var	body = document.getElementById("body");
	var	runTimeMinutes = parseInt(document.getElementById("runTimeMinutes").value) || 0;
	var	runTimeHours = parseInt(document.getElementById("runTimeHours").value) || 1;
	var	warningMinutes = parseInt(document.getElementById("warningMinutes").value) || 15;
	var	warningHours = parseInt(document.getElementById("warningHours").value) || 0;
	var	runTimeTotal = runTimeHours * 60 + runTimeMinutes;
	var	warningTimeTotal = warningHours * 60 + warningMinutes;
	var	form = document.getElementById("userForm");
	var warningRequired = true;
	var	header = document.getElementById("header");
	if (warningTimeTotal >= runTimeTotal)
		warningRequired = false;
	form.outerHTML = ("");
	header.outerHTML = ("");
	beginTimer(body, runTimeTotal, warningTimeTotal, warningRequired);
	return (false);
}


function	beginTimer(body, runTimeTotal, warningTimeTotal, warningRequired)
{
	var	displayTime = 0;
	var	displayMinutes = 0;
	var	displayHours = 0;
	var	countdownText = document.getElementById("countdownText");

	displayTime = runTimeTotal;
	if (displayTime < 0) {
		displayTime = displayTime * -1;
	}
	displayHours = (Math.floor(displayTime / 60));
	displayMinutes = displayTime % 60;
	setColours(runTimeTotal, countdownText, body, warningTimeTotal, warningRequired);
	displayHours = correctNumber(displayHours);
	displayMinutes = correctNumber(displayMinutes);
	countdownText.innerHTML = (displayHours + " : " + displayMinutes);
	runTimeTotal--;
	setTimeout(beginTimer, 10000, body, runTimeTotal, warningTimeTotal, warningRequired);
}

function	setColours(runTimeTotal, countdownText, body, warningTimeTotal, warningRequired)
{
	if (runTimeTotal <= 0)
	{
		countdownText.style.color = "red";
		body.style.backgroundColor = "#505050";
		body.style.color = "black";
	}
	else if (runTimeTotal <= warningTimeTotal && warningRequired == true)
	{
		countdownText.style.color = "#feaf10";
	}
}

function	correctNumber(number)
{
	number *= number < 0 ? -1 : 1;
	if (number > -10 && number < 10) {
		number = "0" + number;
	}
	return (number);
}
