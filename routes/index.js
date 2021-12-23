const { query } = require("express");

module.exports = {
	getHomePage: (req, res) => {
		// TODO: Make query for games list
		let query = "SELECT game_name, num_players, MAX(play_date) as play_date, winner FROM play_sessions GROUP BY game_name;";
		let query2 = "SELECT winner, COUNT(*) as wins FROM play_sessions GROUP BY winner ORDER BY COUNT(*) DESC LIMIT 3; "
		let query3 = "SELECT DATE_ADD((SELECT MAX(play_date) FROM play_sessions), INTERVAL 7 DAY) AS next_session," +
					 "MAX(play_date) AS last_session FROM play_sessions;";
		let query4 = "SELECT game_name, COUNT(*) AS times_played FROM play_sessions GROUP BY game_name ORDER BY COUNT(*) DESC LIMIT 3;"
		let query5 = "SELECT * FROM play_sessions;";

		db.query(query, (err, result) => {
			if (err) {
				res.redirect('/');
			}
			db.query(query2, (err, result2) => {
				if (err) {
					res.redirect('/');
				}
				db.query(query3, (err, result3) => {
					if (err) {
						res.redirect('/');
					}
					db.query(query4, (err, result4) => {
						if (err) {
							res.redirect('/');
						}
						db.query(query5, (err, result5) => {
							if (err) {
								res.redirect('/');
							}
							res.render('index.ejs', {
								title: 'Board Games | View Games',
								data: result,
								data2: result2,
								data3: result3,
								data4: result4,
								data5: result5
							});						
						});
					});
				});
			});
		});
	}
};

