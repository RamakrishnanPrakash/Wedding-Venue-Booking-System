-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 20, 2024 at 11:00 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `venue_booking_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `MAHAL_ID` int(10) DEFAULT NULL,
  `BOOKING_DATE` date DEFAULT NULL,
  `USER_ID` int(10) DEFAULT NULL,
  `EMAIL` varchar(20) DEFAULT NULL,
  `PHONE_NO` varchar(10) DEFAULT NULL,
  `USERNAME` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `mahal`
--

CREATE TABLE `mahal` (
  `id` int(11) NOT NULL,
  `mahalname` varchar(100) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `distic` varchar(50) DEFAULT NULL,
  `rating` float DEFAULT 10,
  `Ac` varchar(10) DEFAULT NULL,
  `budjet` varchar(10) DEFAULT NULL,
  `amount` int(20) DEFAULT NULL,
  `indoor` varchar(20) DEFAULT NULL,
  `mahalimage` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mahal`
--

INSERT INTO `mahal` (`id`, `mahalname`, `city`, `distic`, `rating`, `Ac`, `budjet`, `amount`, `indoor`, `mahalimage`) VALUES
(1, 'Vettri Krishnan Mahal', 'West Mambalam', 'Chennai', 4.8, 'Ac', '2,25,000', 225000, '600-900', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/380/167/new_medium/ss20230328-16890-hgpp41.jpg?1679993641'),
(2, 'Hyath Mahal', 'Broadway', 'Chennai', 4.8, 'Ac', '85,000', 85000, '400-500', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/573/923/new_medium/ss20230425-4044-aiad0k.JPG?1682398420'),
(3, '24 Convention Mini Hall', 'Aminjikarai', 'Chennai', 4.8, 'Non-Ac', '395', 395, '240-500', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/402/728/new_medium/blob?1680151784'),
(4, 'Murugan Thirumana Mandapam', 'Madipakkam', 'Chennai', 4.5, 'Ac', '1,30,000', 130000, '450-975', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/258/323/new_medium/ss20230323-24949-hgvbsj.jpg?1679593973'),
(7, 'Sri Hariharan Marriage Hall', 'Nanganallur', 'Chennai', 4.6, 'Ac', '50,000', 50000, '125-200', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/488/045/new_medium/mini_magick20230806-15732-1tak6sm.jpg?1691325389'),
(8, 'Jk Mahaal', 'Nanganallur', 'Chennai', 4.8, 'Ac', '2,36,500', 236500, '700-1050', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/572/453/new_medium/ss20230425-4181-w7vnq3.JPG?1682398370'),
(9, 'Pragathamani Mahal', 'Gangadarapuram', 'Thanjavur', 4.4, 'A/c', '25,000', 25000, '1000-1500', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/997/573/new_medium/ss20230607-13853-4eas9z.jpg?1686168639'),
(10, 'Ushodhaya Csp Gardenss', 'Madhavaram Milk Colony', 'Chennai', 4.8, 'Non-Ac', ' 1,75,000', 175000, '500-700', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/755/441/new_large/pp-IMG_20230612_211959.jpg?1696683169'),
(11, 'Aj Mahal Convention Hall', 'Royapuram', 'Chennai', 4.8, 'AC', '1,50,000', 150000, '400-600', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/385/977/new_large/ss20230328-16890-czyjwf.jpg?1679993788'),
(12, 'Sri Vaijayanti Mahal AC', 'Ayyappanthangal,', 'Chennai', 4.8, 'Ac', '1,60,000', 160000, '400-600', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/686/449/new_large/blob?1683693476'),
(13, 'Residency Towers Town Hall', 'T Nagar', 'Chennai', 4.4, 'Ac', '1,118-₹ 1,', 1418, '200-250', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/380/567/new_medium/ss20230328-16890-bdgv3n.jpeg?1679993650'),
(14, 'Shakthi Palace', 'Valasaravakkam', 'Chennai', 4.8, 'Ac', '1,75,000', 175000, '500-900', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/261/297/new_medium/ss20230323-16648-17hb866.jpg?1679595164'),
(15, 'League Hotel And Banquets', 'Arumbakkam', 'Chennai', 4.8, 'Ac', '1,100 - ₹ ', 1200, '500-700', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/263/097/new_medium/ss20230323-21772-1jw1mh.jpg?1679595991'),
(16, 'Illam Hospitality &Banquets', 'Rajiv Gandhi Salai', 'Cheannai', 4.8, 'Ac', '7,00,000', 700000, '200-350', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/875/287/new_medium/mini_magick20230601-5454-1tsjp2i.jpg?1685601774'),
(17, 'Sri Vatchala Marriage Hall', 'Nanganallur', 'Chennai', 4.8, 'Ac', ' 1,50,000', 150000, '600-1000', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/709/938/new_medium/mini_magick20230926-14017-286q3o.jpg?1695725791'),
(18, 'Dhanam Thirumana Mahal', 'Periyapanicherry Rd', 'Chennai', 4.8, 'Ac', '90,000', 90000, '500-600', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/434/641/new_medium/blob?1690528782'),
(19, 'Mgm Grand', 'Kovur', 'Chennai', 4.8, 'Ac', '2,25,000 ', 225000, '1000-1500', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/264/723/new_medium/blob?1688448131'),
(20, 'Ecr Wedding', 'Vadanemmeli', 'Chennai', 4.8, 'Non-Ac', '50,000', 50000, '400-600', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/031/064/new_medium/blob?1677043508'),
(21, 'Indeco Hotel', 'Kumbakonam City', 'Thanjavur', 4.4, 'Ac', '518 - ₹ 71', 718, '250-300 ', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/996/948/new_medium/ss20230607-13853-1c743vs.jpeg?1686168108'),
(22, 'Illam Hospitality &Banquets', 'Rajiv Gandhi Salai', 'Chennai', 4.8, 'Ac', '7,00,000', 700000, '200-350', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/875/287/new_medium/mini_magick20230601-5454-1tsjp2i.jpg?1685601774'),
(23, 'Safire Mahal', 'Eraharam', 'Thanjavur', 4.4, 'Ac', ' 50,000', 50000, '700-1050 ', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/997/442/new_medium/ss20230607-13853-3470bl.jpg?1686168538'),
(24, 'Sri Andal Thirumana Mandapam', 'Aduthurai', 'Thanjavur', 4.4, 'Non-Ac', '30,000', 30000, ' 600-900', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/997/236/new_medium/ss20230607-13853-10gquqq.png?1686168347'),
(25, 'Svatma Hotel', 'Kumbakonam City', 'thanjavur', 4.4, 'Ac', '3,300', 3300, ' 225-400', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/996/969/new_medium/ss20230607-13853-intu36.png?1686168122'),
(26, 'Annamalaiyar Mahal', 'Aduthurai', 'Thanjavur', 4.4, 'Non-Ac', ' 20,000', 20000, '800-1200', 'https://www.mandap.com/assets/common/avatar_bi-f8e35da8f53a0165dec267e2157957c70c9b0a5705e5589b6655c28465de72f8.jpg'),
(27, 'City Thirumana Mahal', 'Aduthurai', 'Thanjavur', 4.4, 'Non-Ac', ' 56,018', 56018, '600-900', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/997/183/new_medium/ss20230607-13853-1e95if0.jpg?1686168298'),
(28, 'Sara And Lavanya Wedding Hall', 'Annalagraharam', 'Thanjavur', 4.4, 'Non-Ac', '25,000', 25000, '350-525', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/997/298/new_medium/ss20230607-13853-11zd9s2.png?1686168423'),
(29, 'Hotel Vedha Stay', 'Innambur', 'Thanjavur', 4.4, 'Ac', '25,000', 25000, '500-1000', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/997/587/new_medium/ss20230607-13853-rogti0.jpg?1686168657'),
(30, 'Marudham Hall Ac', 'Eraharam', 'Thanjavur', 4.4, 'Ac', '1,50,000', 150000, '1000-2000', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/997/448/new_medium/ss20230607-13853-1di19uq.jpg?1686168543'),
(31, 'Sundar Mahal Thirumana Mahal', 'Aduthurai', 'Thanjavur', 4.4, 'Non-Ac', '52,108', 52108, '750-1500', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/997/189/new_large/ss20230607-13853-1pmt40a.jpg?1686168303'),
(32, 'Rajamani Thirumana Mandapam', 'Gangadarapuram', 'Thanjavur', 4.4, 'Non-Ac', '54,000 ', 54000, '1200-1700', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/997/469/new_large/ss20230607-13853-y6y1s3.jpeg?1686168562'),
(33, 'Maharaja And Maharani Mahal', 'Kumbakonam City', 'Thanjavur', 5.1, 'Non-Ac', '60,000', 60000, '1200-2000', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/997/097/new_medium/ss20230607-13853-1yxgyeo.jpg?1686168236'),
(34, 'Arulanandham Mahal', 'Vidhya Nagar', 'Thanjavur', 5.1, 'Ac', '90,000', 90000, '17000-25000', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/776/635/new_medium/pp-arul.PNG?1697177474'),
(35, 'Ts Vasantham Mahal Ac', 'Gangadarapuram', 'Thanjavur', 5.1, 'Ac', ' 1,30,018', 130018, '2500-3000', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/997/486/new_medium/ss20230607-13853-p23l37.jpeg?1686168575'),
(36, 'Vasavi Mahal', 'Kumbakonam City', 'Thanjavur', 5.5, 'Ac', ' 4,50,000', 450000, '2500-7000', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/997/039/new_medium/ss20230607-13853-4ngcoy.jpg?1686168183'),
(37, 'Jb Mahal', 'Pudukottai City', 'pudukkottai', 4.4, 'Non-Ac', '32,000', 32000, '800-1500', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/061/841/new_large/ss20230614-32298-jyglcw.jpg?1686722454'),
(38, 'Maharaj Mahal', 'Pudukottai City', 'Pudukottai', 5.1, 'Non-Ac', '25,000', 25000, '500-800', 'https://www.mandap.com/assets/common/avatar_bi-f8e35da8f53a0165dec267e2157957c70c9b0a5705e5589b6655c28465de72f8.jpg'),
(39, 'Hotel Ans Pride', 'Pudukottai City', 'Pudukottai', 5.1, 'Ac', ' 468 - ₹ 6', 618, '200-250', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/061/993/new_large/ss20230614-32298-j2jx06.jpg?1686722706'),
(40, 'R Panneer Devar Mahal', 'Pudukottai City', 'Pudukottai', 5.1, 'Ac', ' 1,50,018', 150018, '1500-2000', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/061/908/new_large/ss20230614-32298-whcqr6.jpg?1686722618'),
(41, 'Subramaniam Valliammai Thirumana Mahal', 'Pudukottai City', 'Pudukottai', 5.1, 'Ac', ' 60,000 ', 60000, '800-1300', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/061/962/new_large/ss20230614-32298-1wxj1fk.jpg?1686722685'),
(42, 'Stm Tthirumana Mandapam', 'Pudukottai City', 'Pudukottai', 5.1, 'Non-Ac', '30,000', 30000, '600-800', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/061/865/new_large/ss20230614-32298-1snrw1a.jpg?1686722553'),
(43, 'Guna Thirumana Mandapam', 'Pudukottai City', 'Pudukottai ', 5.1, 'Ac', '90,000', 90000, '1500-2000', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/061/937/new_large/ss20230614-32298-1lled71.jpg?1686722657'),
(44, 'Ayya Thirumana Mandapam', 'Pudukottai City', 'Pudukottai', 5.1, 'Non-Ac', ' 90,000', 90000, '1500-2000', 'https://img.weddingbazaar.com/shaadisaga_production/landing/mmlistcard.jpg'),
(46, 'Emerald Palace', 'Samayapuram', 'Tiruchirappalli', 4.9, 'Ac', '1,25,000', 125000, '1500-3000', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/361/417/new_medium/ss20230327-21700-1t9ar13.jpg?1679937921'),
(47, 'Sri Charles Mahal', 'Ariyamangalam', 'Tiruchirappalli', 4.8, 'Ac', '65,000', 65000, '500-1000', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/402/835/new_large/blob?1680152788'),
(48, 'Kalaignar Arivalayam', 'Melachinthamani', 'Tiruchirappalli', 4.3, 'Ac', '90,000', 90000, '1500-2200', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/390/168/new_medium/blob?1680007009'),
(49, 'Hotel Ajanta', 'Cantonment', 'Tiruchirappalli ', 4.4, 'Ac', '70,108', 70108, '150-400', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/362/427/new_medium/ss20230327-21700-1e80sbj.jpg?1679937945'),
(50, 'Ma Mahal', 'Kumaravayalur', 'Tiruchirappalli', 4.9, 'Ac', '30,000', 30000, '500-900', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/008/056/610/new_medium/mini_magick20240109-11789-zi2aev.png?1704822035'),
(51, 'Santhos Mini Hall', 'Maharishi Vedathri Nagar', 'Tiruchirappalli', 4.5, 'Ac', '30,000', 30000, '300-500', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/806/791/new_large/pp-santosh.PNG?1697798142'),
(52, 'Sri Hari Krupa Kalyana Mandapam', 'Srirangam', 'Tiruchirappalli', 4.4, 'Ac', '40,000', 40000, '300-700', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/360/226/new_medium/ss20230327-3861-15t9yab.jpg?1679937920'),
(53, 'Solai Mahal', 'Thalakudi', 'Tiruchirappalli', 4.3, 'Ac', '50,000', 50000, '200-800', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/361/011/new_medium/ss20230327-3861-8bf9vf.jpg?1679937936'),
(54, 'Reddiyar Mahal', 'Samayapuram', 'Tiruchirappalli', 4.4, 'Ac', '85,000', 85000, '600-1000', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/362/737/new_medium/ss20230327-3861-1vnr5qw.jpg?1679937979'),
(55, 'Sn Kalyana Mahal', 'Srirangam', 'Tiruchirappalli', 4.8, 'Ac', '1,00,000', 100000, '600-1300', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/575/786/new_medium/ss20230425-4044-gk0vez.JPG?1682398462'),
(56, 'Kalaiarangam Marriage Hall', 'Cantonment', 'Tiruchirappalli', 4.5, 'Ac', '1,00,000', 100000, '700-1700', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/683/770/new_medium/blob?1695200069'),
(57, 'Sri Mahalakshmi Mahal', 'Manapparai', 'Tiruchirappalli', 4.5, 'Non-Ac', ' 2,39,480', 239480, '800-1900', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/360/373/new_medium/ss20230327-21700-k28ghl.jpg?1679937901'),
(58, 'Dr Marriage Hall', 'Ariyalur', 'Tiruchirappalli.', 4.7, 'Non-Ac', ' 18,000', 18000, '200-800', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/773/502/new_medium/pp-subii.PNG?1697107830'),
(59, 'Meenakshi Kalyana Mandapam', 'Musiri', 'Tiruchirappalli', 4.5, 'Ac', '46,000', 46000, '500-1200', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/362/129/new_medium/ss20230327-21700-2e91hr.jpg?1679937937'),
(60, 'Laxmi Narayan Mahal', 'Ramji Nagar', 'Tiruchirappalli', 4.2, 'Ac', ' 1,00,000', 100000, '1000-1200', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/362/299/new_medium/ss20230327-3861-hwzxxk.png?1679937964'),
(61, 'Lks Mahal', 'Cantonment', 'Tiruchirappalli', 4.3, 'Ac', '94,400', 94400, '800-1200', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/576/297/new_medium/ss20230425-4044-1z5n9b.JPG?1682398474'),
(62, 'Ams Mahaal', 'Woraiyur', 'Tiruchirappalli', 4.3, 'Ac', '35,400', 35400, '500-750', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/575/692/new_medium/ss20230425-4044-1xn06hy.JPG?1682398461'),
(63, 'Srm Hotel Annexe Muthu Mahal', 'Khajamalai', 'Tiruchirappalli', 4.6, ' Ac', ' 45,400', 45400, '250-600', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/359/846/new_medium/ss20230327-21700-1ofny6k.jpg?1679937886'),
(64, 'Vsk Jayanthi Mahal', 'Samayapuram', 'Tiruchirappalli', 4.9, 'Non-Ac', '20,000', 20000, '500-700', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/733/705/new_medium/pp-Screenshot_2023-09-26_124120.png?1696318498'),
(65, 'Manghalam Weddings And Conventions', 'Srirangam', 'Tiruchirappalli', 5, 'Ac', '2,25,000', 225000, '1300-2700', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/360/944/new_medium/ss20230327-21700-1v17vy5.jpg?1679937912'),
(66, 'Barakath Mahal', 'Ramanathapuram City', 'Ramanathapuram', 4.6, 'Ac', '69,000 ', 69000, '400-800', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/081/161/new_medium/ss20230615-21427-l9eqji.jpg?1686830537'),
(67, 'Ajm Mahal', 'Ramanathapuram City', 'Ramanathapuram', 4.5, 'Ac', ' 68,600', 68600, '500-890', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/712/687/new_medium/pp-ajm_mahal.PNG?1695798016'),
(68, 'Taj Palace', 'Ramanathapuram City', 'Ramanathapuram', 4.3, 'Ac', '59.000', 59000, '1400-1700', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/712/605/new_medium/pp-taj_palacee.PNG?1695796000'),
(69, 'Rk Leyon Maha', 'Ramanathapuram City', 'Ramanathapuram', 4.4, 'Ac', '50,018', 50018, '1000-1500', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/081/144/new_medium/ss20230615-21427-hlm1ud.jpg?1686830497'),
(70, 'Annai Kunjaram Mahal', 'Ramanathapuram City', 'Ramanathapuram', 4.4, 'Ac', '40,000', 40000, '600-1000', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/713/331/new_medium/pp-kunjaramhg.PNG?1695804908'),
(71, 'Haja Mahal Ac', 'Ramanathapuram City', 'Ramanathapuram ', 4.3, 'Ac', '55,500', 55500, '700-1050', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/081/125/new_medium/ss20230615-21427-xih3q.jpg?1686830454'),
(72, 'Vasanthams Mahal', 'Ramanathapuram City', 'Ramanathapuram ', 4.5, 'Ac', '72,000', 72000, '1000-1500', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/081/137/new_medium/ss20230615-21427-1o3tkxr.jpg?1686830472'),
(73, 'Kings Palace Residency', 'Ramanathapuram City', 'Ramanathapuram ', 4.3, 'Ac', '62,500', 62500, '525-870', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/712/521/new_medium/pp-NSPPP.PNG?1695794775'),
(74, 'Ksk Jennath Mahal', 'Ramanathapuram City', 'Ramanathapuram ', 4.4, 'Non-Ac', '37,000', 37000, '300-450', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/712/645/new_medium/pp-ksk_hall_1.PNG?1695797319'),
(75, 'Vasanthams Mahal', 'Paramakudi', 'Ramanathapuram', 4.3, 'Ac', '65,000', 65000, '1500-2250', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/081/194/new_medium/ss20230615-21427-japaut.jpg?1686830566'),
(76, 'Kirshnaraj Mahal', 'Paramakudi', 'Ramanathapuram', 4.2, 'Ac', '41,200', 41200, '300-450', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/081/141/new_medium/ss20230615-21427-1swx8hq.jpg?1686830478'),
(77, 'A One Mahal', 'Ramanathapuram City', 'Ramanathapuram ', 4.6, 'Ac', ' 1,03,300', 103300, '1800-2400', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/081/150/new_medium/ss20230615-21427-1mualbo.jpg?1686830512'),
(78, 'Psm Grand Palace', 'Keelakarai', 'Ramanathapuram', 4.8, 'Ac', '2,00,000', 200000, '2500-3500', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/895/433/new_medium/pp-2023-07-06.jpg?1700457542'),
(79, 'Ragavendra Kalyana Mahal', 'Paramakudi', 'Ramanathapuram', 4.6, 'Ac', '30,018', 30018, '300-900', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/713/388/new_medium/pp-abced.PNG?1695805171'),
(80, 'Kr Mani Thirumana Mahal', 'Paramakudi', 'Ramanathapuram', 4.5, 'Ac', '36,200', 36200, '600-900', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/713/417/new_medium/pp-kr_1.PNG?1695805650'),
(81, 'Ts Mahal', 'Ramanathapuram City', 'Ramanathapuram ', 4.3, 'Non-Ac', '25,000', 25000, '500-750', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/081/158/new_medium/ss20230615-21427-1otj2mh.jpg?1686830532'),
(82, 'Viceroy Residency', 'Ramanathapuram City', 'Ramanathapuram ', 4.3, 'Non-Ac', '718 - ? 1,', 1018, '200-350', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/712/743/new_medium/pp-viceroy.PNG?1695798745'),
(83, 'Basariya Sithik Hall', 'Ramanathapuram City', 'Ramanathapuram ', 4.4, 'Ac', '28,500', 28500, '225-600', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/712/578/new_medium/pp-afzalllll.PNG?1695795226'),
(84, 'Ssk Green Palace', 'Ramanathapuram City', 'Ramanathapuram ', 4.5, 'Ac', '25,018', 25018, '500-700', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/081/114/new_medium/ss20230615-21427-8ggog8.jpg?1686830441'),
(85, 'Vjp Hall', 'Ramanathapuram City', 'Ramanathapuram ', 4.2, 'Ac', '28,500', 28500, '200-600', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/081/141/new_medium/ss20230615-21427-1swx8hq.jpg?1686830478'),
(86, 'Shri Vasavi Mithra Mahal Grand Akshayam', 'Thiruvanai Kovil', 'Coimbatore', 5, 'Ac', '1,00,000', 100000, '250-450', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/306/729/new_medium/ss20230327-31909-rhrv5t.jpeg?1679906119'),
(87, 'Sree Lakshmi Palace', 'Mettupalayam', 'Coimbatore', 4.6, 'Ac', '1,00,018', 100018, '1000-2000', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/306/919/new_medium/ss20230327-31909-y8afpl.jpg?1679906124'),
(88, 'Athulyam Convention Centre', 'Subramaniam Palayam', 'Coimbatore', 4.4, 'Ac', '60,000', 60000, '300-400', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/553/226/new_medium/blob?1692608192'),
(89, 'Sk Mandapam', 'Alagappa Colony', 'Coimbatore', 4.3, 'Ac', '80,000', 80000, '200-800', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/824/422/new_medium/pp-2022-09-01_%283%29.jpg?1698389254'),
(90, 'Busy Food Hall', 'Podanur', 'Coimbatore', 4.4, 'Ac', '64,900', 64900, '500-800', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/575/104/new_medium/ss20230425-4181-1xmol9o.JPG?1682398429'),
(91, 'Somasundara Mahal', 'Tirupur', 'Coimbatore', 4.6, 'Ac', '80,000', 80000, '750-1125', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/306/566/new_medium/ss20230327-31865-13zo3r5.jpg?1679906093'),
(92, 'Senthur Velan Mahal', 'Annur', 'Coimbatore', 4.3, 'Ac', '45,000', 45000, '600-900', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/309/127/new_medium/ss20230327-31909-s4l0mk.jpeg?1679906183'),
(93, 'Samuthrika Thirumana Mandapam', 'Annur', 'Coimbatore', 4.5, 'Ac', '45,000', 45000, '400-600', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/309/083/new_medium/ss20230327-31865-n7cmva.jpg?1679906159'),
(94, 'Arun Ram Kalyana Mandapam', 'Ambarampalayam', 'Coimbatore', 4.5, 'Ac', '80,000', 80000, '200-700', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/823/181/new_medium/pp-2022-12-29_%282%29.jpg?1698323008'),
(95, '??????? ?????', 'Pollachi', 'Coimbatore', 4.9, 'Ac', ' 1,50,000', 150000, '400-800', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/819/664/new_medium/pp-b8a3ecb2-0aba-4b73-8e8e-3a424cfed327.jpg?1698237810'),
(96, 'Siva Kumar Mahal', 'Karaikal Ammaiyar Street', 'Coimbatore', 4.5, 'Ac', '50,000', 50000, '300-900', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/821/877/new_large/pp-2022-03-17.png?1698311305'),
(97, 'Murugaa Mandapam', 'Valparai Road', 'Coimbatore', 4.5, 'Ac', '1,00,000', 100000, '200-600', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/817/091/new_medium/pp-unnamed_%282%29.jpg?1698213876'),
(98, 'Mgr Enthira Pristha Marriage Mahal`', 'Pollachi', 'Coimbatore', 4.9, 'Ac', '80,000', 80000, '200-800', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/820/753/new_medium/pp-2017-09-09.jpg?1698300038'),
(99, 'Vijey Mahal', 'Pollachi', 'Coimbatore', 4.9, 'Ac', '1,80,000', 180000, '500-1000', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/822/709/new_medium/pp-2019-11-29_%281%29.jpg?1698319139'),
(100, 'Sree Ganesh Mahal A/C', 'Sultanpet', 'Coimbatore', 4.5, 'Ac', '2,00,000', 200000, '500-2000', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/831/017/new_medium/pp-Screenshot_2023-10-28_174821.png?1698496042'),
(101, 'Rajalakshmi Marriage Mall', ' Pollachi Valparai Road', 'Coimbatore', 5, 'Ac', '60,000 ', 60000, '150-780', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/817/209/new_large/pp-2017-07-09_%281%29.jpg?1698215034'),
(102, 'Ljj Chinnaswamy Chinnammal Mahal', 'Kinathukadavu', 'Coimbatore', 4.7, 'Ac', '1,50,000', 150000, '400-1000', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/832/867/new_medium/pp-JOOE6904.JPG?1698643955'),
(103, 'Vigneshwara Kalyana Mandapam', 'Puliakulam', 'Coimbatore', 4.7, 'Ac', ' 80,000', 80000, '400-600', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/798/202/new_medium/pp-IMG_7317%281%29.JPG?1697629483'),
(104, 'Maheshwari Bhavan', 'Somayampalayam', 'Coimbatore', 4.2, 'Ac', '50,000', 50000, '600-1300', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/307/808/new_medium/ss20230327-31865-5xym7.jpeg?1679906124'),
(105, 'Vivaha Rengaz', 'Kaniyur', 'Coimbatore', 4.4, 'Ac', '39,317', 39317, '400-900', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/575/581/new_medium/ss20230425-4044-18bs4e.JPG?1682398458'),
(106, 'Py Mahal', 'Eachanari', 'Coimbatore', 5.1, 'Ac', '3,50,018', 350018, '2500-5000', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/005/571/316/new_medium/blob?1671172709'),
(107, 'VPN Mahal', 'Melakottaivasal', 'Nagapattinam', 4.5, 'Ac', '1,25,200', 125200, '900-1350', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/068/676/new_large/ss20230614-22679-1uwqpgi.jpeg?1686744049'),
(108, 'Gs Resorts', 'Mayiladuthurai', 'Nagapattinam', 4.3, 'Ac', ' 85,000 ', 85000, '200-500', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/068/743/new_medium/ss20230614-22679-xr76yz.jpg?1686744145'),
(109, 'Arun Mahal Marriage Hall', 'Mayiladuthurai', 'Nagapattinam', 4.5, 'Ac', '25,000', 25000, '500-900', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/068/864/new_medium/ss20230614-22679-9a49o4.jpg?1686744255'),
(110, 'Sri Vimalambigai Thirumana Mahal', 'Mayiladuthurai', 'Nagapattinam', 4.4, 'Ac', '7,30,018', 730018, '1500-7000', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/704/833/new_medium/pp-Screenshot_2023-09-25_161905.png?1695639206'),
(111, 'Lalitha Kalyana Mandapam', 'Melakottaivasal', 'Nagapattinam', 4.5, 'Ac', '70,000', 70000, '1200-1800', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/746/684/new_medium/pp-Screenshot_2023-10-05_110013.png?1696569434'),
(112, 'Avc Vasuki Mahal', 'Mayiladuthurai', 'Nagapattinam', 4.5, 'Ac', '22,500', 22500, '00-450', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/704/777/new_medium/pp-20211027_102327.jpg?1695638701'),
(113, 'Vimalambigai Marriage Hall', 'Mayiladuthurai', 'Nagapattinam', 4.5, 'Ac', '68,000', 68000, '450-700', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/704/969/new_medium/pp-2023-03-09_%281%29.jpg?1695639994'),
(114, 'Indra Bhavan', 'Mayiladuthurai', 'Nagapattinam', 4.6, 'Ac', ' 1,00,018', 100018, '500-750', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/068/805/new_medium/ss20230614-22679-166rj8d.jpg?1686744187'),
(115, 'Kings Palace Wedding Mahal', 'Mayiladuthurai', 'Nagapattinam', 4.5, 'Ac', '50,000 ', 50000, '400-800', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/068/885/new_medium/ss20230614-22679-rqv2rm.jpg?1686744281'),
(116, 'The Grand White Palace', 'Mayiladuthurai', 'Nagapattinam', 4.3, 'Ac', '1,20,000', 120000, '1100-1800', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/068/903/new_medium/ss20230614-22679-1aisj5z.jpg?1686744320'),
(117, 'The Royal Krishna Resort', 'Barari Refinery', 'Mathura', 4.3, 'Ac', ' 1,45,000', 145000, '1000-1300', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/265/483/new_medium/blob?1688452959'),
(118, 'Gs Eventz', 'Chandrapuri Colony', 'Mathura', 4.5, 'Non-Ac', ' 1,50,000 ', 150000, ' 800-2000', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/607/725/new_medium/blob?1682596587'),
(119, 'Clarks Inn Krishna Valley Vrindavan', 'Vrindavan', 'Mathura', 4.3, 'Ac', '1,80,000', 180000, ' 2000-2500 ', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/606/199/new_medium/blob?1682590825'),
(120, 'Om Paradise', 'Masani Rd', 'Mathura', 4.3, 'Ac', ' 4,50,000 ', 450000, '2500-1500', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/606/323/new_medium/blob?1682591269'),
(121, 'Vrindavan Balaji Devsthan', 'Mathura Vrindavan', 'Mathura', 4.3, 'Ac', '35,000', 35000, '2000-2300', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/022/096/new_medium/blob?1676957309'),
(122, 'Md Farms And Resorts', 'Chharoura', 'Mathura', 4.3, 'Ac', '70,000', 70000, '2500-500', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/615/228/new_medium/blob?1693812429'),
(123, 'Agra Vatika', 'Sarai Azamabad', 'Mathura', 4.4, 'Ac', '1,100 - ₹ ', 1200, '500-1000', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/863/590/new_medium/pp-2022-12-05_%281%29.jpg?1699338109'),
(124, 'Hotel Pyare Mohan', 'Kr Degree College', 'Mathura', 4.3, 'Ac', '30,000', 30000, ' 600-800', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/940/276/new_medium/pp-2018-04-21.jpg?1701510362'),
(125, 'Hotel Sks Grand Palace', 'Vrindavan', 'Mathura', 4.3, 'Ac', '1,00,000 ', 100000, '2000-3000', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/945/021/new_medium/pp-Screenshot_2023-12-04_174213.png?1701692213'),
(126, 'Hotel Parth Hall', 'Delhi Agra Road', 'Mathura', 4.3, 'Ac', '70,000', 70000, '1000-1500', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/945/057/new_medium/pp-Screenshot_2023-12-04_174705.png?1701692811'),
(127, 'The Mystic Palms', 'Outside Transport', 'Mathura', 4.3, 'Ac', '70,000', 70000, '700-1200', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/945/119/new_medium/pp-Screenshot_2023-12-04_181524.png?1701694328'),
(128, 'Hotel The Mansion', 'Govind Nagar', 'Mathura', 4.3, 'Ac', '70,000', 70000, '1000-1200', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/945/745/new_medium/pp-Screenshot_2023-12-05_101657.png?1701752076'),
(129, 'Rawat Bhawan', 'Azad Nagar', 'Mathura', 4.3, 'Ac', '50,000', 50000, '2000-3000', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/886/479/new_medium/pp-2017-10-27_%282%29.jpg?1700117910'),
(130, 'Jamuna Utsav Marriage Greens', 'Mathura', 'Mathura', 4.3, 'Ac', '75,000', 75000, '1000-1500', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/886/411/new_medium/pp-greehgdh.PNG?1700117366'),
(131, ' Shri Gopal Garden', 'Mathura', 'Mathura', 4.3, 'Ac', '41,000', 41000, '1000-2000', 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/886/622/new_medium/pp-maathuraa.PNG?1700119277');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `uname` varchar(40) DEFAULT NULL,
  `uemail` varchar(40) DEFAULT NULL,
  `upassword` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `uname`, `uemail`, `upassword`) VALUES
(1, 'Ramakrishnan', 'ram@gmail.com', '$2a$04$uM46onCCqb/cs9mA29YHauE/lgFfsiMblvOIOTrndtUQpRX1AKhPy'),
(2, 'Prakash', 'prakash@gmail.com', '$2a$04$BR5Xvq/yO/Ad4kNzfLh/peAR42n9O/29kCO6I4XvdU.ICIRK0flI6'),
(3, 'Kumar', 'kumar@gmail.com', '$2a$04$8JU0EGdsp/WbN.W3qXb7GeSvnWEn40gCo./a764hu5PJ6KyzJWh.O'),
(4, 'happy', 'happy@gmail.com', '$2a$04$s0icOftHCkpdwalgN4GNme0/HFYlkPod2SqBxFNgh62mTb8fk4uBC'),
(5, 'Ramakrushnan3', 'rama@gmail.com', '$2a$04$mlFzbTGUrzO1ESwuEHI9GeK2DlQ0aid9bu2/Hh6Tb6d.WvTEOQO7W'),
(6, 'Lakshmanan', 'lakshmanan@gmail.com', '$2a$04$9dZA/lOW6SMIZ/Vdo10h4eMLhNVcXEPRrf3ocw4OBcFkckVzZbRH2'),
(7, 'Gunal', 'gunal@gmail.com', '$2a$04$8ZbHTolUp/NL.nEqrPN1J.HuouMstDzYFECj.iuzWF2lBNKHFB/w.'),
(8, 'Poothumalli', 'poothumalli@gmail.com', '$2a$04$6a1NNscTmwCRK062Bfv1MuMK2uR30RUCY9pT51J6gP/yS3w9NcsUG'),
(9, 'Karthi', 'Karthi@gmail.com', '$2a$04$O.Tlx58E38T/gPjOuD4CkOGPlxc.54xmmFrfbh94MkqoKnCvGuy8y'),
(10, 'njgfftg', '', '$2a$04$tTvzBQpfXo/MWut2xRHP1.NPalOd7Nmb3xLaQOj/4JAPllERQ8Ebm'),
(11, 'Veera', 'Vee123@gmail.com', '$2a$04$FmaT10J5RGGuEMdqw9IKBepbjEpIBYtG9jTNKaYBwIqqBeTR6mrVi'),
(12, 'Paramanatham', 'paramanathan@gmail.com', '$2a$04$FW2XmAX2Q28/FDnV5bbWRug6fHH4wB9pE0YWer/OvB6SY68j3ngsC');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mahal`
--
ALTER TABLE `mahal`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `mahal`
--
ALTER TABLE `mahal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=132;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
