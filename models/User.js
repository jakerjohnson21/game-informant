const mongoose = require('mongoose');
const Game = require('./Game.js');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: Number, 
    favoriteGames: [Game.schema]
});