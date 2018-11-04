function fillGallery() {
    var path = location.pathname.substring(1);
    path = path.substring(path.lastIndexOf('/')+1,path.length);

    path = [path.replace('.html','')];

    var arrObjects = []; // объявление массива
    $.get("Controller.php", { query:path }, function(data){
        arrObjects = JSON.parse(data);
        var doc = document.getElementById("galleryContainer");
        var j = 1;
        for (var i = 0; i < arrObjects.length; i++) {

            var text = "<div class=\"animated fadeIn mix single-portfolio set-bg wedding g-brd-around--md g-brd-5 " +
                "g-brd-brown rounded m-1\" data-setbg=\"img/portfolio/2.jpg\" " +
                "style=\"background-image: url("+arrObjects[i]['image_path']+");\">\n" +
                "                <a href='images?id="+j+"' class=\"portfolio-info\">\n" +
                "                    <div class=\"pfbg set-bg\" data-setbg=\"img/portfolio/2.jpg\" " +
                "style=\"background-image: url("+arrObjects[i]['image_path']+");\"></div>\n" +
                "                    <h5>"+arrObjects[i]['name']+"</h5>\n"

            if(arrObjects[i]['sub_name'] !== null)
            {
                text +="                    <p>"+arrObjects[i]['sub_name']+"</p>\n"
            }
            text +=  "                </a>\n" +
                "            </div>"
            doc.innerHTML += text;
            j++;
        }
    });
}
function shortLink() {
    var $_GET = {};
    document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
        function decode(s) {
            return decodeURIComponent(s.split("+").join(" "));
        }
        $_GET[decode(arguments[1])] = decode(arguments[2]);
    });
    var path = [location.pathname.substring(1), $_GET['id']];
    // path = [path.replace('gallery','')];

    return path;
}
function fillImages(){

    var path = shortLink();
    var arrObjects = [];
    $.get("Controller.php", { query:path }, function(data){
        arrObjects = JSON.parse(data);
        var doc = document.getElementById("imageContainer");
        for (var i = 0; i < arrObjects.length; i++) {
            var text = "<div class=\"col-lg-3 col-md-4 col-xs-6\">\n" +
                "        <a href=\"#\" class=\"d-block mb-4 h-100\">\n" +
                "        <img class=\"img-fluid img-thumbnail\" src="+arrObjects[i]['image_path']+" alt=\"\">\n" +
                "        </a>\n" +
                "        </div>"

            doc.innerHTML += text;
        }
    });
}
