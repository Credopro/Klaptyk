<?php
require_once "Db.php";
class Model{

	public static function getListEvents(){

		$db = Db::getConnection();

		$result = $db->query('SELECT id, name, sub_name, image_path FROM events ORDER BY id ASC');

		$i = 0;
		$eventsList = array();
		while ($row = $result->fetch()) {
			$eventsList[$i]['id'] = $row['id'];
			$eventsList[$i]['name'] = $row['name'];
			$eventsList[$i]['sub_name'] = $row['sub_name'];
			$eventsList[$i]['image_path'] = $row['image_path'];
			$i++;
		}
		return $eventsList;
	}

	public static function getImagesById($id){
		$db = Db::getConnection();

		$result = $db->query("SELECT name, image_path FROM images WHERE event_id = ". $id ." ORDER BY id ASC");

		$i = 0;
		$imagesList = array();
		while ($row = $result->fetch()) {
			$imagesList[$i]['name'] = $row['name'];
			$imagesList[$i]['image_path'] = $row['image_path'];
			$i++;
		}
		return $imagesList;
	}
}