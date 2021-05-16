Use Tipping_League;
INSERT INTO Users (id, name, email, password, notification, createdAt, updatedAt )
VALUES (1, "Test User1", "testuser1@test.com", "yourPassword", '1', "2021-05-16",'2021-05-16');

INSERT INTO Users (id,name, email, password, notification, createdAt, updatedAt )
VALUES (2,"Test User2", "testuser2@test.com", "yourPassword2",'0', "2021-05-16",'2021-05-16');

INSERT INTO Users (id,name, email, password, notification, createdAt, updatedAt )
VALUES (3,"Test User3", "testuser3@test.com", "yourPassword3", '1', "2021-05-16",'2021-05-16');

INSERT INTO Users (id,name, email, password, notification, createdAt, updatedAt )
VALUES (4,"Test User4", "testuser4@test.com", "yourPassword4", '1', "2021-05-16",'2021-05-16');

Use Tipping_League;
INSERT INTO TEAMS(id,team_name, createdAt,updatedAt)
VALUES ( 1,"Manchester City", "2021-05-016","2021-05-16");
INSERT INTO TEAMS(id,team_name, createdAt,updatedAt)
VALUES ( 2,"Manchester United", "2021-05-016","2021-05-16");
INSERT INTO TEAMS(id,team_name, createdAt,updatedAt)
VALUES ( 3,"Leicester", "2021-05-016","2021-05-16");
INSERT INTO TEAMS(id,team_name, createdAt,updatedAt)
VALUES ( 4,"Chelsea", "2021-05-016","2021-05-16");
INSERT INTO TEAMS(id,team_name, createdAt,updatedAt)
VALUES ( 5,"Liverpool", "2021-05-016","2021-05-16");
INSERT INTO TEAMS(id,team_name, createdAt,updatedAt)
VALUES ( 6,"West Ham", "2021-05-016","2021-05-16");
INSERT INTO TEAMS(id,team_name, createdAt,updatedAt)
VALUES ( 7,"Tottenham", "2021-05-016","2021-05-16");
INSERT INTO TEAMS(id,team_name, createdAt,updatedAt)
VALUES ( 8,"Everton'", "2021-05-016","2021-05-16");
INSERT INTO TEAMS(id,team_name, createdAt,updatedAt)
VALUES ( 9,"Arsenal", "2021-05-016","2021-05-16");
INSERT INTO TEAMS(id,team_name, createdAt,updatedAt)
VALUES ( 10,"Leeds", "2021-05-016","2021-05-16");
INSERT INTO TEAMS(id,team_name, createdAt,updatedAt)
VALUES ( 11,"Aston Villa", "2021-05-016","2021-05-16");
INSERT INTO TEAMS(id,team_name, createdAt,updatedAt)
VALUES ( 12,"Wolverhampton Wanderers", "2021-05-016","2021-05-16");
INSERT INTO TEAMS(id,team_name, createdAt,updatedAt)
VALUES ( 13,"Southampton", "2021-05-016","2021-05-16");
INSERT INTO TEAMS(id,team_name, createdAt,updatedAt)
VALUES ( 14,"Crystal Palace", "2021-05-016","2021-05-16");
INSERT INTO TEAMS(id,team_name, createdAt,updatedAt)
VALUES ( 15,"Newcastle United", "2021-05-016","2021-05-16");
INSERT INTO TEAMS(id,team_name, createdAt,updatedAt)
VALUES ( 16,"Burnley", "2021-05-016","2021-05-16");
INSERT INTO TEAMS(id,team_name, createdAt,updatedAt)
VALUES ( 17,"Brighton", "2021-05-016","2021-05-16");
INSERT INTO TEAMS(id,team_name, createdAt,updatedAt)
VALUES ( 18,"Fulham", "2021-05-016","2021-05-16");
INSERT INTO TEAMS(id,team_name, createdAt,updatedAt)
VALUES ( 19,"West Bromwich Albion", "2021-05-016","2021-05-16");
INSERT INTO TEAMS(id,team_name, createdAt,updatedAt)
VALUES ( 20,"Sheffield United'", "2021-05-016","2021-05-16");

Use Tipping_League;
INSERT INTO FIXTURES(id, match_number, round_number, Date, location, home_team, away_team,  createdAt, updatedAt)
VALUES (1, "365","37",	"2021-05-19","Goodison Park ",	"Everton",	"Wolverhampton Wanderers", "2021-05-016","2021-05-16");

