

# Netlify MongoDB App
This app is a simple serverless CRUD application that uses MongoDB as its database. It is hosted on Netlify and uses the MongoDB Atlas cloud service for hosting the database.
## Features
- Perform create, read, update, and delete operations on a MongoDB database
- Serverless architecture using Netlify Functions
- Secure connection to MongoDB Atlas using a connection string

## Getting Started
1. Clone the repository: git clone https://github.com/<username>/netlify-mongodb-app.git
2. Navigate to the root directory: cd netlify-mongodb-app
3. Install dependencies: npm install
4. Create a .env file in the root directory and add your MongoDB Atlas connection string: MONGO_URL=mongodb+srv://<username>:<password>@cluster0.7vuaetn.mongodb.net/<dbname>?retryWrites=true&w=majority
5. Deploy the app to Netlify: npm run deploy
6. Test the CRUD operations using a tool like Postman
## API Endpoints
The following endpoints are available for interacting with the MongoDB database:

- POST /api/movies: Create a new movie
- GET /api/movies: Get a list of all movies
- GET /api/movies/:id: Get a single movie by its ID
- PUT /api/movies/:id: Update a movie by its ID
- DELETE /api/movies/:id: Delete a movie by its ID
## Dependencies
- MongoDB Atlas: Cloud database service for MongoDB
- Netlify Functions: Serverless functions for hosting the API
- Mongoose: MongoDB object modeling tool
- dotenv: Loads environment variables from a .env file
