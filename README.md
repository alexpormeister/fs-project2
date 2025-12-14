## README: Code Snippet API (Full Stack Project 2)

### Project Overview

This project implements a RESTful API for a Code Snippet Library using the **MERN stack** (MongoDB, Express, Node.js). It allows developers to save, retrieve, and filter their favorite code blocks. This backend serves as the foundation for a data-driven application, ensuring code is persistent and easily searchable by language.

**Core Features:**

- **CRUD Operations:** Create, Read (All, Filtered, By ID) for code snippets.
- **Filtering:** Snippets can be filtered by `language` (e.g., `GET /api/snippets?lang=javascript`).
- **Database:** MongoDB Atlas is used for persistent data storage.

### Installation and Local Run Steps

This API requires Node.js (version 18+) and npm.

#### 1. Setup and Installation

1. Clone the repository: `git clone [YOUR_REPO_URL]`
2. Navigate to the project directory: `cd snippet-api`
3. Install dependencies: `npm install`

#### 2. Environment Variables

Create a file named `.env` in the project root and add your MongoDB Atlas connection string. This file is secured and ignored by Git by the `.gitignore`.

```env
# DO NOT commit this file to GitHub!
MONGODB_URI="[YOUR_SECURE_CONNECTION_STRING_HERE]"
PORT=3000
```

3. Start the Server
   Start the API server on http://localhost:3000.
   npm start

API Endpoints
The API implements the following five routes to meet project requirements:
Verb,URL,Operation
GET,/api/snippets,Returns all snippets (can be filtered by ?lang=).
GET,/api/snippets/:id,Returns one document by ID.
POST,/api/snippets,Creates a new snippet.
PUT/PATCH,/api/snippets/:id,Updates a document by ID.
DELETE,/api/snippets/:id,Deletes a document by ID.

Environment Variable Handling
To maintain security, the MONGODB_URI is stored in a local .env file that is excluded from the repository. For deployment on Render, the variable is securely added in the service's Environment panel. This ensures no secrets are ever exposed in public code.
