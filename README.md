# Simple REST API with Node.js and Express

This project demonstrates a basic REST API built with Node.js and Express. It uses MongoDB for data storage and includes example routes for creating, reading, updating, and deleting data.

## Getting Started

1. **Prerequisites:** Ensure you have `Node.js` and `npm` installed on your machine. You can check by running:

   ```
   bash
   node -v && npm -v
   ```

2. **Set up the Project:**

   ```bash
   cd ~/project/  # Navigate to your project directory
   git init        # Initialize a local Git repository
   git remote add origin [https://github.com/](https://github.com/){{username}}/{{repository}} # Add your remote repository
   npm init -y     # Initialize a new Node.js project (the -y flag accepts all default values)
   ```

3. **Install Dependencies:**

   ```bash
   npm install express mongoose dotenv cors
   ```

   * **express:** A fast, minimalist web framework for Node.js.
   * **mongoose:** An Object Data Modeling (ODM) library for MongoDB and Node.js.
   * **dotenv:**  Loads environment variables from a `.env` file.
   * **cors:** Middleware for enabling Cross-Origin Resource Sharing (CORS).

4. **Install Development Dependencies:**

   ```bash
   npm install --save-dev nodemon 
   ```

   `nodemon` is a utility that automatically restarts your server whenever you make changes to your code.

5. **Create Project Files:**

   ```bash
   touch index.js .env .README.md .gitignore
   ```

6. **Configure .gitignore and Upload to Repository:**

   Open your `.gitignore` file:

   ```bash
   code .gitignore 
   ```

   This file tells Git which files and folders to exclude from your repository. Add the following content to your `.gitignore`:

   ```
   # Ignore dependency directories
   /node_modules/

   # Ignore sensitive information
   .env
   *.pem
   *.key
   *.cert

   # Ignore common editor and IDE files
   .vscode/
   *.swp
   *.swo
   *.tmp
   *.bak
   ```

   **Stage and Commit Your Changes:**

   ```bash
   git add .        # Stage all changes
   git commit -m "Initial commit" # Commit with a message
   git push origin main   # Push changes to your main branch
   ```

   **Create a Development Branch:**

   ```bash
   git branch dev   # Create a new branch named 'dev'
   git checkout dev  # Switch to the 'dev' branch 
   ```

   It's a good practice to create a separate branch for development to keep your main branch stable.

7. **Configure Backend Foundations:**

   Open your `index.js` file:

   ```bash
   code index.js
   ```

   Add the following code:

   ```javascript
   const express = require("express");
   const app = express(); 
   const PORT = 3000;

   app.set("port", PORT); // Set the port (good practice for configuration)

   app.get("/greet", (req, res) => { 
       res.send("Hello, World!");
   });

   app.listen(PORT, () => {
       console.log(`Listening on port ${PORT}`);
   });
   ```

   This code:

   * Imports the Express.js module.
   * Creates an Express application instance.
   * Sets the port to 3000.
   * Defines a route handler for GET requests to the `/greet` path.
   * Starts the server and listens for incoming requests.


<!-- 12-11-2024 -->

`mkdir controllers models routes`

`touch controllers/helloControllers.js routes/helloRoutes.js`

