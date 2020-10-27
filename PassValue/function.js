

var nme, name;

function obje1(nm)
{
	sessionStorage.setItem("nmec", nm);
	
}

function obje2(nmmm)
{
	nmmm= sessionStorage.getItem("nmec");
	return nmmm;
}


function nmm()
		{
		//nme= document.getElementById('txt').value;
	//sessionStorage.setItem("nmec", document.getElementById('txt').value);
	//window.location.href= "page2.html";
	//obje1(document.getElementById('txt').value);
	window.location.href= "page2.html";
		
		}

function name()
{
	//document.getElementById('p1').innerHTML="Welcome";
		//name= sessionStorage.getItem("nmec");
		//document.getElementById('lb1').innerHTML= sessionStorage.getItem("nmec");
		//document.write(nme);
		name= obje2();
		//obje2();
		document.write(name);
}


