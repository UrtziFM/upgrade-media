const Song = require('../models/Song.js');

const getAll = async (req, res, next) => {
    try {
        const songs = await Song.find();
        return res.status(200).json(songs);
    } catch (err) {
        return next(err);
    }
};

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const song = await Song.findById(id).populate('authorId');
        return res.status(200).json(song);
    } catch (err) {
        return next(err);
    }
};

const create = async (req, res, next) => {
    try {
      const { title, authorId, year } = req.body;
  
      const newSong = new Song({ title, authorId, year });
      await newSong.validate();
  
      const createdSong = await newSong.save();
      return res.status(200).json(createdSong);
    } catch (err) {
      return next(err);
    }
  };
  
  

const update = async (req, res, next ) => {
    try {
        const { id } = req.params;
        const { title, authorId, year } = req.body;

        const song = await Song.findById(id);
        const updatedSong = {
            _id: id,
            title: title || song.title,
            authorId: authorId || song.authorId,
            year: year || song.year,
        };

        await song.updateOne(updatedSong);
        return res.status(200).json(updatedSong);
    } catch (err) {
        return next(err);
    }
};

const remove = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedSong = await Song.findByIdAndDelete(id);
        return res.status(200).json(deletedSong);
    } catch (err) {
        return next(err);
    }
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
};