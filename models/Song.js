const mongoose = require('mongoose');

const { Schema } = mongoose;

const songsSchema = new Schema (
    {
        title: { type: String, required: true, lowercase: true, trim: true },
        authorId: { type: Schema.Types.ObjectId, ref: 'Author' },
        year: { type: Number, min: 0, max: new Date().getFullYear() },
    },
    {
        toJSON: {
            transform: (doc, ret) => {
                ret.id = doc._id;
                delete ret._id;
                delete ret.__v;
                return ret;
            },
        },
    },
);

const Song = mongoose.model('Song', songsSchema);
module.exports = Song;
