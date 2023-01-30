-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema carpentryprojectsdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `carpentryprojectsdb` ;

-- -----------------------------------------------------
-- Schema carpentryprojectsdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `carpentryprojectsdb` DEFAULT CHARACTER SET utf8 ;
USE `carpentryprojectsdb` ;

-- -----------------------------------------------------
-- Table `carpentry_projects`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `carpentry_projects` ;

CREATE TABLE IF NOT EXISTS `carpentry_projects` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `description` VARCHAR(1000) NULL,
  `job_type` VARCHAR(200) NULL,
  `location` VARCHAR(45) NULL,
  `img_url` VARCHAR(2000) NULL,
  `date` DATE NOT NULL,
  `helpers` VARCHAR(200) NULL,
  `customer_name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS carpenter@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'carpenter'@'localhost' IDENTIFIED BY 'Archie621';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'carpenter'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `carpentry_projects`
-- -----------------------------------------------------
START TRANSACTION;
USE `carpentryprojectsdb`;
INSERT INTO `carpentry_projects` (`id`, `title`, `description`, `job_type`, `location`, `img_url`, `date`, `helpers`, `customer_name`) VALUES (1, 'Barn Addition', 'Built out barn addition with rough cut oak for Mr. Lecrone.', 'New Construction', 'Abbottstown', NULL, '2020-12-03', 'Dan Curry & Neal Kemper', 'Lecrone');
INSERT INTO `carpentry_projects` (`id`, `title`, `description`, `job_type`, `location`, `img_url`, `date`, `helpers`, `customer_name`) VALUES (2, 'Bathroom Remodel', 'Full bathroom demo and remodel', 'Remodel', 'Hanover', NULL, '2020-09-16', 'Dan Curry, Neal Kemper, Tom', 'Greth');
INSERT INTO `carpentry_projects` (`id`, `title`, `description`, `job_type`, `location`, `img_url`, `date`, `helpers`, `customer_name`) VALUES (3, 'Kitchen Remodel', 'Full kitchen and dining room remodel, exposed old cheasnut support beams and ceiling', 'Remodel', 'Hanover', NULL, '2020-08-19', 'Dan Curry & Neal Kemper', 'Kirkpatrick');
INSERT INTO `carpentry_projects` (`id`, `title`, `description`, `job_type`, `location`, `img_url`, `date`, `helpers`, `customer_name`) VALUES (4, 'Barn Area Cement/Pave', 'Added over 120 yards of concrete surrounding the barn and blacktopped the driveway leading to the barn', 'Concrete', 'Abbottstown', NULL, '2020-09-30', 'Dan Curry & Neal Kemper', 'Lecrone');
INSERT INTO `carpentry_projects` (`id`, `title`, `description`, `job_type`, `location`, `img_url`, `date`, `helpers`, `customer_name`) VALUES (5, 'House Addition', 'Built 3,000 sqft bedroom addition off of the exisiting master bedroom', 'New Construction', 'Abbottstown', NULL, '2022-09-21', 'Dan Curry, Neal Kemper, Troy, Whitey, Shawn', 'Lecrone');
INSERT INTO `carpentry_projects` (`id`, `title`, `description`, `job_type`, `location`, `img_url`, `date`, `helpers`, `customer_name`) VALUES (6, 'Customer Shutters', 'Created rustic, custom shutters to replace old vinly shutters', 'New Construction', 'Wellsville', NULL, '2022-07-18', NULL, 'Rickard');
INSERT INTO `carpentry_projects` (`id`, `title`, `description`, `job_type`, `location`, `img_url`, `date`, `helpers`, `customer_name`) VALUES (7, 'Window Replacement', 'Replaced full house of windows with new wooden Anderson windows', 'Remodel', 'Wellsville', NULL, '2022-07-10', 'Josh Levitsky', 'Seibright ');
INSERT INTO `carpentry_projects` (`id`, `title`, `description`, `job_type`, `location`, `img_url`, `date`, `helpers`, `customer_name`) VALUES (8, 'Bathroom Remodel', 'New vanity, vinyl flooring, and toilet added', 'Remodel', 'Hanover', NULL, '2021-12-01', NULL, 'Froehlich');
INSERT INTO `carpentry_projects` (`id`, `title`, `description`, `job_type`, `location`, `img_url`, `date`, `helpers`, `customer_name`) VALUES (9, 'Framed Building', 'Framed out 16,000 sqft building for tool companies now location', 'New Construction', 'New Freedom', NULL, '2022-01-10', NULL, 'Dave');
INSERT INTO `carpentry_projects` (`id`, `title`, `description`, `job_type`, `location`, `img_url`, `date`, `helpers`, `customer_name`) VALUES (10, 'Bedroom Remodel', 'Added hardwood floor, new trim, shiplap walls, and closet doors to bedroom', 'Remodel', 'Wellsville', NULL, '2022-03-19', 'Josh Levitsky', 'Rickards');
INSERT INTO `carpentry_projects` (`id`, `title`, `description`, `job_type`, `location`, `img_url`, `date`, `helpers`, `customer_name`) VALUES (11, 'Tiled Backsplash', 'Added tile backsplash to kitchen', 'Remodel', 'Wellsville', NULL, '2022-03-23', NULL, 'MaryAnne');
INSERT INTO `carpentry_projects` (`id`, `title`, `description`, `job_type`, `location`, `img_url`, `date`, `helpers`, `customer_name`) VALUES (12, 'Bathroom Remodel', 'Added vinyl flooring, new vanity, and new toilet to bathroom', 'Remodel', 'Hanover', NULL, '2022-02-22', NULL, 'Wildasin');
INSERT INTO `carpentry_projects` (`id`, `title`, `description`, `job_type`, `location`, `img_url`, `date`, `helpers`, `customer_name`) VALUES (13, 'Front Porch Columns', 'Removed aluminum front porch columns and added rustic beams', 'Remodel', 'Hanover', NULL, '2022-02-23', NULL, 'Wildasin');
INSERT INTO `carpentry_projects` (`id`, `title`, `description`, `job_type`, `location`, `img_url`, `date`, `helpers`, `customer_name`) VALUES (14, 'Custom Closet', 'Built custom closet and floating shoe rack', 'Remodel', 'New Oxford', NULL, '2022-01-15', NULL, 'Crazies');
INSERT INTO `carpentry_projects` (`id`, `title`, `description`, `job_type`, `location`, `img_url`, `date`, `helpers`, `customer_name`) VALUES (15, 'Office Remodel', 'Removed carpet, refinished hardwood floors and built custom shelving, painted, added new light fixtures', 'Remodel', 'Hanover', NULL, '2022-09-06', NULL, 'Lapresti');

COMMIT;

