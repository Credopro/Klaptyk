$(document).ready(function () {

    /*click image*/

    var imageIndex = 0;
    var images = [
        "../img/gallery/Kids_room/kids1.jpg",
        "../img/gallery/Kids_room/kids2.jpg",
        "../img/gallery/Kids_room/kids.jpg",
        "../img/gallery/Kids_room/kids0.png"
    ];
    $('img').click(function () {
        $(this).attr("src", images[imageIndex]);
        imageIndex++;
        if (imageIndex > images.length - 1) {
            imageIndex = 0;
        }
    });

    /*background table*/

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