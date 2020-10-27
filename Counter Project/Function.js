
var number = 0;

function Increase()
{
	number++;
	document.getElementById('p2').innerHTML = number;
	countcolor()
}


function Decrease()
{
	number--;
	document.getElementById('p2').innerHTML = number;
	countcolor()
}

function countcolor()
{
	if (number > 0) 
	{
		document.getElementById('p2').style.color = "green";
	}

	else if (number < 0)
	{
		document.getElementById('p2').style.color = "blue";
	}
	else
	{
		document.getElementById('p2').style.color = "white";
	}
}