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
-- Table structure for table `specie`
--

DROP TABLE IF EXISTS `specie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `specie` (
  `id_specie` int NOT NULL AUTO_INCREMENT,
  `url_specie` varchar(255) DEFAULT NULL,
  `language_specie` varchar(15) DEFAULT NULL,
  `name_specie` varchar(15) DEFAULT NULL,
  `description_specie` varchar(1000) DEFAULT NULL,
  `url_sincronizated` tinyint NOT NULL,
  `star_date` datetime NOT NULL,
  `edited` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id_specie`)
) ENGINE=InnoDB AUTO_INCREMENT=185 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `specie`
--

LOCK TABLES `specie` WRITE;
/*!40000 ALTER TABLE `specie` DISABLE KEYS */;
INSERT INTO `specie` VALUES (4,'https://swapi.dev/api/people/4/',NULL,NULL,NULL,0,'2024-07-15 19:45:48',NULL,NULL),(5,'https://swapi.dev/api/people/5/',NULL,NULL,NULL,0,'2024-07-15 19:45:48',NULL,NULL),(6,'https://swapi.dev/api/species/1/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(12,'https://swapi.dev/api/species/2/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(18,'https://swapi.dev/api/species/3/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(24,'https://swapi.dev/api/species/6/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(29,'https://swapi.dev/api/species/15/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(33,'https://swapi.dev/api/species/19/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(37,'https://swapi.dev/api/species/20/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(41,'https://swapi.dev/api/species/23/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(45,'https://swapi.dev/api/species/24/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(48,'https://swapi.dev/api/species/25/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(51,'https://swapi.dev/api/species/26/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(54,'https://swapi.dev/api/species/27/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(57,'https://swapi.dev/api/species/28/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(60,'https://swapi.dev/api/species/29/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(63,'https://swapi.dev/api/species/30/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(65,'https://swapi.dev/api/species/33/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(67,'https://swapi.dev/api/species/34/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(69,'https://swapi.dev/api/species/35/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(71,'https://swapi.dev/api/species/36/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(73,'https://swapi.dev/api/species/37/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(127,'https://swapi.dev/api/species/1/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(128,'https://swapi.dev/api/species/2/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(129,'https://swapi.dev/api/species/3/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(130,'https://swapi.dev/api/species/4/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(131,'https://swapi.dev/api/species/5/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(132,'https://swapi.dev/api/species/1/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(133,'https://swapi.dev/api/species/2/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(134,'https://swapi.dev/api/species/3/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(135,'https://swapi.dev/api/species/6/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(136,'https://swapi.dev/api/species/7/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(137,'https://swapi.dev/api/species/1/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(138,'https://swapi.dev/api/species/2/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(139,'https://swapi.dev/api/species/3/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(140,'https://swapi.dev/api/species/5/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(141,'https://swapi.dev/api/species/6/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(142,'https://swapi.dev/api/species/8/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(143,'https://swapi.dev/api/species/9/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(144,'https://swapi.dev/api/species/10/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(145,'https://swapi.dev/api/species/15/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(146,'https://swapi.dev/api/species/1/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(147,'https://swapi.dev/api/species/2/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(148,'https://swapi.dev/api/species/6/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(149,'https://swapi.dev/api/species/11/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(150,'https://swapi.dev/api/species/12/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(151,'https://swapi.dev/api/species/13/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(152,'https://swapi.dev/api/species/14/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(153,'https://swapi.dev/api/species/15/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(154,'https://swapi.dev/api/species/16/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(155,'https://swapi.dev/api/species/17/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(156,'https://swapi.dev/api/species/18/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(157,'https://swapi.dev/api/species/19/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(158,'https://swapi.dev/api/species/20/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(159,'https://swapi.dev/api/species/21/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(160,'https://swapi.dev/api/species/22/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(161,'https://swapi.dev/api/species/23/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(162,'https://swapi.dev/api/species/24/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(163,'https://swapi.dev/api/species/25/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(164,'https://swapi.dev/api/species/26/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(165,'https://swapi.dev/api/species/27/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(166,'https://swapi.dev/api/species/1/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(167,'https://swapi.dev/api/species/2/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(168,'https://swapi.dev/api/species/6/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(169,'https://swapi.dev/api/species/12/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(170,'https://swapi.dev/api/species/13/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(171,'https://swapi.dev/api/species/15/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(172,'https://swapi.dev/api/species/28/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(173,'https://swapi.dev/api/species/29/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(174,'https://swapi.dev/api/species/30/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(175,'https://swapi.dev/api/species/31/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(176,'https://swapi.dev/api/species/32/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(177,'https://swapi.dev/api/species/33/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(178,'https://swapi.dev/api/species/34/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(179,'https://swapi.dev/api/species/35/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(180,'https://swapi.dev/api/species/1/',NULL,NULL,NULL,1,'2024-07-15 19:52:20',NULL,NULL),(181,'https://swapi.dev/api/species/2/',NULL,NULL,NULL,1,'2024-07-15 19:52:20',NULL,NULL),(182,'https://swapi.dev/api/species/3/',NULL,NULL,NULL,1,'2024-07-15 19:52:20',NULL,NULL),(183,'https://swapi.dev/api/species/4/',NULL,NULL,NULL,1,'2024-07-15 19:52:20',NULL,NULL),(184,'https://swapi.dev/api/species/5/',NULL,NULL,NULL,1,'2024-07-15 19:52:20',NULL,NULL);
/*!40000 ALTER TABLE `specie` ENABLE KEYS */;
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
