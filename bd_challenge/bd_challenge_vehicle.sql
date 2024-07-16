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
-- Table structure for table `vehicle`
--

DROP TABLE IF EXISTS `vehicle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicle` (
  `id_vehicle` int NOT NULL AUTO_INCREMENT,
  `url_vehicle` varchar(255) DEFAULT NULL,
  `name_vehicle` varchar(255) DEFAULT NULL,
  `modelo_vehicle` varchar(255) DEFAULT NULL,
  `class_vehicle` varchar(255) DEFAULT NULL,
  `url_sincronizated` tinyint NOT NULL,
  `star_date` datetime NOT NULL,
  `edited` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id_vehicle`)
) ENGINE=InnoDB AUTO_INCREMENT=116 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle`
--

LOCK TABLES `vehicle` WRITE;
/*!40000 ALTER TABLE `vehicle` DISABLE KEYS */;
INSERT INTO `vehicle` VALUES (2,'https://swapi.dev/api/people/2/','Ferrari Daytona','1972','Deportivo',0,'2024-07-14 22:40:24',NULL,NULL),(3,NULL,'Dodge Viper','2022','Deportivo',0,'2024-07-14 23:42:23',NULL,NULL),(5,'https://swapi.dev/api/people/5/',NULL,NULL,NULL,0,'2024-07-15 19:45:48',NULL,NULL),(34,'https://swapi.dev/api/vehicles/33/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(36,'https://swapi.dev/api/vehicles/50/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(38,'https://swapi.dev/api/vehicles/53/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(40,'https://swapi.dev/api/vehicles/56/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(42,'https://swapi.dev/api/vehicles/60/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(44,'https://swapi.dev/api/vehicles/62/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(46,'https://swapi.dev/api/vehicles/67/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(47,'https://swapi.dev/api/vehicles/69/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(48,'https://swapi.dev/api/vehicles/70/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(49,'https://swapi.dev/api/vehicles/71/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(50,'https://swapi.dev/api/vehicles/72/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(51,'https://swapi.dev/api/vehicles/73/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(52,'https://swapi.dev/api/vehicles/76/',NULL,NULL,NULL,1,'2024-07-15 02:44:19',NULL,NULL),(76,'https://swapi.dev/api/vehicles/4/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(77,'https://swapi.dev/api/vehicles/6/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(78,'https://swapi.dev/api/vehicles/7/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(79,'https://swapi.dev/api/vehicles/8/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(80,'https://swapi.dev/api/vehicles/8/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(81,'https://swapi.dev/api/vehicles/14/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(82,'https://swapi.dev/api/vehicles/16/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(83,'https://swapi.dev/api/vehicles/18/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(84,'https://swapi.dev/api/vehicles/19/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(85,'https://swapi.dev/api/vehicles/20/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(86,'https://swapi.dev/api/vehicles/8/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(87,'https://swapi.dev/api/vehicles/16/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(88,'https://swapi.dev/api/vehicles/18/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(89,'https://swapi.dev/api/vehicles/19/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(90,'https://swapi.dev/api/vehicles/24/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(91,'https://swapi.dev/api/vehicles/25/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(92,'https://swapi.dev/api/vehicles/26/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(93,'https://swapi.dev/api/vehicles/30/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(94,'https://swapi.dev/api/vehicles/33/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(95,'https://swapi.dev/api/vehicles/34/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(96,'https://swapi.dev/api/vehicles/35/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(97,'https://swapi.dev/api/vehicles/36/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(98,'https://swapi.dev/api/vehicles/37/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(99,'https://swapi.dev/api/vehicles/38/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(100,'https://swapi.dev/api/vehicles/42/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(101,'https://swapi.dev/api/vehicles/4/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(102,'https://swapi.dev/api/vehicles/44/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(103,'https://swapi.dev/api/vehicles/45/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(104,'https://swapi.dev/api/vehicles/46/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(105,'https://swapi.dev/api/vehicles/50/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(106,'https://swapi.dev/api/vehicles/51/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(107,'https://swapi.dev/api/vehicles/53/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(108,'https://swapi.dev/api/vehicles/54/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(109,'https://swapi.dev/api/vehicles/55/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(110,'https://swapi.dev/api/vehicles/56/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(111,'https://swapi.dev/api/vehicles/57/',NULL,NULL,NULL,1,'2024-07-15 03:05:43',NULL,NULL),(112,'https://swapi.dev/api/vehicles/4/',NULL,NULL,NULL,1,'2024-07-15 19:52:20',NULL,NULL),(113,'https://swapi.dev/api/vehicles/6/',NULL,NULL,NULL,1,'2024-07-15 19:52:20',NULL,NULL),(114,'https://swapi.dev/api/vehicles/7/',NULL,NULL,NULL,1,'2024-07-15 19:52:20',NULL,NULL),(115,'https://swapi.dev/api/vehicles/8/',NULL,NULL,NULL,1,'2024-07-15 19:52:20',NULL,NULL);
/*!40000 ALTER TABLE `vehicle` ENABLE KEYS */;
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
