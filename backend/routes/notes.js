const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

//Route-1: get all the routes
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("some error from our side ");
  }
});

//Route-2: add the notes
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "should have atleast 5 char").isLength({ min: 3 }),
  ],
  async (req, res) => {
    try {
        //this line saves it in form of a constructor it can be also written in another way as shown in auth.js refer it 
      const { title, description, tag } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      //This was just to check the responses
      // const notes = await Notes.find({ user: req.user.id });
      // res.json(notes);

      //This line will save the note 
      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id
      })
      const SavedNote = await note.save();
      res.json(SavedNote);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("some error from our side ");
    }
  }
);

module.exports = router;
