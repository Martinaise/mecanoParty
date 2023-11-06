//permet de donner accès à l'admin
module.exports = function (req, res, next) {
    if (req.user && req.user.role_user === "admin") {
      return next();
    }
  
    return res.send(403, { error: 'Accès refusé. Seuls les administrateurs peuvent accèder à cette ressource'});
  }