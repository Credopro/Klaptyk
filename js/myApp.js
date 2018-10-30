// Start using JQuery
$(document).ready(function () {
const serverURL = 'https://jaroslav-credopro.github.io/Klaptyk/';
// const serverURL = 'http://klaptyk/Klaptyk/';

	// debugger;

	 // add header
	$('#header-for-all-website-id').load(serverURL + 'header/header.html');

	// aboutus
	// $('#about').load(serverURL + 'aboutus/about.html');

	// courses-index
	// $('#courses-index').load(serverURL + 'coursers/courses_index.html');

	// kids_room
	// $('#kids_room').load(serverURL + 'kids_room/kids_room_index.html');

	// add footer
	$('#footer-for-all-website-id').load(serverURL + 'footer/footer.html');


	// scroll
	$(window).scroll(function () {
		if ($(this).scrollTop() >= 120) {
			$('nav').addClass(' fixed-top ');
		}
		else {
			$('nav').removeClass(' fixed-top ');
		}
	});


});
