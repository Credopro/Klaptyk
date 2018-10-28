function required() {
	var name = document.forms["cont_form"].elements["name"].value;
	var email = document.forms["cont_form"].elements["email"].value;
	var phone = document.forms["cont_form"].elements["phone"].value;
	var message = document.forms["cont_form"].elements["message"].value;
	if (name == null || name == "") {
		alert("Введіть ім'я!");
		return false;
	}
	if (email == null || email == "") {
		alert("Введіть email!");
		return false;
	}
	if (phone == null || phone == "") {
		alert("Введіть номер телефону.");
		return false;
	}
	if (message == null || message == "") {
		alert("Введіть повідомлення.");
		return false;
	}
	else {
		return true;
	}
}

// Start using JQuery

const serverURL = 'https://jaroslav-credopro.github.io/Klaptyk/';
// let serverURL = 'http://klaptyk/Klaptyk/';
$(document).ready(function () {

	// add footer

	$('#footer-for-all-website-id').load(serverURL + 'data/footer.html');

	// add header
	$('#header-for-all-website-id').load(serverURL + 'header/header.html');

	// aboutus
	$('#aboutus').load(serverURL + 'aboutus/aboutus.html');
	// courses-index
	// $('#courses-index').load(serverURL + 'coursers/courses_index.html');


	// scroll
	$(window).scroll(function () {
		if ($(this).scrollTop() >= 120) {
			$('nav').addClass(' fixed-top ');
		}
		else {
			$('nav').removeClass(' fixed-top ');
		}
	});
	// end header

});
