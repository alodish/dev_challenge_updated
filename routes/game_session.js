module.exports = {
	getAdd: (req, res) => {
		res.render('add-game-session.ejs', {
			title: 'Board Games | Add game'
		});
	},
	postAdd: (req, res) => {
		console.log(req.body);
		let playDate = req.body.play_date;
		let gameName = req.body.game_name;
		let numPlayers = req.body.num_players;
		let gameWinner = req.body.winner;
		let sql = `INSERT INTO play_sessions (play_date, game_name, num_players, winner) VALUES ("${playDate}", "${gameName}", "${numPlayers}", "${gameWinner}");`; 
		db.query(sql, function(err, result) {
			console.log('Session added successfully');
			res.redirect('/');	

		});
	}
}
