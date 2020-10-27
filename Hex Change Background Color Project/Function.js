


function bgcolor()
{
	var i, random, hexcolor= "", color = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];

	for(i=0; i<=5; i++)
	{
		random = Math.floor(Math.random() * color.length);

		hexcolor += color[random];
	}

	document.getElementById('colorcode').innerHTML= "HEX COLOR" + " " +"#" + hexcolor;
	document.body.style.backgroundColor = "#" + hexcolor;
}