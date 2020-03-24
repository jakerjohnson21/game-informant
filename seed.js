const db = require(`./models`);

const games = [
	{
		name: "Cyberpunk 2077",
		rating: 7,
		coverImage: "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
		price: "59.99",

	},
	{
		name: "the-last-of-us-part-2",
		rating: 8,
		coverImage: "https://media.rawg.io/media/games/bc7/bc7e583a6e4ceec38f0557cf8910da1f.jpg",
		price: "39.99",

	},
	{
		name: "Vampire: The Masquerade - Bloodlines 2",
		rating: 6,
		coverImage: "https://media.rawg.io/media/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg",
		price: "35.99",
	}

];

// db.Game.create(games, (err, newGames) => {
// 	if(err){
// 		console.log(`Error creating games: `, err);
// 		process.exit();
// 	}

// 	console.log(`Successfully created ${newGames.length} games`);

// });

// db.Game.find({}, (err,allGames) => {
// 	if(err){
// 		console.log(`Error displaying games: `, err);
// 		process.exit();
// 	}

// 	console.log(`Database: `, allGames);
// 	process.exit();
// })

// db.Game.deleteMany({}, (err, result) => {
// 	if(err){
// 		console.log("Error deleting database: ", err);
// 		process.exit();
// 	}

// 	console.log("Succcessfully deleted database: ", result);
// 	process.exit();
// })
