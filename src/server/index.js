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
const googleAuthPath = '/auth/google';
const googleAuthCallbackPath = '/auth/google/callback';
passport.use(new LocalDevStrategy('google', googleAuthPath, googleAuthCallbackPath, {
  id: 1,
  displayName: 'Adam',
  photos: [{ value: 'http://localhost:3100/cards.svg'}]
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.authenticate('google'));
app.get(googleAuthPath);
app.get(googleAuthCallbackPath, (req, res) => res.redirect('/'));

app.listen(port, () => console.log(`Listening on port ${port}...`));

// NOTE: Dev-only redirect that should be hidden behind a flag
app.get('/', (req, res) => res.redirect('http://localhost:3000/'));

app.get('/user', (req, res) => { res.json({ name: req.user.displayName, photo: req.user.photos[0].value })});
