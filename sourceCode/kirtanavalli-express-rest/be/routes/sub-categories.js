const express = require("express");
const db = require("../lib/postgres.db.js");
const subCategories = express.Router();

subCategories.get("/", async (req, res) => {
  const sql = `SELECT * FROM sub_categories`;
  db.query(sql, [], (err, data) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: data.rows
    });
  });
});

module.exports = subCategories;