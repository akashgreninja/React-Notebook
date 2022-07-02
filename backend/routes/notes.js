const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");
var cors = require('cors')

router.use(cors())

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
    body("title", "Enter a valid title").isLength({ min: 1 }),
    body("description", "should have atleast 5 char").isLength({ min: 1 }),
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

//Route-3 to update the notes

router.put(
  "/updatenote/:id",
  fetchuser,

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
     const newNote={}
     if(title){newNote.title=title}
     if(description){newNote.description=description}
     if(tag){newNote.tag=tag}

     const note=await Notes.findById(req.params.id);
     if(!note){
      return res.status(404).send("not found")
     }
     if(note.user.toString() !==req.user.id){
      return res.status(401).send("seriously??trying to hack me ")
     }

      let bruh=await Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
      res.json(bruh)


    } catch (error) {
      console.log(error.message);
      res.status(500).send("some error from our side ");
    }
  }
);


router.delete(
  "/deletenote/:id",
  fetchuser,
  async (req, res) => {
    try {
        //this line saves it in form of a constructor it can be also written in another way as shown in auth.js refer it 
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      //This was just to check the responses
      // const notes = await Notes.find({ user: req.user.id });
      // res.json(notes);
     const note=await Notes.findById(req.params.id);
     if(!note){
      return res.status(404).send("not found")
     }
     if(note.user.toString() !==req.user.id){
      return res.status(401).send("seriously??trying to hack me ")
     }

      let bruh=await Notes.findByIdAndRemove(req.params.id)
      res.json({"status":"deleted sucessfully",note:note})


    } catch (error) {
      console.log(error.message);
      res.status(500).send("some error from our side ");
    }
  }
);
//check
module.exports = router;
