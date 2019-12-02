/*


var erimg = document.getElementById('eimg');
var s = name.split(' ');
var c = name.charAt(0);*/


function validateName() {
	var ername = document.getElementById('ename');
	var name = document.getElementById('1').value;
	var s = name.split(" ");
	var c = s.length;

	if (name == "") 
	{
		ername.innerHTML = "Name can not be empty.";
		return false;
	}
	else{
		if (c<2) {
			ername.innerHTML = "Name range not valid";
			return false;
		}
		else{
			ername.innerHTML = "";
			return true;
		}
	}
}

function validateEmail(){
	var email = document.getElementById('2').value;
	var eremail = document.getElementById('eemail');

	if (email == "") {
		eremail.innerHTML = "Email can not be empty.";
		return false;
	}else{
		eremail.innerHTML = "";
		return true;
	}

}

function validateUname(){
	var uname = document.getElementById('3').value;
	var eruname = document.getElementById('euname');

	if (uname == "") {
		eruname.innerHTML = "Username can not be empty.";
		return false;
	}else{
		eruname.innerHTML = "";
		return true;
	}
}

function validatePass(){
	var pass = document.getElementById('4').value;
	var erpass = document.getElementById('epass');

	if (pass == "") {
		erpass.innerHTML = "Password can not be empty.";
		return false;
	}else{
		erpass.innerHTML = "";
		return true;
	}
}

function validateCpass(){
	var cpass = document.getElementById('5').value;
	var ercpass = document.getElementById('ecpass');

	if (cpass == "") {
		ercpass.innerHTML = "Confirm Password can not be empty.";
		return false;
	}else{
		ercpass.innerHTML = "";
		return true;
	}
}

function validateGender(){
	var gender = document.getElementById('6');
	var ergender = document.getElementById('egender');
	var flag = 0; 
	var i;
	for(i=0;i<gender.length;i++) {
		if(gender.item(i).checked == false) {
			i++;
		}
	}
	if(flag == gender.length) {
		ergender.innerHTML = "Gender can not be empty.";
		return false;
	} else {
		ergender.innerHTML = "";
		return true;
	}
}

function validateDob(){
	var date = document.getElementById('7').value;
	var month = document.getElementById('8').value;
	var year = document.getElementById('9').value;
	var erdob = document.getElementById('edob');

	if (date == "" || month == "" || year == "") {
		erdob.innerHTML = "Date of Birth can not be empty.";
		return false;
	}
	else{
		if (Number(date) >31 || Number(date) <=0 || Number(month)>12 || Number(month)<1 || Number(year) >2016 || Number(year)<1900) {
			//alert("Date range not valid");
			erdob.innerHTML = "Date range not valid";
			return false;
		}else{
			erdob.innerHTML = "";
			return true;
		}
	}
}
function validateBG(){
	var erbg = document.getElementById('ebg');
	var bgroup = document.getElementById("bg");
	if(bgroup.value == "") {
		erbg.innerHTML = "Blood group not empty.";
		return false;
	} else {
		erbg.innerHTML = "";
		return true;
	}
}

function validateDeg(){
	var erdeg = document.getElementById('edeg');
	var degree = document.getElementsByName("deg")
	var s;
	for(var j=0;j<degree.length;j++) {
		if(degree[j].checked == false) {
			s +=;
		}
	}
	if(s == "") {
		erdeg.innerHTML = "Degree can not be empty";
		return false;
	} else {
		erdeg.innerHTML = "";
		return true;
	}
}

function validateUid(){

	var uid = document.getElementById('10').value;
	var eruid = document.getElementById('euid');

	if (uid == "") {
		eruid.innerHTML = "UserId can not be empty.";
		return false;
	}else{
		eruid.innerHTML = "";
		return true;
	}

}

function submitForm(){
	if (validateName()==true && validateEmail()==true && validateUname()==true && 
		validatePass()==true && validateCpass()==true && validateGender()==true && 
		validateDob()==true && validateBG()==true && validateDeg()==true && 
		validateUid()==true) {
		
	}
}


/*else{

if (c!='A'||c!='B'||c!='C'||c!='D'||c!='E'||c!='F'||c!='G'||c!='H'||c!='I'||c!='J'||c!='K'||c!='L'||c!='M'||
c!='N'||c!='O'||c!='P'||c!='Q'||c!='R'||c!='S'||c!='T'||c!='U'||c!='V'||c!='W'||c!='X'||c!='Y'||c!='Z'||
c!='a'||c!='b'||c!='c'||c!='d'||c!='e'||c!='f'||c!='g'||c!='h'||c!='i'||c!='j'||c!='k'||c!='l'||c!='m'||
c!='n'||c!='o'||c!='p'||c!='q'||c!='r'||c!='s'||c!='t'||c!='u'||c!='v'||c!='w'||c!='x'||c!='y'||c!='z'||) {
//error.innerHTML= "Name must start with a letter";
}*/

/*function validateDob(){
	if (date == "" || month == "" || year == "") {
		erdob.innerHTML = "Date of Birth can not be empty.";
	}
	else{
		if (Number(date) >31 || Number(date) <=0 || Number(month)>12 || Number(month)<1 || Number(year) >2016 || Number(year)<1900) {
			//alert("Date range not valid");
			erdob.innerHTML = "Date range not valid";
		}
	}
}*/