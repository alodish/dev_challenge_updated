CREATE TABLE IF NOT EXISTS play_sessions(
    session_id INT AUTO_INCREMENT PRIMARY KEY,
    play_date DATE,
    game_name VARCHAR(255),
    num_players INT,
    winner VARCHAR(255)
);

INSERT INTO play_sessions(play_date, game_name, num_players, winner)
VALUES
('2021-09-01', 'Monopoly', '4', 'Steve'),
('2021-09-08', 'Catan', '4', 'Rhonda'),
('2021-09-15', 'Catan', '4', 'Rhonda'),
('2021-09-21', 'Ticket to Ride', '3', 'Jill'),
('2021-09-28', 'Pictionary', '4', 'Steve'),
('2021-10-06', 'Monopoly', '2', 'Marcus'),
('2021-10-13', 'Ticket to Ride', '4', 'Rhonda'),
('2021-10-20', 'Catan', '4', 'Rhonda'),
('2021-10-27', 'Ticket to Ride', '4', 'Marcus'),
('2021-11-03', 'Pictionary', '4', 'Jill'),
('2021-11-10', 'Catan', '4', 'Rhonda'),
('2021-11-17', 'Pictionary', '4', 'Marcus'),
('2021-11-24', 'Ticket to Ride', '4', 'Steve');

CREATE TABLE IF NOT EXISTS game_info(
    game_id VARCHAR(255) PRIMARY KEY,
    min_players INT NOT NULL,
    max_players INT);