-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Авг 15 2024 г., 23:43
-- Версия сервера: 10.4.32-MariaDB
-- Версия PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `kate_tutor`
--

-- --------------------------------------------------------

--
-- Структура таблицы `menu`
--

CREATE TABLE `menu` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `link` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Дамп данных таблицы `menu`
--

INSERT INTO `menu` (`id`, `name`, `link`) VALUES
(1, 'Главная', '/'),
(2, 'Об уроках', '/about-lessons'),
(5, 'отзывы', '/#reviews'),
(6, 'проконсультироваться', 'consult'),
(7, 'Мессенджеры', '/#tgWpVk');

-- --------------------------------------------------------

--
-- Структура таблицы `section2_item`
--

CREATE TABLE `section2_item` (
  `id` int(11) NOT NULL,
  `headline` varchar(45) NOT NULL,
  `description` varchar(100) NOT NULL,
  `description_link` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Дамп данных таблицы `section2_item`
--

INSERT INTO `section2_item` (`id`, `headline`, `description`, `description_link`) VALUES
(1, 'Заголовок', '1 Ну тут уже будет какой-то коротенький текст вот Ну тут уже будет какой-то коротенький текст вот', '/img/section_2__item/item1.png'),
(2, 'Заголовок', '2 Ну тут уже будет какой-то коротенький текст вот Ну тут уже будет какой-то коротенький текст вот', '/img/section_2__item/item2.png'),
(3, 'Заголовок', '3 Ну тут уже будет какой-то коротенький текст вот Ну тут уже будет какой-то коротенький текст вот', '/img/section_2__item/item3.png'),
(4, 'Заголовок', '4 Ну тут уже будет какой-то коротенький текст вот Ну тут уже будет какой-то коротенький текст вот', '/img/section_2__item/item4.png');

-- --------------------------------------------------------

--
-- Структура таблицы `section6_messengers`
--

CREATE TABLE `section6_messengers` (
  `id` int(11) NOT NULL,
  `kate` varchar(400) NOT NULL,
  `student` varchar(400) NOT NULL,
  `link` varchar(200) NOT NULL,
  `link_with_text` varchar(200) NOT NULL,
  `bg` varchar(110) NOT NULL,
  `color` varchar(50) NOT NULL,
  `img` varchar(200) NOT NULL,
  `name` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Дамп данных таблицы `section6_messengers`
--

INSERT INTO `section6_messengers` (`id`, `kate`, `student`, `link`, `link_with_text`, `bg`, `color`, `img`, `name`) VALUES
(1, 'соо бще н ие Соо бщен ие Сообщен ие Со общение|соо бще н ие Соо бщен ие Сообщен ие Со общение|соо бще н ие Соо бщен ие Сообщен ие Со общение|соо бще н ие Соо бщен ие Сообщен ие Со общение|соо б', 'соо бще н ие Соо бщен ие Сообщен ие Со общение|соо бще н ие Соо бщен ие Сообщен ие Со общение|соо бще н ие Соо бщен ие Сообщен ие Со общение|соо бще н ие Соо бщен ие Сообщен ие Со общение|соо б', 'https://vk.me/ksx.kate', '', '/img/section_6_messengers/vk/vk_bg.png', 'FFFFFF ECEDF1 CCE4FF', '/img/section_6_messengers/vk.png', 'vk'),
(2, 'соо бще н ие Соо бщен ие Сообщен ие Со общение|соо бще н ие Соо бщен ие Сообщен ие Со общение|соо бще н ие Соо бщен ие Сообщен ие Со общение|соо бще н ие Соо бщен ие Сообщен ие Со общение', 'соо бще н ие Соо бщен ие Сообщен ие Со общение|соо бще н ие Соо бщен ие Сообщен ие Со общение|соо бще н ие Соо бщен ие Сообщен ие Со общение|соо бще н ие Соо бщен ие Сообщен ие Со общение|соо б', 'https://wa.me/79083388325', '', '/img/section_6_messengers/wp/wp_bg.png', 'DBFFE7 FFFFFF', '/img/section_6_messengers/wp.png', 'wp'),
(3, 'соо бще н ие Соо бщен ие Сообщен ие Со общение|соо бще н ие Соо бщен ие Сообщен ие Со общение|соо бще н ие Соо бщен ие Сообщен ие Со общение|соо бще н ие Соо бщен ие Сообщен ие Со общение', 'соо бще н ие Соо бщен ие Сообщен ие Со общение|соо бще н ие Соо бщен ие Сообщен ие Со общение|соо бще н ие Соо бщен ие Сообщен ие Со общение|соо бще н ие Соо бщен ие Сообщен ие Со общение|соо б', 'tg://resolve?domain=ksx_kate', '', '/img/section_6_messengers/tg/bg.png', '527CA4 FFFFFF C9E5FF', '/img/section_6_messengers/tg.png', 'tg');

-- --------------------------------------------------------

--
-- Структура таблицы `section7_items`
--

CREATE TABLE `section7_items` (
  `id` int(11) NOT NULL,
  `headline` varchar(50) NOT NULL,
  `p` varchar(140) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Дамп данных таблицы `section7_items`
--

INSERT INTO `section7_items` (`id`, `headline`, `p`) VALUES
(1, 'Заголовок', 'Ну тут уже будет какой-то коротенький текст вот Ну тут уже будет какой-то коротенький текст в'),
(2, 'Заголовок', 'Ну тут уже будет какой-то коротенький dv\r\ndvvтекст вот Ну тут уже '),
(3, 'Заголовок', 'Ну тут уже будет какой-то коротенький текст вот Ну тут уже будет какой-то коротеньк'),
(4, 'Заголовок', 'Ну тут уже будет какой-то коротенький dv\r\ndvvтекст вот Ну тут уже буде');

-- --------------------------------------------------------

--
-- Структура таблицы `section8_rating`
--

CREATE TABLE `section8_rating` (
  `id` int(11) NOT NULL,
  `name` varchar(6) NOT NULL,
  `headline` varchar(20) NOT NULL,
  `rating` int(11) NOT NULL,
  `body` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Дамп данных таблицы `section8_rating`
--

INSERT INTO `section8_rating` (`id`, `name`, `headline`, `rating`, `body`) VALUES
(1, 'avito', 'Екатерина', 5, 'Тут будет текст отзыва Тут будет текст отзыва Тут будет текст отзыва Тут будет текст отзыва \r\nТут будет текст отзыва'),
(2, 'avito', 'Екатерина', 4, 'Тут будет текст отзыва Тут будет текст отзыва Тут будет текст отзыва Тут будет текст отзыва \r\nТут будет текст отзыва'),
(3, 'avito', 'Екатерина', 5, 'Тут будет текст отзыва Тут будет текст отзыва Тут будет текст отзыва Тут будет текст отзыва \r\nТут будет текст отзыва'),
(4, 'avito', 'Екатерина', 4, 'Тут будет текст отзыва Тут будет текст отзыва Тут будет текст отзыва Тут будет текст отзыва \r\nТут будет текст отзыва'),
(5, 'profi', 'Екатерина', 4, 'Тут будет текст отзыва Тут будет текст отзыва Тут будет текст отзыва Тут будет текст  \r\nТут будет текст отзыва'),
(6, 'profi', 'Екатерина', 4, 'Тут будет текст отзыва Тут будет текст отзыва Тут будет текст отзыва текст  \r\nТут будет текст отзыва'),
(7, 'profi', 'Екатерина', 5, 'Тут будет текст отзыва Тут будет текст отзыва Тут будет текст отзыва текст  Тут бу\r\nТут будет текст отзываТут бу'),
(8, 'profi', 'Екатерина', 5, 'Тут будет текст отзыва Тут будет текст отзыва Тут будет текст отзыва текст  Тут бу\r\nТут будет текст отзыва'),
(9, 'profi', 'Екатерина', 3, '555 1Тут будет текст отзыва Тут будет текст отзыва Тут будет текст отзыва тdекст  Тут бу\r\nТут будет текст отзыва'),
(10, 'profi', 'Екатерина', 1, '555 1Тут будет текст отзыва Тут будет текст отзыва Тут будет текст отdvdvзыва тdекст  Тут бу\r\nТут будет теfкст отзыва'),
(11, 'avito', 'Екатерина', 1, 'Тут будет текст отзыва Тут будет текст отзыва Тут будет текст отзыва Тут будет текст отзыва \r\nТут будет текст отзыва'),
(12, 'avito', 'Екатерина', 2, 'Тут будет текст отзыва Тут будет текст отзыва Тут будет текст отзыва Тут будет текст отзыва \r\nТут будет текст отзыва'),
(13, 'avito', 'Екатерина', 3, 'Тут будет текст отзыва Тут будет текст отзыва Тут будет текст отзыва Тут будет текст отзыва \r\nТут будет текст отзыва');

-- --------------------------------------------------------

--
-- Структура таблицы `stages`
--

CREATE TABLE `stages` (
  `id` int(11) NOT NULL,
  `color` varchar(6) NOT NULL,
  `headline` varchar(40) NOT NULL,
  `description` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Дамп данных таблицы `stages`
--

INSERT INTO `stages` (`id`, `color`, `headline`, `description`) VALUES
(1, '7c44d7', 'Первый этап тут', 'Первый этап тутПервый этап тутПервый этап тутПервый этап тутПервый этап тутПервый этап тутПервый этап тут\r\nПервый этап тутПе рвый этап тут\r\nПервый эта'),
(2, 'd836C4', 'Первый этап тут', 'Первый этап тутПервый этап тутПервый этап тутПервый этап тутПервый этап тутПервый этап тутПервый этап тут\r\nПервый этап тутПе рвый этап тут\r\nПервый эта'),
(3, 'daC20A', 'Первый этап тут', 'Первый этап тутПервый этап тутПервый этап тутПервый этап тутПервый этап тутПервый этап тутПервый этап тут\r\nПервый этап тутПе рвый этап тут\r\nПервый эта'),
(4, '4C10ae', 'Первый этап тут', 'Первый этап тутПервый этап тутПервый этап тутПервый этап тутПервый этап тутПервый этап тутПервый этап тут\r\nПервый этап тутПе рвый этап тут\r\nПервый эта'),
(5, '1437ad', 'Первый этап тут', 'Первый этап тутПервый этап тутПервый этап тутПервый этап тутПервый этап тутПервый этап тутПервый этап тут\r\nПервый этап тутПе рвый этап тут\r\nПервый эта'),
(6, 'B1009b', 'Первый этап тут', 'Первый этап тутПервый этап тутПервый этап тутПервый этап тутПервый этап тутПервый этап тутПервый этап тут\r\nПервый этап тутПе рвый этап тут\r\nПервый эта'),
(7, '7c44D7', 'Первый этап тут', 'Первый этап тутПервый этап тутПервый этап тутПервый этап тутПервый этап тутПервый этап тутПервый этап тут\r\nПервый этап тутПе рвый этап тут\r\nПервый эта');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `section2_item`
--
ALTER TABLE `section2_item`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `section6_messengers`
--
ALTER TABLE `section6_messengers`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `section7_items`
--
ALTER TABLE `section7_items`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `section8_rating`
--
ALTER TABLE `section8_rating`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `stages`
--
ALTER TABLE `stages`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `section2_item`
--
ALTER TABLE `section2_item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `section6_messengers`
--
ALTER TABLE `section6_messengers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `section7_items`
--
ALTER TABLE `section7_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `section8_rating`
--
ALTER TABLE `section8_rating`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT для таблицы `stages`
--
ALTER TABLE `stages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
