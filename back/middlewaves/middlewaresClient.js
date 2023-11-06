//permet de donner accès au client
module.exports = function (req, res, next) {
    if (req.user && req.user.role_user === "client") {
      return next();
    }
  
    return res.send(403, { error: 'Accès refusé. Seuls les clients peuvent accèder à cette ressource'});
  }