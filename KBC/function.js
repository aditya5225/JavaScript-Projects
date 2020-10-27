


		var a,b,c,d,random,qst,ans,
		sel,k=0,x= [],rgtans=0,qno,
		tim, fname, lname, 
		gender, age, rigtans=0, wrngans=0,
		tim2=10;
		
		function set(ke,val)
		{
			sessionStorage.setItem(ke, val)
		}

		function get(valu)
		{
			valu= sessionStorage.getItem(valu);
			return valu;
		}

		function candidtlset()
		{
			set("fnam", document.getElementById('fnm').value);
			set("lnam", document.getElementById('lnm').value);
			if(document.getElementById('ra5').checked)
			{
				set("gndr", document.getElementById('ra5').value);
			}
			if(document.getElementById('ra6').checked)
			{
				set("gndr", document.getElementById('ra6').value);
			}
			set("agee", document.getElementById('ag').value);
			window.location.href="Question.html";
		}

		function candidtlget()
		{
			fname= get("fnam");
			lname= get("lnam");
			ran()
		}

		function ran()
		{
			reset();
			qstno();
			while(k<=4)
			{
				random= Math.floor((Math.random()*10) + 1);
				x[k]= random;
				if (k>0) 
				{
					repeat();
				}
				question();
				break;
			}
		}

		function repeat()
		{
			var j;

			for(j=0; j<k; j++)
				{
					if (random==x[j]) 
					{
						ran();
					}
				}
		}

		function checking()
			{
				var i=0;

				sel= document.getElementsByName('ra');
				for(i=0; i<4; i++)
				{
					if(sel[i].checked)
					{
						if(ans === sel[i].value)
						{
							k++;
							rgtans++;
							reset();
							alert("OOOO Right Answer! OOOO");
							rigtans= rigtans + 1;
							sel[i].checked= false;
							if (k==5) 
							{
								set("rigtan", rigtans);
								set("wrngan", wrngans);
								window.location.href="Score.html";
							}
							i=0;
							ran();
						}
						else
						{
							k++;
							reset();
							alert("XXXX Wrong Answer! XXXX");
							wrngans= wrngans + 1; 
							sel[i].checked= false;
							if (k==5) 
							{
								set("rigtan", rigtans);
								set("wrngan", wrngans);
								window.location.href="Score.html";
							}
							i=0;
							ran();
						}
					}
				}

				if(tim2 <=-1)
				{
					wrngans= wrngans + 1; 
					alert("Time Over");
					if (k<=4)
						{		
							alert("Please choose any one Answer!!!");
						}
				}
			}

			function qstno()
			{
				tim2=10;
				timer();
				qno = k + 1;
				document.getElementById('lb1').innerHTML= fname + " "+ lname;
				document.getElementById('lb2').innerHTML= "Question" + qno;
			}

			function timer()
			{
				if (k<=10) 
				{
					tim= setInterval(function(){

					document.getElementById('prog').value= 10 - --tim2;
					if(tim2 <=-1)
					{
						reset();
						k++;
						checking();
						if (k==5) 
							{
								set("rigtan", rigtans);
								set("wrngan", wrngans);
								window.location.href="Score.html";
							}
						if (k<=4)
							{		
								ran();
							}
					}

					document.getElementById('lb8').innerHTML=tim2;}, 1000);
				}
				
			}

			function reset()
			{
				
				clearInterval(tim);
			}

			function result()
			{
				fname= get("fnam");
				lname= get("lnam");
				gender= get("gndr");
				age= get("agee");
				rigtans= get("rigtan");
				wrngans= get("wrngan");
				document.getElementById('lb15').innerHTML= fname + " " + lname;
				document.getElementById('lb17').innerHTML= gender;
				document.getElementById('lb19').innerHTML= age;
				document.getElementById('lb21').innerHTML= rigtans + "/5";
				document.getElementById('lb23').innerHTML= wrngans + "/5";
				document.getElementById('prog2').value= rigtans * 100 / 5;				
				document.getElementById('lb24').innerHTML= rigtans * 100 / 5 + "%";
				if(document.getElementById('prog2').value>= 40)
				{
					document.getElementById('lb25').innerHTML= "PASS!!!";
				}

				else
				{
					document.getElementById('lb25').innerHTML= "FAIL!!!";
				}
			}

			function perc()
			{
				lol
			}

			function question()
		{
			if(random==1)
			{
				qst="The International Literacy Day is observed on?",
				a="Sep 8",
				b="Nov 28",
				c="May 2",
				d="Sep 22",
				ans="Sep 8";

				document.getElementById('lb3').innerHTML=qst;
				document.getElementById('lb4').innerHTML=a;
				document.getElementById('ra1').value=a;
				document.getElementById('lb5').innerHTML=b;
				document.getElementById('ra2').value=b;
				document.getElementById('lb6').innerHTML=c;
				document.getElementById('ra3').value=c;
				document.getElementById('lb7').innerHTML=d;
				document.getElementById('ra4').value=d;
			}

			if(random==2)
			{
				qst="The language of Lakshadweep. a Union Territory of India, is?",
				a="Tamil",
				b="Hindi",
				c="Malayalam",
				d="Telugu",
				ans="Malayalam";

				document.getElementById('lb3').innerHTML=qst;
				document.getElementById('lb4').innerHTML=a;
				document.getElementById('ra1').value=a;
				document.getElementById('lb5').innerHTML=b;
				document.getElementById('ra2').value=b;
				document.getElementById('lb6').innerHTML=c;
				document.getElementById('ra3').value=c;
				document.getElementById('lb7').innerHTML=d;
				document.getElementById('ra4').value=d;
			}

			if(random==3)
			{
				qst="In which group of places the Kumbha Mela is held every twelve years?",
				a="Ujjain. Purl; Prayag. Haridwar",
				b="Prayag. Haridwar, Ujjain,. Nasik",
				c="Rameshwaram. Purl, Badrinath. Dwarika",
				d="Chittakoot, Ujjain, Prayag,'Haridwar",
				ans="Prayag. Haridwar, Ujjain,. Nasik";

				document.getElementById('lb3').innerHTML=qst;
				document.getElementById('lb4').innerHTML=a;
				document.getElementById('ra1').value=a;
				document.getElementById('lb5').innerHTML=b;
				document.getElementById('ra2').value=b;
				document.getElementById('lb6').innerHTML=c;
				document.getElementById('ra3').value=c;
				document.getElementById('lb7').innerHTML=d;
				document.getElementById('ra4').value=d;
			}

			if(random==4)
			{
				qst="Bahubali festival is related to?",
				a="Islam",
				b="Hinduism",
				c="Buddhism",
				d="Jainism",
				ans="Jainism";

				document.getElementById('lb3').innerHTML=qst;
				document.getElementById('lb4').innerHTML=a;
				document.getElementById('ra1').value=a;
				document.getElementById('lb5').innerHTML=b;
				document.getElementById('ra2').value=b;
				document.getElementById('lb6').innerHTML=c;
				document.getElementById('ra3').value=c;
				document.getElementById('lb7').innerHTML=d;
				document.getElementById('ra4').value=d;
			}

			if(random==5)
			{
				qst="Which day is observed as the World Standards  Day?",
				a="June 26",
				b="Oct 14",
				c="Nov 15",
				d="Dec 2",
				ans="Oct 14";

				document.getElementById('lb3').innerHTML=qst;
				document.getElementById('lb4').innerHTML=a;
				document.getElementById('ra1').value=a;
				document.getElementById('lb5').innerHTML=b;
				document.getElementById('ra2').value=b;
				document.getElementById('lb6').innerHTML=c;
				document.getElementById('ra3').value=c;
				document.getElementById('lb7').innerHTML=d;
				document.getElementById('ra4').value=d;
			}

			if(random==6)
			{
				qst="Which of the following was the theme of the World Red Cross and Red Crescent Day?",
				a="Dignity for all - focus on women",
				b="Dignity for all - focus on Children",
				c="Focus on health for all",
				d="Nourishment for all-focus on children",
				ans="Dignity for all - focus on Children";

				document.getElementById('lb3').innerHTML=qst;
				document.getElementById('lb4').innerHTML=a;
				document.getElementById('ra1').value=a;
				document.getElementById('lb5').innerHTML=b;
				document.getElementById('ra2').value=b;
				document.getElementById('lb6').innerHTML=c;
				document.getElementById('ra3').value=c;
				document.getElementById('lb7').innerHTML=d;
				document.getElementById('ra4').value=d;
			}

			if(random==7)
			{
				qst="September 27 is celebrated every year as?",
				a="Teachers' Day",
				b="National Integration Day",
				c="World Tourism Day",
				d="International Literacy Day",
				ans="World Tourism Day";

				document.getElementById('lb3').innerHTML=qst;
				document.getElementById('lb4').innerHTML=a;
				document.getElementById('ra1').value=a;
				document.getElementById('lb5').innerHTML=b;
				document.getElementById('ra2').value=b;
				document.getElementById('lb6').innerHTML=c;
				document.getElementById('ra3').value=c;
				document.getElementById('lb7').innerHTML=d;
				document.getElementById('ra4').value=d;
			}

			if(random==8)
			{
				qst="Who is the author of 'Manas Ka-Hans'?",
				a="Khushwant Singh",
				b="Prem Chand",
				c="Jayashankar Prasad",
				d="Amrit Lal Nagar",
				ans="Amrit Lal Nagar";

				document.getElementById('lb3').innerHTML=qst;
				document.getElementById('lb4').innerHTML=a;
				document.getElementById('ra1').value=a;
				document.getElementById('lb5').innerHTML=b;
				document.getElementById('ra2').value=b;
				document.getElementById('lb6').innerHTML=c;
				document.getElementById('ra3').value=c;
				document.getElementById('lb7').innerHTML=d;
				document.getElementById('ra4').value=d;
			}

			if(random==9)
			{
				qst="The death anniversary of which of the following leaders is observed as Martyrs' Day?",
				a="Smt. Indira Gandhi",
				b="PI. Jawaharlal Nehru",
				c="Mahatma Gandhi",
				d="Lal Bahadur Shastri",
				ans="Mahatma Gandhi";

				document.getElementById('lb3').innerHTML=qst;
				document.getElementById('lb4').innerHTML=a;
				document.getElementById('ra1').value=a;
				document.getElementById('lb5').innerHTML=b;
				document.getElementById('ra2').value=b;
				document.getElementById('lb6').innerHTML=c;
				document.getElementById('ra3').value=c;
				document.getElementById('lb7').innerHTML=d;
				document.getElementById('ra4').value=d;
			}

			if(random==10)
			{
				qst="Who is the author of the epic 'Meghdoot'?",
				a="Vishakadatta",
				b="Valmiki",
				c="Banabhatta",
				d="Kalidas",
				ans="Kalidas";

				document.getElementById('lb3').innerHTML=qst;
				document.getElementById('lb4').innerHTML=a;
				document.getElementById('ra1').value=a;
				document.getElementById('lb5').innerHTML=b;
				document.getElementById('ra2').value=b;
				document.getElementById('lb6').innerHTML=c;
				document.getElementById('ra3').value=c;
				document.getElementById('lb7').innerHTML=d;
				document.getElementById('ra4').value=d;
			}
		}