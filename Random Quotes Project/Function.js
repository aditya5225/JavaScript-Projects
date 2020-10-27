

function Quotes()
{
	var array = [];
	array[0] = {Quote: "I try to create sympathy for my characters, then turn the monsters loose.", Author: "- Stephen King"};
	array[1] = {Quote: "Prose is architecture, not interior decoration.", Author: "- Ernest Hemingway"};
	array[2] = {Quote: "It's none of their business that you have to learn to write. Let them think you were born that way.", Author: "- Ernest Hemingway"};
	array[3] = {Quote: "Most writers regard the truth as their most valuable possession, and therefore are most economical in its use.", Author: "- Mark Twain"};
	array[4] = {Quote: "To produce a mighty book, you must choose a mighty theme.", Author: "- Herman Melville"};


	var rannum = Math.floor(Math.random() * array.length);
	document.getElementById('sp').innerHTML = array[rannum].Quote;
	document.getElementById('author').innerHTML = array[rannum].Author;

	document.getElementById('outer').style.width = array[rannum].Quote.length * 5 + 100 +"px";

}