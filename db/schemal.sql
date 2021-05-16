DROP DATABASE IF EXISTS Tipping_League;

CREATE DATABASE Tipping_League;


USE Tipping_League;

CREATE TABLE Users(
id INT AUTO_INCREMENT NOT NULL,
name VARCHAR(20) NOT NULL,
email VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL,
notification BOOLEAN NULL,
PRIMARY KEY (id)
);


CREATE TABLE Tips(
id INT AUTO_INCREMENT NOT NULL,
teamsId INT NOT NULL,
draw BOOLEAN NOT NULL,
points INT NOT NULL,
fixturesId INT NOT NULL,
userid INT NOT NUL
FOREIGN KEY (teamsId) references Teams (id),
FOREIGN KEY (usersId) references Users (id),
FOREIGN KEY (fixturesId) references Fixtures (id),
PRIMARY KEY (id)
);


CREATE TABLE Fixtures(
id INT AUTO_INCREMENT NOT NULL,
match_number INT NOT NULL,
round_number INT NOT NULL,
date INT NOT NULL,
location INT NOT NULL,
home_team INT NOT NULL,
away_team INT NOT NULL,
PRIMARY KEY (id)
); 

CREATE TABLE Teams(
id INT AUTO_INCREMENT NOT NULL,
team_name VARCHAR(255) NOT NULL,
PRIMARY KEY (id)
);

