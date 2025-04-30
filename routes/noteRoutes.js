const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  getNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
  searchNotes,
  shareNote
} = require("../controllers/noteController");

router.use(authMiddleware); // Apply authMiddleware to all note routes

router.get("/notes", getNotes);
router.get("/notes/:id", getNoteById);
router.post("/notes", createNote);
router.put("/notes/:id", updateNote);
router.delete("/notes/:id", deleteNote);
router.get("/search", searchNotes);
router.post('/notes/:id/share', shareNote);

module.exports = router;
