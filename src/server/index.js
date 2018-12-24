const port = 3100;

const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(require('./sessionAdapter'));

const passport = require('passport');
const LocalDevStrategy = require('./googleLocalDevStrategy');
passport.serializeUser((user, cb) => cb(null, user));
passport.deserializeUser((obj, cb) => cb(null, obj));

// TODO: hide this behind a switch and load real oauth strategy if not local development
passport.use(new LocalDevStrategy('google', '/auth/google', '/auth/google/callback', {
  id: 1,
  displayName: 'Adam',
  photos: [{ value: 'http://localhost:3100/cards.svg'}]
}));

app.use(passport.initialize());
app.use(passport.session());
app.get('/auth/google', passport.authenticate('google'));
app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => res.redirect('/'));

app.listen(port, () => console.log(`Listening on port ${port}...`));

// NOTE: Dev-only redirect that should be hidden behind a flag
app.get('/', (req, res) => res.redirect('http://localhost:3000/'));
