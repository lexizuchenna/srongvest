const isLoggedOut = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect("/users/login");
};

const isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return next();
  }

  res.redirect("/users/dashboard");
};

module.exports = {
  isLoggedIn,
  isLoggedOut,
};
