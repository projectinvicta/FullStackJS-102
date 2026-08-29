import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Helper to get directory name in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the initial books data
const booksPath = path.join(__dirname, 'books.json');
let books = JSON.parse(fs.readFileSync(booksPath, 'utf8'));

// Step 1 - Initialize the Express application
const app = express();

// Step 2 - Enable JSON body parsing middleware
app.use(express.json());

// Step 3 - Implement global middleware to set the custom response header
app.use((req, res, next) => {
  res.set('X-Workshop-Name', 'FullStackJS-102');
  next();
});

// Step 4 - Implement GET /books
// If the query parameter 'genre' is provided (e.g., /books?genre=Sci-Fi), return filtered books.
// Otherwise, return all books.
app.get('/books', (req, res) => {
  const { genre } = req.query;
  if (genre) {
    const filteredBooks = books.filter(b => b.genre.toLowerCase() === genre.toLowerCase());
    return res.status(200).json(filteredBooks);
  }
  res.status(200).json(books);
});

// Step 5 - Implement GET /books/:id
// Find a book by its 'id'. Convert the route parameter (req.params.id) to a number.
// If found, return the book. If not, return status 404 with a JSON error message.
app.get('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id, 10);
  const book = books.find(b => b.id === bookId);
  if (!book) {
    return res.status(404).json({ error: `Book with ID ${bookId} not found` });
  }
  res.status(200).json(book);
});

// Step 6 - Implement POST /books
// Extract 'title', 'author', and 'genre' from the request body.
// Create a new book object with a unique 'id' (e.g., max existing ID + 1).
// Add it to the 'books' array.
// Return status 201 Created with the new book object.
app.post('/books', (req, res) => {
  const { title, author, genre } = req.body;
  if (!title || !author || !genre) {
    return res.status(400).json({ error: 'Title, author, and genre are required' });
  }
  
  const nextId = books.length > 0 ? Math.max(...books.map(b => b.id)) + 1 : 1;
  const newBook = { id: nextId, title, author, genre };
  
  books.push(newBook);
  res.status(201).json(newBook);
});

// Step 7 - Implement PUT /books/:id
// Find the book by its 'id'.
// If found, update its fields ('title', 'author', 'genre') with any values provided in the request body.
// Return status 200 OK with the updated book object.
// If not found, return status 404 with a JSON error message.
app.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id, 10);
  const bookIndex = books.findIndex(b => b.id === bookId);
  
  if (bookIndex === -1) {
    return res.status(404).json({ error: `Book with ID ${bookId} not found` });
  }
  
  const { title, author, genre } = req.body;
  const updatedBook = {
    ...books[bookIndex],
    ...(title && { title }),
    ...(author && { author }),
    ...(genre && { genre })
  };
  
  books[bookIndex] = updatedBook;
  res.status(200).json(updatedBook);
});

// Step 8 - Implement DELETE /books/:id
// Find and remove the book by its 'id'.
// If found, remove it from the 'books' array and return status 200 OK with a success message.
// If not found, return status 404 with a JSON error message.
app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id, 10);
  const bookIndex = books.findIndex(b => b.id === bookId);
  
  if (bookIndex === -1) {
    return res.status(404).json({ error: `Book with ID ${bookId} not found` });
  }
  
  books.splice(bookIndex, 1);
  res.status(200).json({ message: `Book with ID ${bookId} deleted successfully` });
});

// Step 9 - Start the Express server on port 3000 (or load it from your package.json config if set)
const PORT = process.env.npm_package_config_port || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
