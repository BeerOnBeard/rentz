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

const eventStoreConfiguration = {
  host: 'localhost',
  port: 1113,
  username: 'admin',
  password: 'changeit'
};

const EventStore = require('event-store-client');
const eventStoreConnection = new EventStore.Connection({
  host: eventStoreConfiguration.host,
  port: eventStoreConfiguration.port,
  onClose: hadError => {
    console.log('Connection closed');
    if (hadError) {
      console.log('Error caused connection to close')
    }
    process.exit(1);
  }
});

const GameRepository = require('./GameRepository');
const gameRepository = new GameRepository(eventStoreConnection, eventStoreConfiguration.username, eventStoreConfiguration.password);

app.listen(port, () => console.log(`Listening on port ${port}...`));

// NOTE: Dev-only redirect that should be hidden behind a flag
app.get('/', (req, res) => res.redirect('http://localhost:3000/'));

app.get('/user', (req, res) => { res.json({ name: req.user.displayName, photo: req.user.photos[0].value })});

function generateGameId() {
  const potentialLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const idLength = 8;
  let gameId = '';
  for (let i = 0; i < idLength; i++) {
    gameId += potentialLetters.charAt(Math.floor(Math.random() * potentialLetters.length));
  }

  return gameId;
}

// create game
app.post('/games', async (req, res) => {
  // TODO: have to handle if an ID is generated that's already used
  let gameId = generateGameId();
  let game = await gameRepository.get(gameId);
  game.create(gameId);
  let savedGame = await gameRepository.save(game);
  res.status(201).json(savedGame);
});
