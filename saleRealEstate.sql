-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 23 2023 г., 20:31
-- Версия сервера: 8.0.30
-- Версия PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `saleRealEstate`
--

-- --------------------------------------------------------

--
-- Структура таблицы `apartamentInfos`
--

CREATE TABLE `apartamentInfos` (
  `id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `apartamentId` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `apartamentInfos`
--

INSERT INTO `apartamentInfos` (`id`, `title`, `description`, `createdAt`, `updatedAt`, `apartamentId`) VALUES
(1, 'Этаж', '7', '2023-05-09 12:32:21', '2023-05-09 12:32:21', 1),
(2, 'Корпус', '1.1', '2023-05-09 12:32:21', '2023-05-09 12:32:21', 1),
(3, 'Дата', 'до 25 марта 2025', '2023-05-09 12:32:21', '2023-05-09 12:32:21', 1),
(4, 'Площадь', '29.5', '2023-05-09 12:32:21', '2023-05-09 12:32:21', 1),
(5, 'Высота потолков', '3', '2023-05-09 12:32:21', '2023-05-09 12:32:21', 1),
(6, 'Прописка', 'Москва', '2023-05-09 12:32:21', '2023-05-09 12:32:21', 1),
(7, 'Дата', 'до 25 марта 2025', '2023-05-09 12:32:21', '2023-05-09 12:32:21', 2),
(8, 'Площадь', '19.5', '2023-05-09 12:32:21', '2023-05-09 12:32:21', 2),
(9, 'Высота потолков', '3', '2023-05-09 12:32:21', '2023-05-09 12:32:21', 2),
(10, 'Прописка', 'Москва', '2023-05-09 12:32:21', '2023-05-09 12:32:21', 2),
(11, 'Этаж', '2', '2023-05-09 12:32:21', '2023-05-09 12:32:21', 2),
(12, 'Корпус', '1.1', '2023-05-09 12:32:21', '2023-05-09 12:32:21', 2);

-- --------------------------------------------------------

--
-- Структура таблицы `apartamentPhotos`
--

CREATE TABLE `apartamentPhotos` (
  `id` int NOT NULL,
  `linkPhoto` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `apartamentId` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `apartamentPhotos`
--

INSERT INTO `apartamentPhotos` (`id`, `linkPhoto`, `createdAt`, `updatedAt`, `apartamentId`) VALUES
(1, '3_90_sSFY6e7qB1TJ589i.svg', '2023-05-21 10:12:38', '2023-05-21 10:12:38', 1),
(2, '8_1ns1_3.6-1_Qv9LXYAB2b347pja.svg', '2023-05-21 10:12:38', '2023-05-21 10:12:38', 2);

-- --------------------------------------------------------

--
-- Структура таблицы `apartaments`
--

CREATE TABLE `apartaments` (
  `id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `apartamentTypeId` int DEFAULT NULL,
  `districtId` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `apartaments`
--

INSERT INTO `apartaments` (`id`, `title`, `price`, `createdAt`, `updatedAt`, `apartamentTypeId`, `districtId`) VALUES
(1, '1 комнатная квартира', 8300000, '2023-05-09 12:30:11', '2023-05-09 12:30:11', 2, 1),
(2, 'Студия', 5432000, '2023-05-09 12:30:11', '2023-05-09 12:30:11', 1, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `apartamentTypes`
--

CREATE TABLE `apartamentTypes` (
  `id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `apartamentTypes`
--

INSERT INTO `apartamentTypes` (`id`, `title`, `createdAt`, `updatedAt`) VALUES
(1, 'Студия', '2023-05-09 12:25:46', '2023-05-09 12:25:46'),
(2, '1', '2023-05-09 12:25:46', '2023-05-09 12:25:46'),
(3, '2', '2023-05-09 12:25:46', '2023-05-09 12:25:46'),
(4, '3', '2023-05-09 12:25:46', '2023-05-09 12:25:46'),
(5, '3+', '2023-05-09 12:25:46', '2023-05-09 12:25:46');

-- --------------------------------------------------------

--
-- Структура таблицы `chats`
--

CREATE TABLE `chats` (
  `id` int NOT NULL,
  `userId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `districtPhotos`
--

CREATE TABLE `districtPhotos` (
  `id` int NOT NULL,
  `linkPhoto` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `districtId` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `districtPhotos`
--

INSERT INTO `districtPhotos` (`id`, `linkPhoto`, `createdAt`, `updatedAt`, `districtId`) VALUES
(1, '66eb594b-d05e-4bfe-b7bb-2d513bba5beb.jpg', '2023-05-21 10:09:03', '2023-05-21 10:09:03', 1),
(2, '66eb594b-d05e-4bfe-b7bb-2d513bba5beb.jpg', '2023-05-21 10:09:03', '2023-05-21 10:09:03', 2);

-- --------------------------------------------------------

--
-- Структура таблицы `districts`
--

CREATE TABLE `districts` (
  `id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `metro` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `districts`
--

INSERT INTO `districts` (`id`, `title`, `metro`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'ЖК Солнцево', 'Солнцево', 'Хороший район', '2023-05-09 12:27:20', '2023-05-09 12:27:20'),
(2, 'ЖК Рассказовка', 'Рассказовка', 'Хороший район', '2023-05-09 12:27:20', '2023-05-09 12:27:20');

-- --------------------------------------------------------

--
-- Структура таблицы `FavApartaments`
--

CREATE TABLE `FavApartaments` (
  `id` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `favListId` int DEFAULT NULL,
  `apartamentId` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `favLists`
--

CREATE TABLE `favLists` (
  `id` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `messages`
--

CREATE TABLE `messages` (
  `id` int NOT NULL,
  `message` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `chatId` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `passports`
--

CREATE TABLE `passports` (
  `id` int NOT NULL,
  `pasNumber` varchar(255) NOT NULL,
  `pasCode` varchar(255) NOT NULL,
  `pasGet` varchar(255) NOT NULL,
  `pasDate` varchar(255) NOT NULL,
  `userDate` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `passports`
--

INSERT INTO `passports` (`id`, `pasNumber`, `pasCode`, `pasGet`, `pasDate`, `userDate`, `createdAt`, `updatedAt`, `userId`) VALUES
(1, '1234567890', '123456', 'МДВ РОССИИ ПО ГОР. МОСКВЕ', '2023-05-19', '2002-07-17', '2023-05-22 17:06:38', '2023-05-23 06:24:59', 8);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `FIO` varchar(255) NOT NULL,
  `phoneNumber` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) DEFAULT 'USER',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `FIO`, `phoneNumber`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(7, 'Копаненко Игорь Сергеевич', 'admin', '$2b$05$MLHYAaO2t/IOEZ2Xld3MVuS3xwOSyEpQwcnqMygjOcGDJdrgq.Q5e', 'ADMIN', '2023-05-21 07:32:09', '2023-05-21 07:32:09'),
(8, 'Федор Кишбекович Салогуб', 'user', '$2b$05$1913QBVBnubWBjI0L6d1Me2PGYt2EouZiANTnDSHNwBjujjRrQPq.', 'USER', '2023-05-21 07:33:13', '2023-05-21 07:33:13');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `apartamentInfos`
--
ALTER TABLE `apartamentInfos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `apartamentId` (`apartamentId`);

--
-- Индексы таблицы `apartamentPhotos`
--
ALTER TABLE `apartamentPhotos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `apartamentId` (`apartamentId`);

--
-- Индексы таблицы `apartaments`
--
ALTER TABLE `apartaments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `apartamentTypeId` (`apartamentTypeId`),
  ADD KEY `districtId` (`districtId`);

--
-- Индексы таблицы `apartamentTypes`
--
ALTER TABLE `apartamentTypes`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `chats`
--
ALTER TABLE `chats`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `userId` (`userId`);

--
-- Индексы таблицы `districtPhotos`
--
ALTER TABLE `districtPhotos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `districtId` (`districtId`);

--
-- Индексы таблицы `districts`
--
ALTER TABLE `districts`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `FavApartaments`
--
ALTER TABLE `FavApartaments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `favListId` (`favListId`),
  ADD KEY `apartamentId` (`apartamentId`);

--
-- Индексы таблицы `favLists`
--
ALTER TABLE `favLists`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Индексы таблицы `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `chatId` (`chatId`);

--
-- Индексы таблицы `passports`
--
ALTER TABLE `passports`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `pasNumber` (`pasNumber`),
  ADD KEY `userId` (`userId`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `phoneNumber` (`phoneNumber`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `apartamentInfos`
--
ALTER TABLE `apartamentInfos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `apartamentPhotos`
--
ALTER TABLE `apartamentPhotos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `apartaments`
--
ALTER TABLE `apartaments`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `apartamentTypes`
--
ALTER TABLE `apartamentTypes`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `chats`
--
ALTER TABLE `chats`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `districtPhotos`
--
ALTER TABLE `districtPhotos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `districts`
--
ALTER TABLE `districts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `FavApartaments`
--
ALTER TABLE `FavApartaments`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `favLists`
--
ALTER TABLE `favLists`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `passports`
--
ALTER TABLE `passports`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `apartamentInfos`
--
ALTER TABLE `apartamentInfos`
  ADD CONSTRAINT `apartamentinfos_ibfk_1` FOREIGN KEY (`apartamentId`) REFERENCES `apartaments` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `apartamentPhotos`
--
ALTER TABLE `apartamentPhotos`
  ADD CONSTRAINT `apartamentphotos_ibfk_1` FOREIGN KEY (`apartamentId`) REFERENCES `apartaments` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `apartaments`
--
ALTER TABLE `apartaments`
  ADD CONSTRAINT `apartaments_ibfk_1` FOREIGN KEY (`apartamentTypeId`) REFERENCES `apartamentTypes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `apartaments_ibfk_2` FOREIGN KEY (`districtId`) REFERENCES `districts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `chats`
--
ALTER TABLE `chats`
  ADD CONSTRAINT `chats_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `districtPhotos`
--
ALTER TABLE `districtPhotos`
  ADD CONSTRAINT `districtphotos_ibfk_1` FOREIGN KEY (`districtId`) REFERENCES `districts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `FavApartaments`
--
ALTER TABLE `FavApartaments`
  ADD CONSTRAINT `favapartaments_ibfk_1` FOREIGN KEY (`favListId`) REFERENCES `favLists` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `favapartaments_ibfk_2` FOREIGN KEY (`apartamentId`) REFERENCES `apartaments` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `favLists`
--
ALTER TABLE `favLists`
  ADD CONSTRAINT `favlists_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`chatId`) REFERENCES `chats` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `passports`
--
ALTER TABLE `passports`
  ADD CONSTRAINT `passports_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
