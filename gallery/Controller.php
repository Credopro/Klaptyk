<?php
require_once "Model.php";

$url = $_GET['query'];
$listArr = array();
if ($url[0] == 'gallery/images'){
	$listArr = Model::getImagesById($url[1]);
}
if ($url[0] == 'gallery'){
	$listArr = Model::getListEvents();
}
echo json_encode($listArr);