// Start using JQuery

const serverURL = 'https://jaroslav-credopro.github.io/Klaptyk/';
// let serverURL = 'http://klaptyk/Klaptyk/';
$(document).ready(function () {

	// add footer

	$('#footer-for-all-website-id').load(serverURL + 'footer/footer.html');

	// add header
	$('#header-for-all-website-id').load(serverURL + 'header/header.html');

	// aboutus
	$('#aboutus').load(serverURL + 'aboutus/aboutus.html');
	// courses-index
	// $('#courses-index').load(serverURL + 'coursers/courses_index.html');
    // kids_room
    $('#kids_room').load(serverURL + 'kids_room/kids_room_index.html');

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