INSERT INTO FIXTURES(id,match_number, round_number, Date, location, home_team,away_team, createdAt,updatedAt)
VALUES (2,"367","37",	"2021-05-19",	"St. James' Park",	"Newcastle",	"Sheffield United'", "2021-05-016","2021-05-16");

INSERT INTO FIXTURES(id,match_number, round_number, Date, location,   home_team,away_team, createdAt,updatedAt)
VALUES (3,"369","37",	"2021-05-19",	"Tottenham Hotspur Stadium", "Tottenham",	"Aston Villa","2021-05-016","2021-05-16");

INSERT INTO FIXTURES(id,match_number, round_number, Date, location, home_team,away_team, createdAt,updatedAt)
VALUES (4,"364","37",	"2021-05-19",	"Selhurst Park",	"Crystal Palace",	"Arsenal", "2021-05-016","2021-05-16");

INSERT INTO FIXTURES(id,match_number, round_number, Date, location, home_team,away_team, createdAt,updatedAt)
VALUES (5,"362","37",	"2021-05-19",	"Turf Moor",	"Burnley",	"Liverpool", "2021-05-016","2021-05-16");

INSERT INTO FIXTURES(id,match_number, round_number, Date, location, home_team,away_team, createdAt,updatedAt)
VALUES (6,"370","37",	"2021-05-19",	"The Hawthorns",	"West Bromwich Albion",	"West Ham", "2021-05-016","2021-05-16");

INSERT INTO FIXTURES(id,match_number, round_number, Date, location, home_team,away_team, createdAt,updatedAt)
VALUES (7,"371","38",	"2021-05-23",	"Emirates Stadium",	"Arsenal",	"Brighton", "2021-05-016","2021-05-16");

INSERT INTO FIXTURES(id,match_number, round_number, Date, location, home_team,away_team, createdAt,updatedAt)
VALUES (8,"372","38",	"2021-05-23",	"Villa Park",	"Aston Villa",	"Chelsea", "2021-05-016","2021-05-16");


INSERT INTO FIXTURES(id,match_number, round_number, Date, location, home_team,away_team, createdAt,updatedAt)
VALUES (9,"373","38",	"2021-05-23",	"Craven Cottage",	"Fulham",	"Newcastle", "2021-05-016","2021-05-16");

INSERT INTO FIXTURES(id,match_number, round_number, Date, location, home_team,away_team, createdAt,updatedAt)
VALUES (10,"374","38",	"2021-05-23",	"Elland Road",	"Leeds",	"West Brom", "2021-05-016","2021-05-16");

INSERT INTO FIXTURES(id,match_number, round_number, Date, location, home_team,away_team, createdAt,updatedAt)
VALUES (11,"375","38",	"2021-05-23",	"King Power Stadium",	"Leicester",	"Tottenham", "2021-05-016","2021-05-16");

INSERT INTO FIXTURES(id,match_number, round_number, Date, location, home_team,away_team, createdAt,updatedAt)
VALUES (12,"376","38",	"2021-05-23",	"Anfield",	"Liverpool",	"Crystal Palace", "2021-05-016","2021-05-16");

INSERT INTO FIXTURES(id,match_number, round_number, Date, location, home_team,away_team, createdAt,updatedAt)
VALUES (13,"377","38",	"2021-05-23",	"Etihad Stadium",	"Manchester City",	"Everton'", "2021-05-016","2021-05-16");

INSERT INTO FIXTURES(id,match_number, round_number, Date, location, home_team,away_team, createdAt,updatedAt)
VALUES (14,"378","38",	"2021-05-23",	"Bramall Lane",	"Sheffield United'",	"Burnley", "2021-05-016","2021-05-16");

INSERT INTO FIXTURES(id,match_number, round_number, Date, location, home_team,away_team, createdAt,updatedAt)
VALUES (15,"379","37",	"2021-05-19",	"London Stadium",	"West Ham",	"Southampton", "2021-05-016","2021-05-16");

INSERT INTO FIXTURES(id,match_number, round_number, Date, location, home_team,away_team, createdAt,updatedAt)
VALUES (16,"380","37",	"2021-05-19",	"Molineux Stadium",	"Wolverhampton Wanderers",	"Manchester United", "2021-05-016","2021-05-16");