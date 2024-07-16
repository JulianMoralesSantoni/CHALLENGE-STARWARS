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
-- Table structure for table `starship`
--

DROP TABLE IF EXISTS `starship`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `starship` (
  `id_starship` int NOT NULL AUTO_INCREMENT,
  `url_starship` varchar(255) DEFAULT NULL,
  `name_starship` varchar(255) DEFAULT NULL,
  `modelo_starship` varchar(255) DEFAULT NULL,
  `class_starship` varchar(255) DEFAULT NULL,
  `url_sincronizated` tinyint NOT NULL,
  `star_date` datetime NOT NULL,
  `edited` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id_starship`)
) ENGINE=InnoDB AUTO_INCREMENT=124 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `starship`
--

LOCK TABLES `starship` WRITE;
/*!40000 ALTER TABLE `starship` DISABLE KEYS */;
INSERT INTO `starship` VALUES (2,'https://swapi.dev/api/people/2/',NULL,NULL,NULL,0,'2024-07-15 19:45:48',NULL,NULL),(3,'https://swapi.dev/api/people/3/',NULL,NULL,NULL,0,'2024-07-15 19:45:48',NULL,NULL),(44,'https://swapi.dev/api/starships/2/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(45,'https://swapi.dev/api/starships/32/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(46,'https://swapi.dev/api/starships/48/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(47,'https://swapi.dev/api/starships/59/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(48,'https://swapi.dev/api/starships/61/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(49,'https://swapi.dev/api/starships/63/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(50,'https://swapi.dev/api/starships/64/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(51,'https://swapi.dev/api/starships/65/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(52,'https://swapi.dev/api/starships/66/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(53,'https://swapi.dev/api/starships/68/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(54,'https://swapi.dev/api/starships/74/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(55,'https://swapi.dev/api/starships/75/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(73,'https://swapi.dev/api/starships/2/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(74,'https://swapi.dev/api/starships/3/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(75,'https://swapi.dev/api/starships/5/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(76,'https://swapi.dev/api/starships/9/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(77,'https://swapi.dev/api/starships/10/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(78,'https://swapi.dev/api/starships/11/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(79,'https://swapi.dev/api/starships/12/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(80,'https://swapi.dev/api/starships/13/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(81,'https://swapi.dev/api/starships/3/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(82,'https://swapi.dev/api/starships/10/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(83,'https://swapi.dev/api/starships/11/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(84,'https://swapi.dev/api/starships/12/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(85,'https://swapi.dev/api/starships/15/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(86,'https://swapi.dev/api/starships/17/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(87,'https://swapi.dev/api/starships/21/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(88,'https://swapi.dev/api/starships/22/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(89,'https://swapi.dev/api/starships/23/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(90,'https://swapi.dev/api/starships/2/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(91,'https://swapi.dev/api/starships/3/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(92,'https://swapi.dev/api/starships/10/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(93,'https://swapi.dev/api/starships/11/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(94,'https://swapi.dev/api/starships/12/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(95,'https://swapi.dev/api/starships/15/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(96,'https://swapi.dev/api/starships/17/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(97,'https://swapi.dev/api/starships/22/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(98,'https://swapi.dev/api/starships/23/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(99,'https://swapi.dev/api/starships/27/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(100,'https://swapi.dev/api/starships/28/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(101,'https://swapi.dev/api/starships/29/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(102,'https://swapi.dev/api/starships/31/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(103,'https://swapi.dev/api/starships/32/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(104,'https://swapi.dev/api/starships/39/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(105,'https://swapi.dev/api/starships/40/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(106,'https://swapi.dev/api/starships/41/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(107,'https://swapi.dev/api/starships/21/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(108,'https://swapi.dev/api/starships/32/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(109,'https://swapi.dev/api/starships/39/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(110,'https://swapi.dev/api/starships/43/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(111,'https://swapi.dev/api/starships/47/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(112,'https://swapi.dev/api/starships/48/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(113,'https://swapi.dev/api/starships/49/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(114,'https://swapi.dev/api/starships/52/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(115,'https://swapi.dev/api/starships/58/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(116,'https://swapi.dev/api/starships/2/',NULL,NULL,NULL,1,'2024-07-15 19:52:20',NULL,NULL),(117,'https://swapi.dev/api/starships/3/',NULL,NULL,NULL,1,'2024-07-15 19:52:20',NULL,NULL),(118,'https://swapi.dev/api/starships/5/',NULL,NULL,NULL,1,'2024-07-15 19:52:20',NULL,NULL),(119,'https://swapi.dev/api/starships/9/',NULL,NULL,NULL,1,'2024-07-15 19:52:20',NULL,NULL),(120,'https://swapi.dev/api/starships/10/',NULL,NULL,NULL,1,'2024-07-15 19:52:20',NULL,NULL),(121,'https://swapi.dev/api/starships/11/',NULL,NULL,NULL,1,'2024-07-15 19:52:20',NULL,NULL),(122,'https://swapi.dev/api/starships/12/',NULL,NULL,NULL,1,'2024-07-15 19:52:20',NULL,NULL),(123,'https://swapi.dev/api/starships/13/',NULL,NULL,NULL,1,'2024-07-15 19:52:20',NULL,NULL);
/*!40000 ALTER TABLE `starship` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-15 20:11:48
