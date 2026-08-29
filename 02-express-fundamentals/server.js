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

// TODO: Step 1 - Initialize the Express application
const app = null;

// TODO: Step 2 - Enable JSON body parsing middleware
// Hint: app.use(...)



// TODO: Step 3 - Implement global middleware (or configure endpoints) to set the custom response header
// Header key: 'X-Workshop-Name', value: 'FullStackJS-102'
// Hint: res.set(...) or res.header(...)



// TODO: Step 4 - Implement GET /books
// If the query parameter 'genre' is provided (e.g., /books?genre=Sci-Fi), return filtered books.
// Otherwise, return all books.
// Send responses with status 200 OK.



// TODO: Step 5 - Implement GET /books/:id
// Find a book by its 'id'. Convert the route parameter (req.params.id) to a number.
// If found, return the book. If not, return status 404 with a JSON error message.



// TODO: Step 6 - Implement POST /books
// Extract 'title', 'author', and 'genre' from the request body.
// Create a new book object with a unique 'id' (e.g., max existing ID + 1).
// Add it to the 'books' array.
// Return status 201 Created with the new book object.



// TODO: Step 7 - Implement PUT /books/:id
// Find the book by its 'id'.
// If found, update its fields ('title', 'author', 'genre') with any values provided in the request body.
// Return status 200 OK with the updated book object.
// If not found, return status 404 with a JSON error message.



// TODO: Step 8 - Implement DELETE /books/:id
// Find and remove the book by its 'id'.
// If found, remove it from the 'books' array and return status 200 OK with a success message.
// If not found, return status 404 with a JSON error message.



// TODO: Step 9 - Start the Express server on port 3000 (or load it from your package.json config if set)
// Print a console message indicating the server is running and on which port.
const PORT = 3000;

