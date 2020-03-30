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
    screenShots: [String],
    videoClips: [String],
    platforms: [String],
});

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;