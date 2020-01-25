const Author = require('../models/Author');

const getAll = async (req, res, next) => {
    try {
        const authors = await Author.find();
        return res.status(200).json(authors);
    } catch (err) {
        return next (err);
    }
};

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const author = await Author.findById(id).populate('songs');
        return res.status(200).json(author);
    } catch (err) {
        return next(err);
    }
};

const create = async (req, res, next) => {
    try {
        const { name, surname } = req.body;
        const newAuthor = new Author({ name, surname });
        await newAuthor.validate();

        const createdAuthor = await newAuthor.save();
        return  res.status(200).json(createdAuthor);
    } catch (err) {
        return next(err);
    }
};

module.exports = {
    getAll,
    getById,
    create,
};