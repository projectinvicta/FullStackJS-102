import express from 'express';
// Step 1 - Import the required middleware libraries
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';

const app = express();

// Step 2 - Enable Cross-Origin Resource Sharing (CORS) globally
app.use(cors());

// Step 3 - Configure body parser middlewares to handle JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Step 4 - Enable the cookie-parser middleware
app.use(cookieParser());

// Step 5 - Enable and configure express-session middleware
app.use(session({
  secret: 'workshop-secret-key',
  resave: false,
  saveUninitialized: true
}));

// Step 6 - Create a GET / route that tracks and increments user visits in the session
app.get('/', (req, res) => {
  req.session.views = (req.session.views || 0) + 1;
  res.send(`You have visited this page ${req.session.views} times in this session.`);
});

// Step 7 - Create a GET /set-preference route to store client preferences in a cookie
app.get('/set-preference', (req, res) => {
  const { theme } = req.query;
  if (!theme) {
    return res.status(400).send('Theme query parameter is required (e.g. ?theme=dark)');
  }
  res.cookie('theme', theme);
  res.send(`Theme preference set to ${theme}`);
});

// Step 8 - Create a GET /get-preference route to read the cookie
app.get('/get-preference', (req, res) => {
  const theme = req.cookies.theme || 'default';
  res.json({ theme });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Middleware & security server is running on port ${PORT}`);
});
