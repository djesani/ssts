const express = require("express");
const db = require("../lib/postgres.db.js");
var categories = express.Router();

categories.get("/", async (req, res) => {
  var sql = `
  SELECT 
    * 
  FROM 
    categories
  `;
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

module.exports = categories;