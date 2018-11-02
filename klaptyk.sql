-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Час створення: Жов 26 2018 р., 13:35
-- Версія сервера: 5.7.21
-- Версія PHP: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База даних: `klaptyk`
--

-- --------------------------------------------------------

--
-- Структура таблиці `events`
--

DROP TABLE IF EXISTS `events`;
CREATE TABLE IF NOT EXISTS `events` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `sub_name` varchar(255) DEFAULT NULL,
  `url_name` varchar(255) NOT NULL,
  `image_path` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Дамп даних таблиці `events`
--

INSERT INTO `events` (`id`, `name`, `sub_name`, `url_name`, `image_path`) VALUES
(1, 'Майстер-клас з печворку', 'Шиємо косметичку з Богданою Войтенко', 'master-class', 'views/img/gallery/gallery/3.jpg'),
(2, 'Благодійний швейний марафон', '\"Поший_купи_собаку\"', 'shveynui-marafon', 'views/img/gallery/gallery/4.jpg'),
(3, 'Робочі моменти', NULL, 'work-moments', 'views/img/gallery/gallery/1.jpg'),
(4, 'Модна школа', NULL, 'fashion-school', 'views/img/gallery/gallery/5.jpg'),
(5, 'Хенд-мейд табір', NULL, 'hand-made', 'views/img/gallery/gallery/6.jpg');

-- --------------------------------------------------------

--
-- Структура таблиці `images`
--

DROP TABLE IF EXISTS `images`;
CREATE TABLE IF NOT EXISTS `images` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image_path` text NOT NULL,
  `event_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Дамп даних таблиці `images`
--

INSERT INTO `images` (`id`, `name`, `image_path`, `event_id`) VALUES
(0, NULL, 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg', 1),
(0, NULL, 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg', 2),
(0, NULL, 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).jpg', 3),
(0, NULL, 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg', 4),
(0, NULL, 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).jpg', 5);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
