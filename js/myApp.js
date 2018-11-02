// Start using JQuery
$(document).ready(function () {
const serverURL = 'https://github.com/Jaroslav-Credopro/Klaptyk/';
// const serverURL = 'http://klaptyk/Klaptyk/';

	// debugger;

	 // add header
	$('#top-for-all-website-id').load(serverURL + '../header/top.html');

	// aboutus
	$('#about-us').load(serverURL + '../header/about.html');

	// coworkinIndex
	$('#coworkin-Index').load(serverURL + '../coworking/coworkin-Index.html');

	// courses-index
	$('#courses-index').load(serverURL + 'coursers/courses_index.html');

	// kids_room
	// $('#kids_room').load(serverURL + 'kids_room/kids_room_index.html');

	// add footer
	$('#footer-for-all-website-id').load(serverURL + '../footer/footer.html');


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
