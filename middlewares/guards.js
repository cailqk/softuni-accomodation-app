//in case we decide to change the structure and show the 'host' button on the home screen which is now hidden when there is no user

function isUser() {
  return (req, res, next) => {
    if (req.user != undefined) {
      next();
    } else {
      res.redirect("/auth/login");
    }
  };
}

function isGuest() {
  return (req, res, next) => {
    if (req.user != undefined) {
      res.redirect("/");
    } else {
      next();
    }
  };
}

function hasRole(role) {
  return (req, res, next) => {
    if (req.user === undefined || req.user.roles.includes(role) === false) {
      res.redirect("/login");
    } else {
      next();
    }
  };
}

module.exports = {
  isUser,
  isGuest,
};
