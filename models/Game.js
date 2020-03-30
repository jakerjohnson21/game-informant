const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    releaseDate: Date,
    rating: Number,
    screenShots: [String],
    videoClips: [String],
    coverImage: String,
    platforms: [String],
    userComment: String
});

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;