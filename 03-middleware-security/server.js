import express from 'express';
// TODO: Step 1 - Import the required middleware libraries
// Hint: import cors from 'cors';
// Hint: import cookieParser from 'cookie-parser';
// Hint: import session from 'express-session';




const app = express();

// TODO: Step 2 - Enable Cross-Origin Resource Sharing (CORS) globally
// Hint: app.use(cors());



// TODO: Step 3 - Configure body parser middlewares to handle JSON and URL-encoded data
// Hint: app.use(express.json());
// Hint: app.use(express.urlencoded({ extended: true }));



// TODO: Step 4 - Enable the cookie-parser middleware
// Hint: app.use(cookieParser());



// TODO: Step 5 - Enable and configure express-session middleware
// Choose a session secret, set resave to false, and saveUninitialized to true
// Hint:
// app.use(session({
//   secret: 'your-secret-key',
//   resave: false,
//   saveUninitialized: true
// }));



// TODO: Step 6 - Create a GET / route that tracks and increments user visits in the session
// Read and increment 'req.session.views'. If it doesn't exist, initialize it to 1.
// Respond with a message like: "You have visited this page X times in this session."
app.get('/', (req, res) => {

});

// TODO: Step 7 - Create a GET /set-preference route to store client preferences in a cookie
// Read the 'theme' query parameter (e.g. ?theme=dark)
// Set a cookie named 'theme' to this value. Make sure to respond with a message confirming it was set.
// Hint: res.cookie(name, value)
app.get('/set-preference', (req, res) => {

});

// TODO: Step 8 - Create a GET /get-preference route to read the cookie
// Read the 'theme' cookie and send it back as JSON
// Hint: req.cookies.theme
app.get('/get-preference', (req, res) => {

});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Middleware & security server is running on port ${PORT}`);
});
