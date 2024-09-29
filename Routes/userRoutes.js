const express = require("express");
const User = require("../Models/userModel");
const router = express.Router();

// POST for inserting a single data
router.post("/", async (req, res) => {
  try {
    const newUser = new User(req.body);

    await newUser.save();

    res.status(200).json({
      message: "User data inserted successfully.",
    });
  } catch (err) {
    res.status(500).json({
      error: "There is a server-side error.",
    });
  }
});

// POST for inserting multiple data
router.post("/all", async (req, res) => {
  try {
    await User.insertMany(req.body);

    res.status(200).json({
      message: "All data inserted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      error: "There is a server-side error.",
    });
  }
});

// PUT to update
router.put("/:id", async (req, res) => {
  try {
    await User.updateOne(
      { _id: req.params.id },
      {
        $set: {
          role: "Student",
        },
      }
    );

    res.status(200).json({
      message: "User role updated successfully.",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update User role.",
    });
  }
});

// GET for getting all data
router.get("/", async (req, res) => {
  try {
    const result = await User.find()
    // const result = await User.find({role: "Student"}) // Find by filtering
    // const result = await User.find().select({ _id: 0, date: 0 }); // Stop showing id and date
    // const result = await User.find().select({ _id: 0, date: 0 }).limit(2); // Limits showing data

    console.log(result);

    res.status(200).json({
      message: "successful.",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// GET data by Id
router.get('/:id', async (req, res)=>{
  try {
    const result = await User.find({_id: req.params.id})

    console.log(result);
    
    res.status(200).json({
      message: "successful."
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
})

// DELETE data
router.delete('/:id', async (req, res)=>{
  try {
    await User.deleteOne({_id: req.params.id})

    res.status(200).json({
      message: "User deleted successfully."
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
})
module.exports = router;
