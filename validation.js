function validate() {
	
	var name = document.getElementById('1').value;
	var email = document.getElementById('2').value;
	var uname = document.getElementById('3').value;
	var pass = document.getElementById('4').value;
	var cpass = document.getElementById('5').value;
	var gender = document.getElementById('6').value;
	var date = document.getElementById('7').value;
	var month = document.getElementById('8').value;
	var year = document.getElementById('9').value;
	var intdate = Number(date);
	var error = document.getElementById('error');
	var s = name.split(' ');
	var c = name.charAt(0);

	if (name == "" || email == "" || uname == "" || pass == "" || cpass =="" || 
		gender == "" || date == "" || month == "" || year == "") 
	{
		//alert("Any field can not be empty.")
		error.innerHTML= "Any field can not be empty.";
		
	}
	else{

		if (Number(date) >31 || Number(date) <=0 || Number(month)>12 || Number(month)<1 || Number(year) >2016 || Number(year)<1900) {
			//alert("Date range not valid");
			error.innerHTML= "Date range not valid";
		}
		else{

			if (s.length<2) {
				error.innerHTML= "Name not valid";
			}

			else{

				if (c!='A'||c!='B'||c!='C'||c!='D'||c!='E'||c!='F'||c!='G'||c!='H'||c!='I'||c!='J'||c!='K'||c!='L'||c!='M'||
					c!='N'||c!='O'||c!='P'||c!='Q'||c!='R'||c!='S'||c!='T'||c!='U'||c!='V'||c!='W'||c!='X'||c!='Y'||c!='Z'||
					c!='a'||c!='b'||c!='c'||c!='d'||c!='e'||c!='f'||c!='g'||c!='h'||c!='i'||c!='j'||c!='k'||c!='l'||c!='m'||
					c!='n'||c!='o'||c!='p'||c!='q'||c!='r'||c!='s'||c!='t'||c!='u'||c!='v'||c!='w'||c!='x'||c!='y'||c!='z'||) {

					error.innerHTML= "Name must start with a letter";
				}
			}
		}
	

			
	}

}