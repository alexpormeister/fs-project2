# Snippet API

This is the backend for the Code Snippet Library. It is a Node.js and Express API that connects to a MongoDB database to store and manage code snippets.

## How to Install and Run

### 1. Requirements

- You need Node.js installed.
- You need a MongoDB database.

### 2. Setup

- Go to the snippet-api folder.
- Run npm install to get the packages.
- Create a .env file and add your connection:
  MONGODB_URI=your_mongodb_link_here
- Run node server.js to start the API.

## How to Deploy on Render

1. Create a new Web Service on Render and connect your GitHub repository.
2. Set the Root Directory to snippet-api (or whichever folder your server.js is in).
3. Set the Build Command to npm install.
4. Set the Start Command to node server.js.
5. Go to the Environment tab and add your MONGODB_URI.

## API Routes

The frontend talks to these routes:

- GET /api/snippets: Gets all snippets from the database.
- POST /api/snippets: Saves a new snippet. Needs title, language, and code.
- DELETE /api/snippets/:id: Deletes a snippet using its ID.

## Environment Variables

To make this work on Render, add these variables in the dashboard settings:

| Variable    | What it does                                                  |
| :---------- | :------------------------------------------------------------ |
| MONGODB_URI | Your MongoDB connection string.                               |
| PORT        | The port the server runs on (Render sets this automatically). |

## Libraries Used

- Express: To handle the routes.
- Mongoose: To talk to MongoDB.
- CORS: So the React frontend is allowed to connect.
- Dotenv: To keep the database link secret.

## Link for the working app

https://snippet-frontend-2k3b.onrender.com
