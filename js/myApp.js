// Start using JQuery

// const serverURL = 'https://jaroslav-credopro.github.io/Klaptyk/';
let serverURL = 'http://klaptyk/Klaptyk/';
$(document).ready(function () {
	debugger;

	// add footer



	// // add header
	$('#header-for-all-website-id').load(serverURL + 'header/header.html');

	// aboutus
	$('#about').load(serverURL + 'aboutus/about.html');
	// courses-index
	// $('#courses-index').load(serverURL + 'coursers/courses_index.html');
<<<<<<< HEAD

	$('#footer-for-all-website-id').load(serverURL + 'footer/footer.html');
=======
    // kids_room
    $('#kids_room').load(serverURL + 'kids_room/kids_room_index.html');

>>>>>>> refs/remotes/origin/master
	// scroll
	// $(window).scroll(function () {
	// 	if ($(this).scrollTop() >= 120) {
	// 		$('nav').addClass(' fixed-top ');
	// 	}
	// 	else {
	// 		$('nav').removeClass(' fixed-top ');
	// 	}
	// });
	// end header

});
