const express = require("express");
const character = require("../controllers/character.controller")
const router = express.Router();

router.get("/:id?", async (req, res, next) => {
    let { name } = req.params;
    let data;
  
    if (name) {
      data = await character.findOne(name);
    } else {
      data = await character.findAll();
    }
  
    res.json(data);
  });
  
  router.post("/", async (req, res, next) => {
    let characterID = req.body;
    let data = await character.addOne(characterID);
    res.json(data);
  });
  
  router.put("/:id", async (req, res, next) => {
    let { id } = req.params;
    let characterID = req.body;
    let data = await character.updateOne(id, characterID);
    res.json(data);
  });
  
  router.delete("/:id", async (req, res, next) => {
    let { id } = req.params;
    let data = await character.removeOne(id);
    res.json(data);
  });
  

module.exports =  router  ;