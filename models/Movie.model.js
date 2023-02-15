//  Add your code here
const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
    },
    plot: {
        type: String,
    },
    cast: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Celebrity",
        },
    ],
});

module.exports = mongoose.model("Movie", movieSchema);
