const { query } = require("express");

module.exports = {
	getAdd: (req, res) => {
		res.render('add-game.ejs', {
			title: 'Board Games | Add game',
		});
	},
	getEdit: (req, res) => {
		let query = "SELECT * FROM game_info;";

		db.query(query, (err, result) => {
			if (err) {
				res.redirect('/');
			}
			
			res.render('edit-game.ejs', {
				title: 'Board Games | Add game',
				data: result
			});
		});
	},
	postAdd: (req, res) => {
		{
			let game_name = req.body.title;
			let min_players = req.body.min;
			let max_players = req.body.max;
			let sql = `INSERT INTO game_info (game_id, min_players, max_players) VALUES ("${game_name}", "${min_players}", "${max_players}");`; 
			db.query(sql, function(err, result) {
				console.log(sql)
				console.log('record edited successfully');
	
				res.redirect('/');
			}
		)}
	},

	postEdit: (req, res) => {
		let game_name = req.body.title;
		let min_players = req.body.min;
		let max_players = req.body.max;
		db.query("DELETE FROM game_info WHERE game_id = '" + game_name + "'");
		let sql = `INSERT INTO game_info (game_id, min_players, max_players) VALUES ("${game_name}", "${min_players}", "${max_players}");`; 
		db.query(sql, function(err, result) {
			console.log('record edited successfully');

			res.redirect('/');
		}
	)}
}
