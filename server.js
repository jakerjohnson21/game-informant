// SERVER CONFIG
const express = require(`express`);
const bodyParser = require(`body-parser`);
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 4000;
const DB_URI = process.env.MONGODB || `mongodb://localhost:27017/game-informant`;



app.use(bodyParser.json());

app.use(express.static(`${__dirname}/public`));

const db = require(`./models`);

//const Game = mongoose.model(`Game`, GameSchema);

// ------------HTML ROUTES------------ //

// Login screen
app.get(`/`, (req,res) => {
	console.log(__dirname);
	res.sendFile(`views/login.html`, {
		root: __dirname,
	});
});

// Home page
app.get(`/home`, (req,res) => {
	res.sendFile(`views/home.html`, {
		root: __dirname,
	});
});

// Profile Page
app.get(`/profile/:id`, (req,res) => {
	res.sendFile(`views/profile.html`, {
		root: __dirname,
	});
});

// Specifc Game Info
app.get(`/games/:id`, (req,res) => {
	res.sendFile(`views/games/gamesShow.html`, {
		root: __dirname,
	});
});

// Redirect to homes if no id is present
app.get(`/games`, (req,res) => {
	res.sendFile(`views/home.html`, {
		root: __dirname,
	});
});

//------------API ROUTES------------ //

app.get(`/api/v1/games`, (req,res) => {
	db.Game.find({}, (err, allGames) => {
		if(err){
			return res.status(400).json({status: 400,
			 error: "Sorry something went wrong, please try again"});
		}
		res.json(allGames);
	});
});

// Returns json object of specific game if found
app.get(`/api/v1/games/:id`, (req,res) => {
	db.Game.findById(req.params.id, (err, foundGame) => {
		if(err){
			console.log(`ID: `, req.params.id);
			return res.status(400).json({status: 400,
			error: "Sorry something went wrong, please try again"});
		}

		res.json(foundGame);
	});
});










app.listen(PORT, () => console.log(`game-informant app listening at http://localhost:${PORT}/`));



