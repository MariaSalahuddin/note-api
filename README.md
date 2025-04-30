# note-api

A simple RESTful API for creating, updating, deleting, sharing, and searching notes, built with Node.js, Express, and MongoDB.

Tech Stack & Tool Choices

1. Node.js + Express: Chosen for building the backend because it's lightweight and efficient for building RESTful APIs.
2. MongoDB: A NoSQL database was selected for its flexibility in storing documents in JSON-like format. It's easy to scale and handle dynamic data like notes.
3. JWT: Used for authentication because it allows stateless, secure token-based authentication, perfect for modern APIs.
4. bcrypt: Used to hash passwords, ensuring user credentials are stored securely.
5. Postman: Used to test and document API endpoints. This allows us to perform manual API testing before integrating automated tests.
6. dotenv: Used to manage environment variables (e.g., database URI, JWT secret) for easier configuration and deployment.

Setup Instructions
1. Clone the repository
   git clone https://github.com/MariaSalahuddin/note-api.git
   
2. Install dependencies
   npm install

3. Run the application
   npm start
   This will start the server on http://localhost:5000.
   
 Postman Collection

 To test the API using Postman, import the collection:

1. Open Postman.
2. Click "Import"
3. Select the "File" tab.
4. Choose the `notes-api.postman_collection.json` file.
5. Click "Import"
