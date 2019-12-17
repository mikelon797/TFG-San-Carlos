-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 01, 2019 at 09:36 PM
-- Server version: 10.3.11-MariaDB
-- PHP Version: 5.6.39

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hsc`
--

-- --------------------------------------------------------

--
-- Table structure for table `incidents`
--

CREATE TABLE `incidents` (
  `incident_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `hosp_or_emerg` tinyint(1) NOT NULL,
  `date_incident` datetime NOT NULL,
  `incident_title` varchar(255) DEFAULT NULL,
  `other_text` varchar(255) DEFAULT NULL,
  `informed` tinyint(1) DEFAULT NULL,
  `date_informed` datetime DEFAULT NULL,
  `closed` tinyint(1) DEFAULT NULL,
  `date_closed` datetime DEFAULT NULL,
  `reason_closed` varchar(255) DEFAULT NULL,
  `rate_pacient` int(11) DEFAULT NULL,
  `rate_worker` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `instance_emergency`
--

CREATE TABLE `instance_emergency` (
  `instance_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `entry_date` datetime NOT NULL,
  `exit_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `instance_hospitalized`
--

CREATE TABLE `instance_hospitalized` (
  `instance_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `entry_date` datetime NOT NULL,
  `exit_date` datetime DEFAULT NULL,
  `bed_number` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `notifications_data`
--

CREATE TABLE `notifications_data` (
  `notification_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `question` varchar(255) NOT NULL,
  `answer` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `people_resposible`
--

CREATE TABLE `people_resposible` (
  `peoresp_id` int(11) NOT NULL,
  `service` varchar(255) NOT NULL,
  `people_responsible_contact` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `service_id` int(11) NOT NULL,
  `type_of_service` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `genre_library` varchar(255) DEFAULT NULL COMMENT 'Para servicio de biblioteca',
  `option_diet` varchar(255) DEFAULT NULL COMMENT 'Para la dieta',
  `text_info` varchar(255) DEFAULT NULL,
  `date_service` datetime NOT NULL,
  `informed` tinyint(1) DEFAULT NULL,
  `date_informed` datetime DEFAULT NULL,
  `closed` tinyint(1) DEFAULT NULL,
  `date_closed` datetime DEFAULT NULL,
  `reason_closed` varchar(255) DEFAULT NULL,
  `rate_pacient` int(11) DEFAULT NULL,
  `rate_worker` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `surveys`
--

CREATE TABLE `surveys` (
  `survey_id` int(11) NOT NULL,
  `survey_model` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `date_survey` datetime NOT NULL,
  `answer` varchar(8000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `survey_models`
--

CREATE TABLE `survey_models` (
  `survey_model_id` int(11) NOT NULL,
  `categories` varchar(255) DEFAULT NULL,
  `tittle` varchar(255) NOT NULL,
  `survey` varchar(MAX) NOT NULL,
  `activated` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname1` varchar(255) NOT NULL,
  `surname2` varchar(255) DEFAULT NULL,
  `date_of_birth` date NOT NULL,
  `gender` tinyint(1) DEFAULT NULL,
  `mail` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `incidents`
--
ALTER TABLE `incidents`
  ADD PRIMARY KEY (`incident_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `instance_emergency`
--
ALTER TABLE `instance_emergency`
  ADD PRIMARY KEY (`instance_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `instance_hospitalized`
--
ALTER TABLE `instance_hospitalized`
  ADD PRIMARY KEY (`instance_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `notifications_data`
--
ALTER TABLE `notifications_data`
  ADD PRIMARY KEY (`notification_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `people_resposible`
--
ALTER TABLE `people_resposible`
  ADD PRIMARY KEY (`peoresp_id`),
  ADD KEY `people_resp_FI_1` (`service`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`service_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `surveys`
--
ALTER TABLE `surveys`
  ADD PRIMARY KEY (`survey_id`),
  ADD KEY `survey_model` (`survey_model`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `survey_models`
--
ALTER TABLE `survey_models`
  ADD PRIMARY KEY (`survey_model_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `incidents`
--
ALTER TABLE `incidents`
  MODIFY `incident_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `instance_emergency`
--
ALTER TABLE `instance_emergency`
  MODIFY `instance_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `instance_hospitalized`
--
ALTER TABLE `instance_hospitalized`
  MODIFY `instance_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `notifications_data`
--
ALTER TABLE `notifications_data`
  MODIFY `notification_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `people_resposible`
--
ALTER TABLE `people_resposible`
  MODIFY `peoresp_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `service_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `surveys`
--
ALTER TABLE `surveys`
  MODIFY `survey_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `survey_models`
--
ALTER TABLE `survey_models`
  MODIFY `survey_model_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `incidents`
--
ALTER TABLE `incidents`
  ADD CONSTRAINT `incidents_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `instance_emergency`
--
ALTER TABLE `instance_emergency`
  ADD CONSTRAINT `instance_emergency_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `instance_hospitalized`
--
ALTER TABLE `instance_hospitalized`
  ADD CONSTRAINT `instance_hospitalized_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `notifications_data`
--
ALTER TABLE `notifications_data`
  ADD CONSTRAINT `notifications_data_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `services`
--
ALTER TABLE `services`
  ADD CONSTRAINT `services_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `surveys`
--
ALTER TABLE `surveys`
  ADD CONSTRAINT `surveys_ibfk_1` FOREIGN KEY (`survey_model`) REFERENCES `survey_models` (`survey_model_id`),
  ADD CONSTRAINT `surveys_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
