const express = require("express");
const error = require("../middleware/error");
const routes = ["dashboard"];

module.exports = function(app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static("public"));

  let data = "";

  // get new page
  app.get("/", (req, res) => {
    res.render("dashboard", {
      path: "/",
      pageTitle: "dashboard",
      data,
      errorMessage: "message",
    });
  });

  // not need to import and use seperatly
  routes.forEach(route => {
    app.use("/api/" + route, require("../routes/" + route));
  });

  // catch 404 errors and forward to error handler
  app.use(error.get404);

  console.log("evn:" + app.get("env")); //development
};
