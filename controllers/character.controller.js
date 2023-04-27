const query = require("../db/utils");

const findAll = async () => {
  return query("SELECT name, age, class, weapon FROM characters");
};

const findOne = async (name) => {
  return query("SELECT name, age, class, weapon FROM characters WHERE name = ?", [
    name,
  ]);
};

const addOne = async (character) => {
  return await query("INSERT INTO characters SET ?", [character]);
};

const updateOne = async (name, character) => {
  return await query("UPDATE characters SET ? WHERE name = ?", [
    character,
    name,
  ]);
};

const removeOne = async (character) => {
  return await query("DELETE FROM characters WHERE name = ?", [character]);
};

module.exports = {
  findAll,
  findOne,
  addOne,
  updateOne,
  removeOne,
};