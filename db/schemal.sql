DROP DATABASE IF EXISTS Tipping_League;

CREATE DATABASE Tipping_League;


USE Tipping_League;

CREATE TABLE Teams(
id INT AUTO_INCREMENT NOT NULL,
team_name VARCHAR(255) NOT NULL,
PRIMARY KEY (id)
);


CREATE TABLE Users(
id INT AUTO_INCREMENT NOT NULL,
first_name VARCHAR(20) NOT NULL,
last_name VARCHAR(20) NOT NULL,
email VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL,
notification Boolean,
PRIMARY KEY (id)
);


CREATE TABLE Competition(
id INT AUTO_INCREMENT NOT NULL,
competition_name VARCHAR(255) NOT NULL,
userId INT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (userId) references Users (id)
);


CREATE TABLE Tips(
id INT AUTO_INCREMENT NOT NULL,
competitionId INT NOT NULL,
userId INT NOT NULL,
teamId INT NOT NULL,
game INT NOT NULL,
FOREIGN KEY (userId) references Users (id),
FOREIGN KEY (teamId) references Teams (id),
FOREIGN KEY (competitionId) references Competition (id),
PRIMARY KEY (id)
);

USE Tipping_League;

CREATE TABLE Results(
id INT AUTO_INCREMENT NOT NULL,
points INT NOT NULL,
tipID INT NOT NULL,
Round INT NOT NULL,
FOREIGN KEY (tipID) references Tips (id),
PRIMARY KEY (id)
)
