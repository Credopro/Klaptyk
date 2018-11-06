// Start using JQuery
$(document).ready(function () {

	setActiveMenu();

const serverURL = 'https://jaroslav-credopro.github.io/Klaptyk/';
// const serverURL = 'http://klaptyk/';

	// debugger;

	 // add header
	$('#top-nav-for-all-website-id').load(serverURL + 'header/topNav.html', function() {
		setActiveMenu();
	});

	// aboutus
	$('#about-us').load(serverURL + 'header/about.html');

	// coworking
	$('#coworkin-index').load(serverURL + 'coworking/coworkin_index.html');

	// courses-index
	$('#courses-index').load(serverURL + 'courses/courses_index.html');

	// kids_room
	$('#kids_room').load(serverURL + 'kids_room/kids_room_index.html');

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

	// set active menu
	function setActiveMenu() {
		// console.log('uri', window.location.pathname);
		switch (window.location.pathname) {
			case '/index.html':
				$('#menu-index-id').addClass('active');
				break;
			case '/Klaptyk/coworking/coworking.html':
			case '/coworking/coworking.html':
				$('#menu-coworking-id').addClass('active');
				break;

			case '/Klaptyk/courses/courses.html':
			case '/courses/courses.html':
				$('#menu-courses-id').addClass('active');
				break;
			case '/Klaptyk/gallery/gallery.html':
			case '/gallery/gallery.html':
				$('#menu-gallery-id').addClass('active');
				break;
			case "/Klaptyk/kids_room/kids_room.html":
			case 'kids_room/kids_room.html':
				$('#menu-kids-room-id').addClass('active');
				break;
			case '/Klaptyk/contacts/contacts.html':
			case '/contacts/contacts.html':
				$('#menu-contacts-id').addClass('active');
				break;
		}
	}
});
