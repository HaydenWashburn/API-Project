const query = require("../db/utils");

const findAll = async () => {
  return query("SELECT name, age, class, weapon FROM characters");
};

const findOne = async (id) => {
  return query("SELECT name, age, class, weapon FROM characters WHERE name = ?", [
    id,
  ]);
};

const addOne = async (character) => {
  return await query("INSERT INTO characters SET ?", [character]);
};

const updateOne = async (id, employee) => {
  return await query("UPDATE characters SET ? WHERE name = ?", [
    employee,
    id,
  ]);
};

const removeOne = async (id) => {
  return await query("DELETE FROM characters WHERE name = ?", [id]);
};

module.exports = {
  findAll,
  findOne,
  addOne,
  updateOne,
  removeOne,
};