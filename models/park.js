const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const parkSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    picture: {
        type: Image,
    },
    washrooms: {
        type: Boolean,
        default: false
    },
    amenities: {
        type: String
    },
    reviews: [{type: Schema.Types.ObjectId, ref: "Review"}]
}, {
    timestamps: true
});

module.exports = mongoose.model("Park", parkSchema)
