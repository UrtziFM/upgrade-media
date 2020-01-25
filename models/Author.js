const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const autorSchema = new Schema ( 
    {
        name: { type: String, required: true, lowercase: true, trim: true},
        surname: { type: String, lowercase: true, trim: true },
    },
    {
        toJSON: {
            transform: (doc, ret) => {
                ret.id = doc.id;
                delete ret._id; // We are deleting some fields which are not useful and are created by mongo
                delete ret.__v;
                return ret;
            },
            virtuals: true, 
        },
    },
);

autorSchema.virtual('songs', {
    ref: 'Song',
    localField: '_id',
    foreignField: 'authorId',
});

const Author = model ('Author', autorSchema);
module.exports = Author; // Now we can exports to use it in the controller for handle api