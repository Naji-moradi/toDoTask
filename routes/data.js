const router = require("express").Router();

const Datas = require("../models/Datas");

//CREATE POST
router.post("/", async (req, res) => {
  const newData = new Datas(req.body);
  try {
    const savedData = await newData.save();
    res.status(200).json(savedData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE Data
router.delete("/:id", async (req, res) => {
  try {
    const data = await Datas.findById(req.params.id);
    await data.delete();
    res.status(200).json("Post has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL POSTS

router.get("/", async (req, res) => {
  try {
    const data = await Datas.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
