# Exercise 03: Middleware & Hooks

Welcome to Module 3! In this module, you will learn how to integrate essential middleware into your Express.js server to handle incoming payload formats, manage persistent user state via cookies and sessions, and configure Cross-Origin Resource Sharing (CORS) rules.

---

## 📖 Key Concepts

### 1. What is Middleware?
In Express, **middleware** is a function that runs in the middle of the Request/Response cycle. Middleware functions have access to the Request object (`req`), Response object (`res`), and the `next` function.

```javascript
app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next(); // Pass control to the next middleware function
});
```
If a middleware function does not end the request-response cycle (e.g. by sending a response with `res.send()`), it **must** call `next()` to pass control, otherwise the request will hang.

### 2. Essential Middleware to Learn
- **Body Parsers:** Help Express interpret incoming request payloads.
  - `express.json()` parses JSON payloads.
  - `express.urlencoded({ extended: true })` parses standard HTML form submissions.
- **Cookie Parser (`cookie-parser`):** Parses cookie headers and populates `req.cookies` with an object keyed by the cookie names. Allows you to set client-side state using `res.cookie(name, value)`.
- **CORS (`cors`):** Configures security headers to enable or restrict Cross-Origin Resource Sharing, determining which outside websites are allowed to fetch data from your API.
- **Express Session (`express-session`):** Stores user session state on the server side and assigns a unique session ID cookie to the client. This allows state (like login status or site preferences) to persist across multiple requests.

---

## 🛠️ Step-by-Step Instructions

### Step 1: Install New Dependencies
In your project terminal (at the workspace root), install the additional middleware packages:
```bash
npm install cookie-parser cors express-session
```

### Step 2: Open and Configure the Server
Open [03-middleware-security/server.js](file:///Users/stantonwjones/dev/FullStackJS-102/03-middleware-security/server.js) and follow the instructions in the `TODO` comments:
1. Import `cookie-parser`, `cors`, and `express-session`.
2. Apply the **CORS** middleware globally, enabling requests from any origin (or customize it).
3. Apply the **JSON** and **URL-encoded** body parsing middlewares.
4. Apply the **Cookie Parser** middleware (provide a signing secret string if desired).
5. Apply the **Session** middleware with configurations for `secret` (for signing the session ID cookie), `resave: false`, and `saveUninitialized: true`.
6. Implement the endpoints:
   - **`GET /`**: Checks `req.session.views` to keep track of how many times the user has visited the server in their current session. Increments this counter and displays it to the user.
   - **`GET /set-preference`**: Accepts a query parameter `theme` (e.g. `?theme=dark`) and sets a cookie named `theme` containing this value.
   - **`GET /get-preference`**: Reads the cookie named `theme` and responds with the current client preference.
7. Start the server on port `3000`.

### Step 3: Run and Verify the Server
1. Start your server:
   ```bash
   node 03-middleware-security/server.js
   ```
2. Test sessions in your web browser:
   - Open a browser window to `http://localhost:3000`.
   - Refresh the page several times. You should see the visit counter increase!
   - Try opening the same URL in an incognito window. The counter will reset to 1 because it's a new session.
3. Test cookies:
   - In your browser, navigate to `http://localhost:3000/set-preference?theme=dark`.
   - Now, navigate to `http://localhost:3000/get-preference`. You should see the response: `{"theme":"dark"}`.
   - Look at your browser's developer tools (Application/Storage tab -> Cookies) to inspect the cookies set by the server!
