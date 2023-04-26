const express = require("express");
const  db  = require("../mockdb");

const router = express.Router();

router.get("/character?", async (req, res, next) => {
  try {
    let { name } = req.params;
    let data;
    if (name){
        data = await db.getOne(name)
    }
    else{
        data = await db.getAll();
    }
    res.json(data)
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    let newCharacter = req.body;
    let data = await db.add(newCharacter);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    let { name } = req.params;
    let updatedCharacter = req.body;
    let data = await db.update(id,updatedCharacter);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    let { name } = req.params;
    let data = await db.remove(name);
    res.json(data)
  } catch (error) {
    next(error);
  }
});

module.exports = router;