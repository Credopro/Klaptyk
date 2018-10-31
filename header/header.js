// $(document).ready(function () {
// 	$(function(){
// 		var current_page_URL = location.href;
//
// 		$( "a" ).each(function() {
//
// 			if ($(this).attr("href") !== "#") {
//
// 				var target_URL = $(this).prop("href");
//
// 				if (target_URL == current_page_URL) {
// 					$('nav a').parents('li, ul').removeClass('active');
// 					$(this).parent('li').addClass('active');
//
// 					return false;
// 				}
// 			}
// 		});

	//
	//
	// }); });


$(document).ready(function () {

	var removeActive = function() {
		$( "nav a" ).parents( "li, ul" ).removeClass("active");
	};

	$( ".nav li" ).click(function() {
		removeActive();
		$(this).addClass( "active" );
	});

	removeActive();
	$( "a[href='" + location.hash + "']" ).parent( "li" ).addClass( "active" );

});