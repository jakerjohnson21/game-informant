// SERVER CONFIG
const express = require(`express`);
const bodyParser = require(`body-parser`);
const app = express();
const PORT = process.env.PORT || 4000;
const DB_URI = process.env.MONGODB || `mongodb://localhost:27017/game-informant`;

const mongoose = require("mongoose");

mongoose.connect(DB_URI, {
	useNewUrlParser: true,
	useFindAndModify: false,
	useCreateIndex: true,
	useUnifiedTopology: true,
})
	.then( () => console.log("MongoDB connected successfully"))
	.catch( () => console.log(`MongoDB error: ${err}`));

app.use(bodyParser.json());

//const db = require(`./models`);








app.listen(PORT, () => console.log(`game-informant app listening at http://localhost:${PORT}/`));



