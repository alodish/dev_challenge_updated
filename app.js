// app.js
// Main entry point for application

const express = require('express');
const mysql = require('mysql');
const path = require('path');
const bodyParser= require('body-parser');
const app = express();
const { getHomePage} = require('./routes/index');
const game = require('./routes/game');
const game_session = require('./routes/game_session');
const config = require('./config/config.json');
const multipleStatements = config["dev"]["multipleStatments"];
const host = config["dev"]["host"];
const user = config["dev"]["user"];
const password = config["dev"]["password"];
const database = config["dev"]["database"];
const port = config["dev"]["port"];

const db = mysql.createConnection({
	multipleStatements: multipleStatements,
	host: host,
	user: user,
	password: password,
	database: database})

db.connect((err) => {
	if (err) {
		throw err;
	}
	console.log('Connected to database');
});

global.db = db;

app.set('port', process.env.port || port);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// If there are static files, make a public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', getHomePage);
app.get('/add-game', game.getAdd);
app.post('/add-game', game.postAdd);
app.get('/edit-game', game.getEdit);
app.post('/edit-game', game.postEdit);
app.get('/edit-game/:id', game.getEdit);
app.post('/edit-game/:id', game.postEdit);
app.get('/add-game-session', game_session.getAdd);
app.post('/add-game-session', game_session.postAdd);
app.listen(port, () => {
	console.log(`Server running on port: ${port}`);
});

