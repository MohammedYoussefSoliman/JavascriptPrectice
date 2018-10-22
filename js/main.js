// ball excersize

/*
var w = window.innerWidth-100;
var h = window.innerHeight-100;
var ball = document.getElementById('ball');

console.log(w+' '+h);

function moveBall() {
	ball.style.top = Math.random()*h+"px";
	ball.style.left = Math.random()*w+"px";
	console.log(ball.style.top+' '+ball.style.left);

}
*/

var slideIndex = 1;
var slides = document.getElementsByClassName('slides');

function show (n) {
	slideIndex += n;
	slide(slideIndex);
}

function slide (n) {

	if (slideIndex > slides.length) {
		slideIndex = 1;
	}
	if (slideIndex < 1) {
		slideIndex = slides.length;
	}
	for (var i=0;i<slides.length;i++){
		slides[i].style.display = 'none';
	}
	 	slides[slideIndex-1].style.display = 'block';
}
slide (0) // lazm 3shan mn al bdaya tb2a slide wa7da :)
// Regular expressions :)

// Collape 



function collapse () {
	var x = document.getElementById('form-cont');
	var y = document.getElementById('btnToggle');
	if (x.style.display == "none") {
		x.style.display = "block";
		y.innerHTML = 'Hide <i class="fas fa-arrow-circle-up"></i>';
	}else{
		x.style.display = "none";
		y.innerHTML = 'Show <i class="fas fa-arrow-circle-down"></i>';
	}
}

// Simple application & Practicing Objects


var employee = {name:'Hazem',age:23,ti:'Web Developer',mobile: 354789}


// validation step

var uname = document.getElementById('uname'),
	uphone = document.getElementById('uphone'),
	uage = document.getElementById('uage'),
	umail = document.getElementById('uemail');

var uname_regex = /[A-Za-z]/
var uphone_regex = /^(002)?(010|011|012)[0-9]{8}$/
var uage_regex = /^[0-9]{2,3}$/
var umail_regex = /^(\w+[.\-_]*\w+)+@[A-Za-z0-9\-_]{2,63}(\.[A-Za-z0-9\-_]{2,63}){1,6}$/
var UserName, UserPhone, UserAge, UserMail;
function validate () {

	if(uname_regex.test(uname.value) == true){
		UserName = uname;
		uname.className = "form-control is-valid";
	}else{
		uname.className = "form-control is-invalid";
	}

	if(uphone_regex.test(uphone.value) == true){
		UserPhone = uphone;
		uphone.className = "form-control is-valid";
	}else{
		uphone.className = "form-control is-invalid";
	}

	if(uage_regex.test(uage.value) == true){
		UserAge = uage;
		uage.className = "form-control is-valid";
	}else{
		uage.className = "form-control is-invalid";
	}

	if(umail_regex.test(umail.value) == true){
		UserMail = umail;
		umail.className = "form-control is-valid";
	}else{
		umail.className = "form-control is-invalid";
	}

}
var	inputs = document.getElementsByTagName('input');
var ActiveRegex = {
	uname: /[A-Za-z]/,
	uphone: /^(002)?(010|011|012)[0-9]{8}$/,
	uage: /^[0-9]{2,3}$/,
	uemail: /^(\w+[.\-_]*\w+)+@[A-Za-z0-9\-_]{2,63}(\.[A-Za-z0-9\-_]{2,63}){1,6}$/
}

for (var i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener("keyup", function(e){
		activeValidation (e.target, ActiveRegex[e.target.attributes.id.value])
	})
}

function activeValidation(ins, reg) {
	if(reg.test(ins.value)){
		ins.className = "form-control is-valid";
	}else{
		ins.className = "form-control is-invalid";
	}
}

/*var UserName = document.getElementById('uname'),
	UserPhone = document.getElementById('uphone'),
	UserAge = document.getElementById('uage'),
	UserMail = document.getElementById('uemail'), */





var employees = [];
employees = JSON.parse(localStorage.getItem("all"));

if (employees == null) {
	employees = [];
}else{
DisplayDataInTable ();
}

// constructing a function to incorporate the added data to the array employees

function Addrecord (){

	if (uname.value != '' && uphone.value !='' && uage.value != '' && umail.value != '') {
		validate()
		var record = {name: UserName.value, phone: UserPhone.value, age: UserAge.value, Email: UserMail.value};
		employees.push(record);

		localStorage.setItem("all", JSON.stringify(employees))

		DisplayDataInTable ()
		clear_form ()
	}else{
		alert("All feilds are required");
	}

}

function clear_form () {
	for (var i = 0; i <inputs.length; i++) {
		inputs[i].value = "";
	}
}

function DisplayDataInTable () {
	var tab = document.getElementById("tab");
	var final = "";
	for (var i=0;i<employees.length;i++) {
		final +='<tr><td>'+employees[i].name+'</td><td>'+employees[i].phone+'</td><td>'+employees[i].age+'</td><td>'+employees[i].Email+'</td></tr>';
	}
	tab.innerHTML = final;
}

function clearLocal () {
	localStorage.setItem("all", '');
	location.reload();
}



// My email regex /^(\w+[.\-_]*\w+)+@[A-Za-z0-9\-_]{2,63}(\.[A-Za-z0-9\-_]{2,63}){1,6}$/
// names regex
