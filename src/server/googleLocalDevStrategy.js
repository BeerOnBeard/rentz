const passport = require('passport-strategy');
const util = require('util');

function Strategy(name, authUrl, callbackUrl, user) {
  passport.Strategy.call(this);
  this.name = name;
  this._user = user;
  this._authUrl = authUrl;
  this._callbackUrl = callbackUrl;
}

util.inherits(Strategy, passport.Strategy);

Strategy.prototype.authenticate = function(incomingMessage) {
  if (incomingMessage.url === this._authUrl) {
    this.redirect(this._callbackUrl);
    return;
  }

  this.success(this._user);
};

module.exports = Strategy;
