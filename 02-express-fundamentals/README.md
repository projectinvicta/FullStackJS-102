# Exercise 02: Building with Express.js

Welcome to Module 2! In this module, you will build a functional web server using **Express.js** and learn the fundamentals of server routing, handling client inputs, and configuring HTTP responses.

---

## 📖 Key Concepts

### 1. Express Server Setup
To create an Express server:
1. Import `express`.
2. Initialize the application using `const app = express();`.
3. Inform Express how to parse request payloads (e.g. using `express.json()`).
4. Bind to a network port and listen for incoming traffic:
   ```javascript
   const PORT = 3000;
   app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
   });
   ```

### 2. HTTP Methods (RESTful API)
We map client actions to standard HTTP verbs:
- **GET:** Retrieve a resource or collection.
- **POST:** Create a new resource.
- **PUT:** Replace/update an existing resource.
- **DELETE:** Remove a resource.

### 3. The Request (Req) Object
The client sends data to the server in three primary ways, all exposed by the `req` object:
- **Route Parameters (`req.params`):** Variables embedded in the URL path. 
  - *Example URL:* `/books/42` matches route `/books/:id`, where `req.params.id` is `"42"`.
- **Query Parameters (`req.query`):** Key-value pairs appended after the `?` character in the URL. Usually used for filtering or pagination.
  - *Example URL:* `/books?genre=fiction` parses to `req.query.genre` equal to `"fiction"`.
- **Headers (`req.headers`):** Metadata about the client context (e.g., `req.headers['user-agent']`).

### 4. The Response (Res) Object
The server responds to the client using methods on the `res` object:
- **`res.status(code)`:** Sets the HTTP status code (e.g., `200` for OK, `201` for Created, `400` for Bad Request, `404` for Not Found).
- **`res.json(payload)`:** Converts a JavaScript object to a JSON string and sets the `Content-Type` header to `application/json`.
- **`res.set(headers)`:** Sets custom HTTP headers on the response.

---

## 🛠️ Step-by-Step Instructions

We will build a CRUD (Create, Read, Update, Delete) API to manage a collection of books.

### Step 1: Examine the Data
Open [books.json](file:///Users/stantonwjones/dev/FullStackJS-102/02-express-fundamentals/books.json) to see the starter book collection.

### Step 2: Implement the Express Server
Open [server.js](file:///Users/stantonwjones/dev/FullStackJS-102/02-express-fundamentals/server.js) and follow the instructions in the `TODO` statements:
1. Import Express and load the initial books data from `books.json`.
2. Initialize the Express app and enable JSON parsing middleware: `app.use(express.json());`.
3. Set up the following routing logic:
   - **`GET /books`**: Return all books. If a `genre` query parameter is provided (e.g. `/books?genre=Sci-Fi`), filter books matching that genre (case-insensitive).
   - **`GET /books/:id`**: Return a single book by ID. Convert the ID parameter to a number to find the match. If not found, return a `404` status with a descriptive JSON message.
   - **`POST /books`**: Add a new book to the collection. Generate a new unique ID, extract the title, author, and genre from the body, and push it to the list. Return `201 Created` status with the new book payload.
   - **`PUT /books/:id`**: Find the book by ID. If found, update its fields with the body payload and return the updated book. Otherwise, return a `404` status.
   - **`DELETE /books/:id`**: Delete the book with the matching ID from the array. Return a `200 OK` status with a confirmation message, or `404` if not found.
4. Set a custom response header `X-Workshop-Name` containing `FullStackJS-102` on all responses (hint: you can set this directly on individual endpoints or use a custom global middleware).
5. Listen on port `3000` (or retrieve the port from your `package.json` config).

### Step 3: Run and Verify the Server
1. Run the server using:
   ```bash
   node 02-express-fundamentals/server.js
   ```
2. Open another terminal panel and test the endpoints using `curl`:
   - **Get all books:**
     ```bash
     curl http://localhost:3000/books
     ```
   - **Get books filtered by genre:**
     ```bash
     curl "http://localhost:3000/books?genre=Fantasy"
     ```
   - **Get a book by ID:**
     ```bash
     curl http://localhost:3000/books/1
     ```
   - **Create a book:**
     ```bash
     curl -X POST -H "Content-Type: application/json" -d '{"title": "Dune", "author": "Frank Herbert", "genre": "Sci-Fi"}' http://localhost:3000/books
     ```
   - **Update a book:**
     ```bash
     curl -X PUT -H "Content-Type: application/json" -d '{"title": "The Hobbit: Extended Edition"}' http://localhost:3000/books/2
     ```
   - **Delete a book:**
     ```bash
     curl -X DELETE http://localhost:3000/books/1
     ```
3. Look closely at the response headers of any request using the `-i` flag (e.g. `curl -i http://localhost:3000/books`) to verify your custom header `X-Workshop-Name` is present!
