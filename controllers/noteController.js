const Note = require("../models/Note");

//get All notes
const getNotes = async (req, res) => {
  try {
    const userId = req.user.id;

    const notes = await Note.find({
      $or: [
        { user: userId },                    // Your own notes
        { sharedWith: { $in: [userId] } }    // Notes shared with you
      ]
    }).sort({ updatedAt: -1 }); // Optional: latest notes first

    res.json(notes);
  } catch (error) {
    console.error("Get Notes Error:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

//get one note

const getNoteById = async (req, res) => {
  const { id } = req.params; // Note ID

  try {
    const note = await Note.findById(id);

    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    // Check if the authenticated user is the owner OR sharedWith list
    const isOwner = note.user.toString() === req.user.id;
    const isSharedWith = note.sharedWith.some(
      (sharedUserId) => sharedUserId.toString() === req.user.id
    );

    if (!isOwner && !isSharedWith) {
      return res.status(403).json({ message: 'Not authorized to view this note' });
    }

    res.json(note);

  } catch (error) {
    console.error('Get Note Error:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

//creating note
const createNote = async (req, res) => {
  const { title, content } = req.body;
  try {
    const newNote = new Note({
      title,
      content,
      user: req.user.id,
    });
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};


// update note

const updateNote = async (req, res) => {
  const { title, content } = req.body;
  try {
    const updatedNote = await Note.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      { title, content },
      { new: true }
    );
    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.json(updatedNote);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

//delete note
const deleteNote = async (req, res) => {
  try {
    const deletedNote = await Note.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.json({ message: "Note deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

//search notes

const searchNotes = async (req, res) => {
  const { q } = req.query;

  try {
    if (!q) {
      return res.status(400).json({ message: "Missing search query parameter 'q'" });
    }

    const userId = req.user.id;

    const regex = new RegExp(q, 'i');

    const notes = await Note.find({
      $and: [
        {
          $or: [
            { title: { $regex: regex } },
            { content: { $regex: regex } }
          ]
        },
        {
          $or: [
            { user: userId },
            { sharedWith: { $in: [userId] } }
          ]
        }
      ]
    });

    res.json(notes);
  } catch (error) {
    console.error("Search Error:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};


// share notes
const shareNote = async (req, res) => {
  const { id } = req.params;  // The note ID
  const { userIdToShareWith } = req.body;  // The user ID to share the note with

  try {
    // Check if the note exists
    const note = await Note.findById(id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    // Ensure the user is the owner of the note
    if (note.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "You do not have permission to share this note" });
    }

    // Add the userIdToShareWith to the sharedWith array if it's not already present
    if (!note.sharedWith.includes(userIdToShareWith)) {
      note.sharedWith.push(userIdToShareWith);
      await note.save();
    }

    res.json({ message: "Note shared successfully", note });
  } catch (error) {
    console.error("Share Note Error:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};
module.exports = { getNotes, getNoteById, createNote, updateNote, deleteNote, searchNotes, shareNote };
