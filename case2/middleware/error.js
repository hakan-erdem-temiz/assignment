const winston = require("winston");

module.exports.get404 = (req, res, next) => {
  res.status(404).render("error", {
    pageTitle: "Page Not Found",
    path: "/error",
    message: "Page Not Found!"
  });
};

module.exports.get500 = function(err, req, res, next) {
  winston.error(err.message, err);

  //error
  //warn
  //info
  //verbose
  //debug
  //silly
  //Log the exception
  res.status(500).send("Something failed.");
};
