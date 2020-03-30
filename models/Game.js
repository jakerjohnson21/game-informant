const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gameId: String,
    releaseDate: Date,
    rating: Number,
    coverImage: String,
    userComment: String

});

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;