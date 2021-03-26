const express = require("express");
const dashboard = express.Router();

dashboard.get("/", (req, res) => {
  res.render("dashboard", {
    isLogin: true,
    user: "fadliselaz",
  });
});

module.exports = dashboard;
