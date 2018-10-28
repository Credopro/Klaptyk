// Start using JQuery

$(function(){
	$(window).scroll(function() {
		if($(this).scrollTop() >= 120) {
			$('.top-menu').addClass(' sticky-menu ');
		}
		else{
			$('.top-menu').removeClass(' sticky-menu ');
		}
	});
});

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


	// add footer
	const serverURL = 'https://jaroslav-credopro.github.io/Klaptyk/';
	// let serverURL = 'd://WWW//OSPanel//domains//Klaptyk//Klaptyk//';
	$(document).ready(function () {

		var imageIndex = 0;
		var images = [
			"img/gallery/Kids_room/kids1.jpg",
			"img/gallery/Kids_room/kids2.jpg",
			"img/gallery/Kids_room/kids.jpg"
		];
		$('img').click(function () {
			$(this).attr("src", images[imageIndex]);
			imageIndex++;
			if (imageIndex > images.length - 1) {
				imageIndex = 0;
			}
		});

		$('#footer-for-all-website-id').load(serverURL + 'data/footer.html');

		// add header
		$('#header-for-all-website-id').load(serverURL + 'header/header.html');

		// /header


		/*background table (Vova_Hundyak) */

		$('.special-row').hover(function () {
					$(this).addClass('bg-table');
				},
				function () {
					$(this).removeClass('bg-table');
				});
		$('.special-td').hover(function () {
					$(this).addClass('table-text');
				},
				function () {
					$(this).removeClass('table-text');
				});

	});
