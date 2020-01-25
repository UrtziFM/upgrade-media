const Book = require('../models/Book');

const getAll = async (req, res, next) => {
  try {
    const books = await Book.find();
    return res.status(200).json(books);
  } catch (err) {
    return next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.status(200).json(book);
  } catch (err) {
    return next(err);
  }
};

const createBook = async (req, res, next) => {
  try {
    const { title, year } = req.body;

    const newBook = new Book({ title, year });
    const createdBook = await newBook.save();
    return res.status(200).json(createdBook);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getAll,
  getById,
  createBook,
};
