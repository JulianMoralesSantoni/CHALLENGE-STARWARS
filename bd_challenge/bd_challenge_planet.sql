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
-- Table structure for table `planet`
--

DROP TABLE IF EXISTS `planet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `planet` (
  `id_planet` int NOT NULL AUTO_INCREMENT,
  `url_planet` varchar(255) DEFAULT NULL,
  `climate_planet` varchar(255) DEFAULT NULL,
  `name_planet` varchar(255) DEFAULT NULL,
  `gravity_planet` varchar(255) DEFAULT NULL,
  `url_sincronizated` tinyint NOT NULL,
  `star_date` datetime NOT NULL,
  `edited` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id_planet`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `planet`
--

LOCK TABLES `planet` WRITE;
/*!40000 ALTER TABLE `planet` DISABLE KEYS */;
INSERT INTO `planet` VALUES (4,'https://swapi.dev/api/people/4/',NULL,NULL,NULL,0,'2024-07-15 19:45:48',NULL,NULL),(5,'https://swapi.dev/api/people/5/',NULL,NULL,NULL,0,'2024-07-15 19:45:48',NULL,NULL),(21,'https://swapi.dev/api/planets/1/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(22,'https://swapi.dev/api/planets/2/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(23,'https://swapi.dev/api/planets/5/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(24,'https://swapi.dev/api/planets/8/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(25,'https://swapi.dev/api/planets/9/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(26,'https://swapi.dev/api/planets/12/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(27,'https://swapi.dev/api/planets/13/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(28,'https://swapi.dev/api/planets/14/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(29,'https://swapi.dev/api/planets/15/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(30,'https://swapi.dev/api/planets/16/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(31,'https://swapi.dev/api/planets/17/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(32,'https://swapi.dev/api/planets/18/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(33,'https://swapi.dev/api/planets/19/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(35,'https://swapi.dev/api/planets/1/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(36,'https://swapi.dev/api/planets/2/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(37,'https://swapi.dev/api/planets/3/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(38,'https://swapi.dev/api/planets/4/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(39,'https://swapi.dev/api/planets/5/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(40,'https://swapi.dev/api/planets/6/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(41,'https://swapi.dev/api/planets/27/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(42,'https://swapi.dev/api/planets/1/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(43,'https://swapi.dev/api/planets/5/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(44,'https://swapi.dev/api/planets/7/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(45,'https://swapi.dev/api/planets/8/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(46,'https://swapi.dev/api/planets/9/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(47,'https://swapi.dev/api/planets/1/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(48,'https://swapi.dev/api/planets/8/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(49,'https://swapi.dev/api/planets/9/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(50,'https://swapi.dev/api/planets/1/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(51,'https://swapi.dev/api/planets/8/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(52,'https://swapi.dev/api/planets/9/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(53,'https://swapi.dev/api/planets/10/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(54,'https://swapi.dev/api/planets/11/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(55,'https://swapi.dev/api/planets/1/',NULL,NULL,NULL,1,'2024-07-15 19:52:20',NULL,NULL),(56,'https://swapi.dev/api/planets/2/',NULL,NULL,NULL,1,'2024-07-15 19:52:20',NULL,NULL),(57,'https://swapi.dev/api/planets/3/',NULL,NULL,NULL,1,'2024-07-15 19:52:20',NULL,NULL);
/*!40000 ALTER TABLE `planet` ENABLE KEYS */;
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
