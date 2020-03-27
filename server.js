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

app.post(`/api/v1/games`, (req, res) => {
	db.Game.create(req.body, (err, newGame) => {
		if (err) {
			console.log(err);
			return res.status(400);
		}

		res.json(newGame);
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

app.put(`/api/v1/games/:id`, (req, res) => {
	db.Game.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedGame) => {
		if (err) {
			console.log(err);
		}

		res.json(updatedGame);
	});
});

app.delete(`/api/v1/games/:id`, (req, res) => {
	db.Game.findByIdAndDelete(req.params.id, (err, result) => {
		if (err) {
			console.log(err);
		}

		res.json(result);
	})
});

app.get(`/api/v1/users/:id`, (req, res) => {
	db.User.findById(req.params.id, (err, foundUser) => {
		if (err) {
			console.log(err);
			return res.status(400);
		}

		res.json(foundUser);
	});
});

app.post(`/api/v1/users`, (req, res) => {
	db.User.create(req.body, (err, newUser) => {
		if (err) {
			console.log(err);
		}

		res.json(newUser);
	});
})















app.listen(PORT, () => console.log(`game-informant app listening at http://localhost:${PORT}/`));



