module.exports = function AuthController() {
  this.login = function(req, res) {
    // The user has been confirmed to exist, and a session established,
    // so return any add'l user info
    if (!req.user) return res.status(500).json({ msg: 'Error logging in ' });

    const { firstName, lastName, email } = req.user;

    return res.status(200).json({ firstName, lastName, email });
  };

  this.logout = function(req, res) {
    req.logout();

    return res.sendStatus(200);
  };
};
