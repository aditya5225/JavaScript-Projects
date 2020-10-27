

var num = 0;



function slider()
{
	document.getElementById('box').style.backgroundImage = `url('img/${num}.jpeg')`;
	document.getElementById('box').style.backgroundSize = "900px 500px";
}



function left()
{
	num++;
	if (num >= 5) 
	{
		num = 0;
	}
	slider();
}


function right()
{
	num--;
	if (num < 0) 
	{
		num = 4;
	}
	slider();
}