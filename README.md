# note-api

A simple RESTful API for creating, updating, deleting, sharing, and searching notes, built with Node.js, Express, and MongoDB.

Tech Stack & Tool Choices
Node.js + Express: Chosen for building the backend because it's lightweight and efficient for building RESTful APIs.

MongoDB: A NoSQL database was selected for its flexibility in storing documents in JSON-like format. It's easy to scale and handle dynamic data like notes.

JWT (JSON Web Tokens): Used for authentication because it allows stateless, secure token-based authentication, perfect for modern APIs.

bcrypt: Used to hash passwords, ensuring user credentials are stored securely.

Postman: Used to test and document API endpoints. This allows us to perform manual API testing before integrating automated tests.

dotenv: Used to manage environment variables (e.g., database URI, JWT secret) for easier configuration and deployment.

🛠️ Setup Instructions
1. Clone the repository
   bash
   Copy
   Edit
   git clone https://github.com/MariaSalahuddin/note-api.git
   cd note-api
2. Install dependencies
   bash
   Copy
   Edit
   npm install
   This will install all the necessary dependencies listed in package.json.

3. Create .env file for environment variables
   Create a .env file in the root of your project with the following contents:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
Replace your_mongo_connection_string with your MongoDB connection URI.

Replace your_jwt_secret with a secure string for signing JWT tokens.

4. Run the application
   bash
   Copy
   Edit
   npm start
   This will start the server on http://localhost:5000.

🧪 Running Tests
To run tests (if you've written them with a testing framework like Jest or Mocha), use the following command:

bash
Copy
Edit
npm test
This will execute the tests and output results in the console.

🌐 Deployment Instructions
This app can be deployed to platforms like Render or Heroku for free hosting.

1. Deploy to Render (Free Hosting)
   Sign up at Render.

Click "New Web Service" and choose to deploy from GitHub.

Connect your GitHub repository to Render.

Choose the Node.js template.

Set the build command: npm install

Set the start command: npm start

Set environment variables like MONGO_URI and JWT_SECRET on the Render dashboard.

After deployment, Render will give you a public URL where you can access your API.

