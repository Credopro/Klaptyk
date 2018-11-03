// Start using JQuery
$(document).ready(function () {

const serverURL = 'https://jaroslav-credopro.github.io/Klaptyk/';
// const serverURL = 'http://klaptyk/';


	// debugger;

	 // add header
	$('#top-nav-for-all-website-id').load(serverURL + 'header/topNav.html');

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

	// class active
	// var url = window.location.href.substr( window.location.href.lastIndexOf( '/' ) + 1 );
	// $( '.navbar-nav a' ).each( function () {
	// 	if( $( this ).attr( 'href' ) === url || $( this ).attr( 'href' ) === '' ) {
	// 		$( this ).parent( 'li' ).addClass( 'active' );
	// 	}
	// });



});
