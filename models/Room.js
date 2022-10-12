const { Schema, model, Types } = require('mongoose');

const roomSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    city: {type: String, required: true},
    beds: {type: Number, required: true, min: 1},
    price: {type: Number, required: true, min: 10},
    imgUrl: String,
    extras: {type: [Types.ObjectId], default: [], ref: 'Extra'},
    owner: {type: [Types.ObjectId], ref: 'User', required: true }
});

const Room = model('Room', roomSchema);

module.exports = Room;