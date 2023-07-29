const express = require("express");
const db = require("../lib/postgres.db.js");
const kirtans = express.Router();

kirtans.get("/search/", async (req, res) => {
  const sql = `
  SELECT 
    id,
    title_english
  FROM 
    kirtans
  WHERE
    description_lines_synced = 1
  ORDER BY 
    title_english 
  ASC
  LIMIT 100
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

kirtans.get("/search/:term", async (req, res) => {
  const sql = `
  SELECT 
    title_english
  FROM 
    kirtans
  WHERE
    description_lines_synced = 1
  AND
    LOWER(title_english) LIKE '${req.params.term.toLowerCase()}%' 
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

kirtans.get("/:id", async (req, res) => {

  const sql = `
  SELECT 
    id,
    sub_category_id,
    title_gujarati,
    title_english,
    description_gujarati,
    description_english
  FROM 
    kirtans
  WHERE
    id = ${req.params.id}
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

module.exports = kirtans;