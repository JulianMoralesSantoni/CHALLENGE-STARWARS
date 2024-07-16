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
-- Table structure for table `chracter`
--

DROP TABLE IF EXISTS `chracter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chracter` (
  `id_chracter` int NOT NULL AUTO_INCREMENT,
  `name_chracter` varchar(30) DEFAULT NULL,
  `name_actor` varchar(30) DEFAULT NULL,
  `description_chracter` varchar(1000) DEFAULT NULL,
  `url_chracter` varchar(255) DEFAULT NULL,
  `url_sincronizated` tinyint NOT NULL,
  `star_date` datetime NOT NULL,
  `edited` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id_chracter`)
) ENGINE=InnoDB AUTO_INCREMENT=311 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chracter`
--

LOCK TABLES `chracter` WRITE;
/*!40000 ALTER TABLE `chracter` DISABLE KEYS */;
INSERT INTO `chracter` VALUES (1,'Luke Skywalker','Mark Hamill','A farm boy from Tatooine who rises to become a Jedi Knight and rebels against the evil Galactic Empire.','https://swapi.dev/api/people/1/',0,'2024-07-14 23:23:48',NULL,NULL),(2,'Obi Wan','Bruce Lee','Jedi Master.',NULL,0,'2024-07-14 23:42:23',NULL,NULL),(5,NULL,NULL,NULL,'https://swapi.dev/api/people/5/',0,'2024-07-15 19:45:48',NULL,NULL),(6,NULL,NULL,NULL,'https://swapi.dev/api/people/6/',0,'2024-07-15 19:45:48',NULL,NULL),(129,NULL,NULL,NULL,'https://swapi.dev/api/people/1/',1,'2024-07-15 02:44:19',NULL,NULL),(131,NULL,NULL,NULL,'https://swapi.dev/api/people/2/',1,'2024-07-15 02:44:19',NULL,NULL),(133,NULL,NULL,NULL,'https://swapi.dev/api/people/3/',1,'2024-07-15 02:44:19',NULL,NULL),(134,NULL,NULL,NULL,'https://swapi.dev/api/people/4/',1,'2024-07-15 02:44:19',NULL,NULL),(135,NULL,NULL,NULL,'https://swapi.dev/api/people/5/',1,'2024-07-15 02:44:19',NULL,NULL),(136,NULL,NULL,NULL,'https://swapi.dev/api/people/6/',1,'2024-07-15 02:44:19',NULL,NULL),(137,NULL,NULL,NULL,'https://swapi.dev/api/people/7/',1,'2024-07-15 02:44:19',NULL,NULL),(138,NULL,NULL,NULL,'https://swapi.dev/api/people/10/',1,'2024-07-15 02:44:19',NULL,NULL),(139,NULL,NULL,NULL,'https://swapi.dev/api/people/11/',1,'2024-07-15 02:44:19',NULL,NULL),(140,NULL,NULL,NULL,'https://swapi.dev/api/people/12/',1,'2024-07-15 02:44:19',NULL,NULL),(141,NULL,NULL,NULL,'https://swapi.dev/api/people/13/',1,'2024-07-15 02:44:19',NULL,NULL),(142,NULL,NULL,NULL,'https://swapi.dev/api/people/20/',1,'2024-07-15 02:44:19',NULL,NULL),(143,NULL,NULL,NULL,'https://swapi.dev/api/people/21/',1,'2024-07-15 02:44:19',NULL,NULL),(144,NULL,NULL,NULL,'https://swapi.dev/api/people/33/',1,'2024-07-15 02:44:19',NULL,NULL),(145,NULL,NULL,NULL,'https://swapi.dev/api/people/35/',1,'2024-07-15 02:44:19',NULL,NULL),(146,NULL,NULL,NULL,'https://swapi.dev/api/people/46/',1,'2024-07-15 02:44:19',NULL,NULL),(147,NULL,NULL,NULL,'https://swapi.dev/api/people/51/',1,'2024-07-15 02:44:19',NULL,NULL),(148,NULL,NULL,NULL,'https://swapi.dev/api/people/52/',1,'2024-07-15 02:44:19',NULL,NULL),(149,NULL,NULL,NULL,'https://swapi.dev/api/people/53/',1,'2024-07-15 02:44:19',NULL,NULL),(150,NULL,NULL,NULL,'https://swapi.dev/api/people/54/',1,'2024-07-15 02:44:19',NULL,NULL),(151,NULL,NULL,NULL,'https://swapi.dev/api/people/55/',1,'2024-07-15 02:44:19',NULL,NULL),(152,NULL,NULL,NULL,'https://swapi.dev/api/people/56/',1,'2024-07-15 02:44:19',NULL,NULL),(153,NULL,NULL,NULL,'https://swapi.dev/api/people/58/',1,'2024-07-15 02:44:19',NULL,NULL),(154,NULL,NULL,NULL,'https://swapi.dev/api/people/63/',1,'2024-07-15 02:44:19',NULL,NULL),(155,NULL,NULL,NULL,'https://swapi.dev/api/people/64/',1,'2024-07-15 02:44:19',NULL,NULL),(156,NULL,NULL,NULL,'https://swapi.dev/api/people/67/',1,'2024-07-15 02:44:19',NULL,NULL),(157,NULL,NULL,NULL,'https://swapi.dev/api/people/68/',1,'2024-07-15 02:44:19',NULL,NULL),(158,NULL,NULL,NULL,'https://swapi.dev/api/people/75/',1,'2024-07-15 02:44:19',NULL,NULL),(159,NULL,NULL,NULL,'https://swapi.dev/api/people/78/',1,'2024-07-15 02:44:19',NULL,NULL),(160,NULL,NULL,NULL,'https://swapi.dev/api/people/79/',1,'2024-07-15 02:44:19',NULL,NULL),(161,NULL,NULL,NULL,'https://swapi.dev/api/people/80/',1,'2024-07-15 02:44:19',NULL,NULL),(162,NULL,NULL,NULL,'https://swapi.dev/api/people/81/',1,'2024-07-15 02:44:19',NULL,NULL),(163,NULL,NULL,NULL,'https://swapi.dev/api/people/82/',1,'2024-07-15 02:44:19',NULL,NULL),(164,NULL,NULL,NULL,'https://swapi.dev/api/people/83/',1,'2024-07-15 02:44:19',NULL,NULL),(165,NULL,NULL,NULL,'https://swapi.dev/api/people/1/',1,'2024-07-15 03:05:43',NULL,NULL),(166,NULL,NULL,NULL,'https://swapi.dev/api/people/2/',1,'2024-07-15 03:05:43',NULL,NULL),(167,NULL,NULL,NULL,'https://swapi.dev/api/people/3/',1,'2024-07-15 03:05:43',NULL,NULL),(168,NULL,NULL,NULL,'https://swapi.dev/api/people/4/',1,'2024-07-15 03:05:43',NULL,NULL),(169,NULL,NULL,NULL,'https://swapi.dev/api/people/5/',1,'2024-07-15 03:05:43',NULL,NULL),(170,NULL,NULL,NULL,'https://swapi.dev/api/people/6/',1,'2024-07-15 03:05:43',NULL,NULL),(171,NULL,NULL,NULL,'https://swapi.dev/api/people/7/',1,'2024-07-15 03:05:43',NULL,NULL),(172,NULL,NULL,NULL,'https://swapi.dev/api/people/8/',1,'2024-07-15 03:05:43',NULL,NULL),(173,NULL,NULL,NULL,'https://swapi.dev/api/people/9/',1,'2024-07-15 03:05:43',NULL,NULL),(174,NULL,NULL,NULL,'https://swapi.dev/api/people/10/',1,'2024-07-15 03:05:43',NULL,NULL),(175,NULL,NULL,NULL,'https://swapi.dev/api/people/12/',1,'2024-07-15 03:05:43',NULL,NULL),(176,NULL,NULL,NULL,'https://swapi.dev/api/people/13/',1,'2024-07-15 03:05:43',NULL,NULL),(177,NULL,NULL,NULL,'https://swapi.dev/api/people/14/',1,'2024-07-15 03:05:43',NULL,NULL),(178,NULL,NULL,NULL,'https://swapi.dev/api/people/15/',1,'2024-07-15 03:05:43',NULL,NULL),(179,NULL,NULL,NULL,'https://swapi.dev/api/people/16/',1,'2024-07-15 03:05:43',NULL,NULL),(180,NULL,NULL,NULL,'https://swapi.dev/api/people/18/',1,'2024-07-15 03:05:43',NULL,NULL),(181,NULL,NULL,NULL,'https://swapi.dev/api/people/19/',1,'2024-07-15 03:05:43',NULL,NULL),(182,NULL,NULL,NULL,'https://swapi.dev/api/people/81/',1,'2024-07-15 03:05:43',NULL,NULL),(183,NULL,NULL,NULL,'https://swapi.dev/api/people/1/',1,'2024-07-15 03:05:43',NULL,NULL),(184,NULL,NULL,NULL,'https://swapi.dev/api/people/2/',1,'2024-07-15 03:05:43',NULL,NULL),(185,NULL,NULL,NULL,'https://swapi.dev/api/people/3/',1,'2024-07-15 03:05:43',NULL,NULL),(186,NULL,NULL,NULL,'https://swapi.dev/api/people/4/',1,'2024-07-15 03:05:43',NULL,NULL),(187,NULL,NULL,NULL,'https://swapi.dev/api/people/5/',1,'2024-07-15 03:05:43',NULL,NULL),(188,NULL,NULL,NULL,'https://swapi.dev/api/people/10/',1,'2024-07-15 03:05:43',NULL,NULL),(189,NULL,NULL,NULL,'https://swapi.dev/api/people/13/',1,'2024-07-15 03:05:43',NULL,NULL),(190,NULL,NULL,NULL,'https://swapi.dev/api/people/14/',1,'2024-07-15 03:05:43',NULL,NULL),(191,NULL,NULL,NULL,'https://swapi.dev/api/people/18/',1,'2024-07-15 03:05:43',NULL,NULL),(192,NULL,NULL,NULL,'https://swapi.dev/api/people/20/',1,'2024-07-15 03:05:43',NULL,NULL),(193,NULL,NULL,NULL,'https://swapi.dev/api/people/21/',1,'2024-07-15 03:05:43',NULL,NULL),(194,NULL,NULL,NULL,'https://swapi.dev/api/people/22/',1,'2024-07-15 03:05:43',NULL,NULL),(195,NULL,NULL,NULL,'https://swapi.dev/api/people/23/',1,'2024-07-15 03:05:43',NULL,NULL),(196,NULL,NULL,NULL,'https://swapi.dev/api/people/24/',1,'2024-07-15 03:05:43',NULL,NULL),(197,NULL,NULL,NULL,'https://swapi.dev/api/people/25/',1,'2024-07-15 03:05:43',NULL,NULL),(198,NULL,NULL,NULL,'https://swapi.dev/api/people/26/',1,'2024-07-15 03:05:43',NULL,NULL),(199,NULL,NULL,NULL,'https://swapi.dev/api/people/1/',1,'2024-07-15 03:05:43',NULL,NULL),(200,NULL,NULL,NULL,'https://swapi.dev/api/people/2/',1,'2024-07-15 03:05:43',NULL,NULL),(201,NULL,NULL,NULL,'https://swapi.dev/api/people/3/',1,'2024-07-15 03:05:43',NULL,NULL),(202,NULL,NULL,NULL,'https://swapi.dev/api/people/4/',1,'2024-07-15 03:05:43',NULL,NULL),(203,NULL,NULL,NULL,'https://swapi.dev/api/people/5/',1,'2024-07-15 03:05:43',NULL,NULL),(204,NULL,NULL,NULL,'https://swapi.dev/api/people/10/',1,'2024-07-15 03:05:43',NULL,NULL),(205,NULL,NULL,NULL,'https://swapi.dev/api/people/13/',1,'2024-07-15 03:05:43',NULL,NULL),(206,NULL,NULL,NULL,'https://swapi.dev/api/people/14/',1,'2024-07-15 03:05:43',NULL,NULL),(207,NULL,NULL,NULL,'https://swapi.dev/api/people/16/',1,'2024-07-15 03:05:43',NULL,NULL),(208,NULL,NULL,NULL,'https://swapi.dev/api/people/18/',1,'2024-07-15 03:05:43',NULL,NULL),(209,NULL,NULL,NULL,'https://swapi.dev/api/people/20/',1,'2024-07-15 03:05:43',NULL,NULL),(210,NULL,NULL,NULL,'https://swapi.dev/api/people/21/',1,'2024-07-15 03:05:43',NULL,NULL),(211,NULL,NULL,NULL,'https://swapi.dev/api/people/22/',1,'2024-07-15 03:05:43',NULL,NULL),(212,NULL,NULL,NULL,'https://swapi.dev/api/people/25/',1,'2024-07-15 03:05:43',NULL,NULL),(213,NULL,NULL,NULL,'https://swapi.dev/api/people/27/',1,'2024-07-15 03:05:43',NULL,NULL),(214,NULL,NULL,NULL,'https://swapi.dev/api/people/28/',1,'2024-07-15 03:05:43',NULL,NULL),(215,NULL,NULL,NULL,'https://swapi.dev/api/people/29/',1,'2024-07-15 03:05:43',NULL,NULL),(216,NULL,NULL,NULL,'https://swapi.dev/api/people/30/',1,'2024-07-15 03:05:43',NULL,NULL),(217,NULL,NULL,NULL,'https://swapi.dev/api/people/31/',1,'2024-07-15 03:05:43',NULL,NULL),(218,NULL,NULL,NULL,'https://swapi.dev/api/people/45/',1,'2024-07-15 03:05:43',NULL,NULL),(219,NULL,NULL,NULL,'https://swapi.dev/api/people/2/',1,'2024-07-15 03:05:43',NULL,NULL),(220,NULL,NULL,NULL,'https://swapi.dev/api/people/3/',1,'2024-07-15 03:05:43',NULL,NULL),(221,NULL,NULL,NULL,'https://swapi.dev/api/people/10/',1,'2024-07-15 03:05:43',NULL,NULL),(222,NULL,NULL,NULL,'https://swapi.dev/api/people/11/',1,'2024-07-15 03:05:43',NULL,NULL),(223,NULL,NULL,NULL,'https://swapi.dev/api/people/16/',1,'2024-07-15 03:05:43',NULL,NULL),(224,NULL,NULL,NULL,'https://swapi.dev/api/people/20/',1,'2024-07-15 03:05:43',NULL,NULL),(225,NULL,NULL,NULL,'https://swapi.dev/api/people/21/',1,'2024-07-15 03:05:43',NULL,NULL),(226,NULL,NULL,NULL,'https://swapi.dev/api/people/32/',1,'2024-07-15 03:05:43',NULL,NULL),(227,NULL,NULL,NULL,'https://swapi.dev/api/people/33/',1,'2024-07-15 03:05:43',NULL,NULL),(228,NULL,NULL,NULL,'https://swapi.dev/api/people/34/',1,'2024-07-15 03:05:43',NULL,NULL),(229,NULL,NULL,NULL,'https://swapi.dev/api/people/35/',1,'2024-07-15 03:05:43',NULL,NULL),(230,NULL,NULL,NULL,'https://swapi.dev/api/people/36/',1,'2024-07-15 03:05:43',NULL,NULL),(231,NULL,NULL,NULL,'https://swapi.dev/api/people/37/',1,'2024-07-15 03:05:43',NULL,NULL),(232,NULL,NULL,NULL,'https://swapi.dev/api/people/38/',1,'2024-07-15 03:05:43',NULL,NULL),(233,NULL,NULL,NULL,'https://swapi.dev/api/people/39/',1,'2024-07-15 03:05:43',NULL,NULL),(234,NULL,NULL,NULL,'https://swapi.dev/api/people/40/',1,'2024-07-15 03:05:43',NULL,NULL),(235,NULL,NULL,NULL,'https://swapi.dev/api/people/41/',1,'2024-07-15 03:05:43',NULL,NULL),(236,NULL,NULL,NULL,'https://swapi.dev/api/people/42/',1,'2024-07-15 03:05:43',NULL,NULL),(237,NULL,NULL,NULL,'https://swapi.dev/api/people/43/',1,'2024-07-15 03:05:43',NULL,NULL),(238,NULL,NULL,NULL,'https://swapi.dev/api/people/44/',1,'2024-07-15 03:05:43',NULL,NULL),(239,NULL,NULL,NULL,'https://swapi.dev/api/people/46/',1,'2024-07-15 03:05:43',NULL,NULL),(240,NULL,NULL,NULL,'https://swapi.dev/api/people/47/',1,'2024-07-15 03:05:43',NULL,NULL),(241,NULL,NULL,NULL,'https://swapi.dev/api/people/48/',1,'2024-07-15 03:05:43',NULL,NULL),(242,NULL,NULL,NULL,'https://swapi.dev/api/people/49/',1,'2024-07-15 03:05:43',NULL,NULL),(243,NULL,NULL,NULL,'https://swapi.dev/api/people/50/',1,'2024-07-15 03:05:43',NULL,NULL),(244,NULL,NULL,NULL,'https://swapi.dev/api/people/51/',1,'2024-07-15 03:05:43',NULL,NULL),(245,NULL,NULL,NULL,'https://swapi.dev/api/people/52/',1,'2024-07-15 03:05:43',NULL,NULL),(246,NULL,NULL,NULL,'https://swapi.dev/api/people/53/',1,'2024-07-15 03:05:43',NULL,NULL),(247,NULL,NULL,NULL,'https://swapi.dev/api/people/54/',1,'2024-07-15 03:05:43',NULL,NULL),(248,NULL,NULL,NULL,'https://swapi.dev/api/people/55/',1,'2024-07-15 03:05:43',NULL,NULL),(249,NULL,NULL,NULL,'https://swapi.dev/api/people/56/',1,'2024-07-15 03:05:43',NULL,NULL),(250,NULL,NULL,NULL,'https://swapi.dev/api/people/57/',1,'2024-07-15 03:05:43',NULL,NULL),(251,NULL,NULL,NULL,'https://swapi.dev/api/people/58/',1,'2024-07-15 03:05:43',NULL,NULL),(252,NULL,NULL,NULL,'https://swapi.dev/api/people/59/',1,'2024-07-15 03:05:43',NULL,NULL),(253,NULL,NULL,NULL,'https://swapi.dev/api/people/2/',1,'2024-07-15 03:05:43',NULL,NULL),(254,NULL,NULL,NULL,'https://swapi.dev/api/people/3/',1,'2024-07-15 03:05:43',NULL,NULL),(255,NULL,NULL,NULL,'https://swapi.dev/api/people/6/',1,'2024-07-15 03:05:43',NULL,NULL),(256,NULL,NULL,NULL,'https://swapi.dev/api/people/7/',1,'2024-07-15 03:05:43',NULL,NULL),(257,NULL,NULL,NULL,'https://swapi.dev/api/people/10/',1,'2024-07-15 03:05:43',NULL,NULL),(258,NULL,NULL,NULL,'https://swapi.dev/api/people/11/',1,'2024-07-15 03:05:43',NULL,NULL),(259,NULL,NULL,NULL,'https://swapi.dev/api/people/20/',1,'2024-07-15 03:05:43',NULL,NULL),(260,NULL,NULL,NULL,'https://swapi.dev/api/people/21/',1,'2024-07-15 03:05:43',NULL,NULL),(261,NULL,NULL,NULL,'https://swapi.dev/api/people/22/',1,'2024-07-15 03:05:43',NULL,NULL),(262,NULL,NULL,NULL,'https://swapi.dev/api/people/33/',1,'2024-07-15 03:05:43',NULL,NULL),(263,NULL,NULL,NULL,'https://swapi.dev/api/people/35/',1,'2024-07-15 03:05:43',NULL,NULL),(264,NULL,NULL,NULL,'https://swapi.dev/api/people/36/',1,'2024-07-15 03:05:43',NULL,NULL),(265,NULL,NULL,NULL,'https://swapi.dev/api/people/40/',1,'2024-07-15 03:05:43',NULL,NULL),(266,NULL,NULL,NULL,'https://swapi.dev/api/people/43/',1,'2024-07-15 03:05:43',NULL,NULL),(267,NULL,NULL,NULL,'https://swapi.dev/api/people/46/',1,'2024-07-15 03:05:43',NULL,NULL),(268,NULL,NULL,NULL,'https://swapi.dev/api/people/51/',1,'2024-07-15 03:05:43',NULL,NULL),(269,NULL,NULL,NULL,'https://swapi.dev/api/people/52/',1,'2024-07-15 03:05:43',NULL,NULL),(270,NULL,NULL,NULL,'https://swapi.dev/api/people/53/',1,'2024-07-15 03:05:43',NULL,NULL),(271,NULL,NULL,NULL,'https://swapi.dev/api/people/58/',1,'2024-07-15 03:05:43',NULL,NULL),(272,NULL,NULL,NULL,'https://swapi.dev/api/people/59/',1,'2024-07-15 03:05:43',NULL,NULL),(273,NULL,NULL,NULL,'https://swapi.dev/api/people/60/',1,'2024-07-15 03:05:43',NULL,NULL),(274,NULL,NULL,NULL,'https://swapi.dev/api/people/61/',1,'2024-07-15 03:05:43',NULL,NULL),(275,NULL,NULL,NULL,'https://swapi.dev/api/people/62/',1,'2024-07-15 03:05:43',NULL,NULL),(276,NULL,NULL,NULL,'https://swapi.dev/api/people/63/',1,'2024-07-15 03:05:43',NULL,NULL),(277,NULL,NULL,NULL,'https://swapi.dev/api/people/64/',1,'2024-07-15 03:05:43',NULL,NULL),(278,NULL,NULL,NULL,'https://swapi.dev/api/people/65/',1,'2024-07-15 03:05:43',NULL,NULL),(279,NULL,NULL,NULL,'https://swapi.dev/api/people/66/',1,'2024-07-15 03:05:43',NULL,NULL),(280,NULL,NULL,NULL,'https://swapi.dev/api/people/67/',1,'2024-07-15 03:05:43',NULL,NULL),(281,NULL,NULL,NULL,'https://swapi.dev/api/people/68/',1,'2024-07-15 03:05:43',NULL,NULL),(282,NULL,NULL,NULL,'https://swapi.dev/api/people/69/',1,'2024-07-15 03:05:43',NULL,NULL),(283,NULL,NULL,NULL,'https://swapi.dev/api/people/70/',1,'2024-07-15 03:05:43',NULL,NULL),(284,NULL,NULL,NULL,'https://swapi.dev/api/people/71/',1,'2024-07-15 03:05:43',NULL,NULL),(285,NULL,NULL,NULL,'https://swapi.dev/api/people/72/',1,'2024-07-15 03:05:43',NULL,NULL),(286,NULL,NULL,NULL,'https://swapi.dev/api/people/73/',1,'2024-07-15 03:05:43',NULL,NULL),(287,NULL,NULL,NULL,'https://swapi.dev/api/people/74/',1,'2024-07-15 03:05:43',NULL,NULL),(288,NULL,NULL,NULL,'https://swapi.dev/api/people/75/',1,'2024-07-15 03:05:43',NULL,NULL),(289,NULL,NULL,NULL,'https://swapi.dev/api/people/76/',1,'2024-07-15 03:05:43',NULL,NULL),(290,NULL,NULL,NULL,'https://swapi.dev/api/people/77/',1,'2024-07-15 03:05:43',NULL,NULL),(291,NULL,NULL,NULL,'https://swapi.dev/api/people/78/',1,'2024-07-15 03:05:43',NULL,NULL),(292,NULL,NULL,NULL,'https://swapi.dev/api/people/82/',1,'2024-07-15 03:05:43',NULL,NULL),(293,NULL,NULL,NULL,'https://swapi.dev/api/people/1/',1,'2024-07-15 19:52:20',NULL,NULL),(294,NULL,NULL,NULL,'https://swapi.dev/api/people/2/',1,'2024-07-15 19:52:20',NULL,NULL),(295,NULL,NULL,NULL,'https://swapi.dev/api/people/3/',1,'2024-07-15 19:52:20',NULL,NULL),(296,NULL,NULL,NULL,'https://swapi.dev/api/people/4/',1,'2024-07-15 19:52:20',NULL,NULL),(297,NULL,NULL,NULL,'https://swapi.dev/api/people/5/',1,'2024-07-15 19:52:20',NULL,NULL),(298,NULL,NULL,NULL,'https://swapi.dev/api/people/6/',1,'2024-07-15 19:52:20',NULL,NULL),(299,NULL,NULL,NULL,'https://swapi.dev/api/people/7/',1,'2024-07-15 19:52:20',NULL,NULL),(300,NULL,NULL,NULL,'https://swapi.dev/api/people/8/',1,'2024-07-15 19:52:20',NULL,NULL),(301,NULL,NULL,NULL,'https://swapi.dev/api/people/9/',1,'2024-07-15 19:52:20',NULL,NULL),(302,NULL,NULL,NULL,'https://swapi.dev/api/people/10/',1,'2024-07-15 19:52:20',NULL,NULL),(303,NULL,NULL,NULL,'https://swapi.dev/api/people/12/',1,'2024-07-15 19:52:20',NULL,NULL),(304,NULL,NULL,NULL,'https://swapi.dev/api/people/13/',1,'2024-07-15 19:52:20',NULL,NULL),(305,NULL,NULL,NULL,'https://swapi.dev/api/people/14/',1,'2024-07-15 19:52:20',NULL,NULL),(306,NULL,NULL,NULL,'https://swapi.dev/api/people/15/',1,'2024-07-15 19:52:20',NULL,NULL),(307,NULL,NULL,NULL,'https://swapi.dev/api/people/16/',1,'2024-07-15 19:52:20',NULL,NULL),(308,NULL,NULL,NULL,'https://swapi.dev/api/people/18/',1,'2024-07-15 19:52:20',NULL,NULL),(309,NULL,NULL,NULL,'https://swapi.dev/api/people/19/',1,'2024-07-15 19:52:20',NULL,NULL),(310,NULL,NULL,NULL,'https://swapi.dev/api/people/81/',1,'2024-07-15 19:52:20',NULL,NULL);
/*!40000 ALTER TABLE `chracter` ENABLE KEYS */;
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