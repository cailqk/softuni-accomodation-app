const { Schema, model, Types } = require('mongoose');

const extraSchema = new Schema ({
    label: { type: String, required: true},
    iconUrl: {type: String },
    rooms: { type: [Types.ObjectId], default: [], ref: 'Room'}
});

const Extra = model('Extra', extraSchema);

module.exports = Extra;