-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: bd_challenge
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `articlestarship`
--

DROP TABLE IF EXISTS `articlestarship`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articlestarship` (
  `id_article_starship` int NOT NULL AUTO_INCREMENT,
  `star_date` datetime NOT NULL,
  `end_date` datetime DEFAULT NULL,
  `id_starship` int DEFAULT NULL,
  `id_article` int DEFAULT NULL,
  PRIMARY KEY (`id_article_starship`),
  KEY `FK_ebde1c94a618dbcea3433fd884f` (`id_starship`),
  KEY `FK_f03bb43f5584c605c7acc1b8040` (`id_article`),
  CONSTRAINT `FK_ebde1c94a618dbcea3433fd884f` FOREIGN KEY (`id_starship`) REFERENCES `starship` (`id_starship`),
  CONSTRAINT `FK_f03bb43f5584c605c7acc1b8040` FOREIGN KEY (`id_article`) REFERENCES `article` (`id_article`)
) ENGINE=InnoDB AUTO_INCREMENT=119 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articlestarship`
--

LOCK TABLES `articlestarship` WRITE;
/*!40000 ALTER TABLE `articlestarship` DISABLE KEYS */;
INSERT INTO `articlestarship` VALUES (44,'2024-07-15 02:44:19',NULL,44,2),(45,'2024-07-15 02:44:19',NULL,45,2),(46,'2024-07-15 02:44:19',NULL,46,2),(47,'2024-07-15 02:44:19',NULL,47,2),(48,'2024-07-15 02:44:19',NULL,48,2),(49,'2024-07-15 02:44:19',NULL,49,2),(50,'2024-07-15 02:44:19',NULL,50,2),(51,'2024-07-15 02:44:19',NULL,51,2),(52,'2024-07-15 02:44:19',NULL,52,2),(53,'2024-07-15 02:44:19',NULL,53,2),(54,'2024-07-15 02:44:19',NULL,54,2),(55,'2024-07-15 02:44:19',NULL,55,2),(66,'2024-07-15 03:05:43','2024-07-15 19:52:20',73,8),(67,'2024-07-15 03:05:43','2024-07-15 19:52:20',74,8),(68,'2024-07-15 03:05:43','2024-07-15 19:52:20',75,8),(69,'2024-07-15 03:05:43','2024-07-15 19:52:20',76,8),(70,'2024-07-15 03:05:43','2024-07-15 19:52:20',77,8),(71,'2024-07-15 03:05:43','2024-07-15 19:52:20',78,8),(72,'2024-07-15 03:05:43','2024-07-15 19:52:20',79,8),(73,'2024-07-15 03:05:43','2024-07-15 19:52:20',80,8),(74,'2024-07-15 03:05:43',NULL,81,9),(75,'2024-07-15 03:05:43',NULL,82,9),(76,'2024-07-15 03:05:43',NULL,83,9),(77,'2024-07-15 03:05:43',NULL,84,9),(78,'2024-07-15 03:05:43',NULL,85,9),(79,'2024-07-15 03:05:43',NULL,86,9),(80,'2024-07-15 03:05:43',NULL,87,9),(81,'2024-07-15 03:05:43',NULL,88,9),(82,'2024-07-15 03:05:43',NULL,89,9),(83,'2024-07-15 03:05:43',NULL,90,10),(84,'2024-07-15 03:05:43',NULL,91,10),(85,'2024-07-15 03:05:43',NULL,92,10),(86,'2024-07-15 03:05:43',NULL,93,10),(87,'2024-07-15 03:05:43',NULL,94,10),(88,'2024-07-15 03:05:43',NULL,95,10),(89,'2024-07-15 03:05:43',NULL,96,10),(90,'2024-07-15 03:05:43',NULL,97,10),(91,'2024-07-15 03:05:43',NULL,98,10),(92,'2024-07-15 03:05:43',NULL,99,10),(93,'2024-07-15 03:05:43',NULL,100,10),(94,'2024-07-15 03:05:43',NULL,101,10),(95,'2024-07-15 03:05:43',NULL,102,11),(96,'2024-07-15 03:05:43',NULL,103,11),(97,'2024-07-15 03:05:43',NULL,104,11),(98,'2024-07-15 03:05:43',NULL,105,11),(99,'2024-07-15 03:05:43',NULL,106,11),(100,'2024-07-15 03:05:43',NULL,107,12),(101,'2024-07-15 03:05:43',NULL,108,12),(102,'2024-07-15 03:05:43',NULL,109,12),(103,'2024-07-15 03:05:43',NULL,110,12),(104,'2024-07-15 03:05:43',NULL,111,12),(105,'2024-07-15 03:05:43',NULL,112,12),(106,'2024-07-15 03:05:43',NULL,113,12),(107,'2024-07-15 03:05:43',NULL,114,12),(108,'2024-07-15 03:05:43',NULL,115,12),(109,'2024-07-15 19:45:48',NULL,2,13),(110,'2024-07-15 19:45:48',NULL,3,13),(111,'2024-07-15 19:52:20',NULL,116,8),(112,'2024-07-15 19:52:20',NULL,117,8),(113,'2024-07-15 19:52:20',NULL,118,8),(114,'2024-07-15 19:52:20',NULL,119,8),(115,'2024-07-15 19:52:20',NULL,120,8),(116,'2024-07-15 19:52:20',NULL,121,8),(117,'2024-07-15 19:52:20',NULL,122,8),(118,'2024-07-15 19:52:20',NULL,123,8);
/*!40000 ALTER TABLE `articlestarship` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-15 20:11:49
