function validateForm()
{
	var	body = document.getElementById("body");
	var	inputDiv = document.getElementById("divToDisappear");
	var	runTimeMinutes = parseInt(document.getElementById("runTimeMinutes").value) || 0;
	var	runTimeHours = parseInt(document.getElementById("runTimeHours").value) || 0;
	var	warningMinutes = parseInt(document.getElementById("warningMinutes").value) || 0;
	var	warningHours = parseInt(document.getElementById("warningHours").value) || 0;
	var warningCheckBox = document.getElementById("warningCheckBox");
	var	runTimeTotal = runTimeHours * 60 + runTimeMinutes;
	var	warningTimeTotal = warningHours * 60 + warningMinutes;
	var warningRequired = true;
	if (warningCheckBox.checked == false || warningTimeTotal >= runTimeTotal)
		warningRequired = false;
	inputDiv.style.display = "none";
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
	setTimeout(beginTimer, 60000, body, runTimeTotal, warningTimeTotal, warningRequired);
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

function	showHideWarningInputs()
{
	var warningCheckBox = document.getElementById("warningCheckBox");
	var sectionToHide = document.getElementById("warningToHideSection");

	if (warningCheckBox.checked == true)
	{
		sectionToHide.style.display = "block";
	}
	else
	{
		sectionToHide.style.display = "none";
	}

}

function	reload()
{
	location.reload();
}