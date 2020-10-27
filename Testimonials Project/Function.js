

var num = 0;


function left()
{
	num--;

	if (num <= 0) 
	{
		num = 3;
	}

	details()
}


function right()
{
	num++;

	if (num >= 4) 
	{
		num = 1;
	}

	details()
}


function detail(image, name, quote)
{
	this.i = image;
	this.n = name;
	this.q = quote;
}

function details()
{
	var client1 = new detail("0", "Aditya", "Maurya");
	var client2 = new detail("1", "Suraj", "Yadav");
	var client3 = new detail("2", "Shubham", "Singh");

	document.getElementById('image').style.backgroundImage = "url('img/customer-" + eval("client" + num + ".i") + ".jpg')";
	document.getElementById('name').innerHTML = eval("client" + num + ".n");
	document.getElementById('quote').innerHTML = eval("client" + num + ".q");
}