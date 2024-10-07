# Todo App with Node.js and Express

A simple to-do list application built with Node.js and Express. This project is designed as a learning exercise to explore core Node.js concepts like asynchronous programming, middleware, error handling, and API interaction.

## Features
- **Express Server**: Basic RESTful API with routes to manage to-do items.
- **Middleware**: Custom logging and error-handling middleware.
- **Async API Calls**: Fetches sample to-do items from a mock API.
- **Error Handling**: Robust handling for API errors and validation.
- **Database**: Integrated with MongoDB using Mongoose for data persistence.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [MongoDB Atlas Account](https://www.mongodb.com/cloud/atlas) or a locally installed MongoDB instance

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
   ```

2. **Install the dependencies**:
   ```bash
   npm install
   ```

3. **Set up MongoDB**:
   - Sign up for a [MongoDB Atlas Account](https://www.mongodb.com/cloud/atlas) and create a new project.
   - Create a **Cluster** and a **Database**.
   - Get the **MongoDB URI** from the MongoDB Atlas dashboard and replace `<username>`, `<password>`, and `<cluster>` in the URI with your own credentials.

4. **Configure Environment Variables**:
   - Create a `.env` file in the root directory of your project and add the following:
     ```plaintext
     MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/todo-app?retryWrites=true&w=majority
     PORT=3000
     ```

5. **Run the application**:
   ```bash
   node index.js
   ```
   The server will start at `http://localhost:3000`.

### Usage
- **GET /api/todos**: Fetches a list of to-do items from the database.
- **POST /api/todos**: Creates a new to-do item. Requires a `title` field in the request body.

## Project Structure

To improve scalability and maintainability, the project is organized into a modular folder structure:

```
todo-app/
├── config/
│   └── dbConfig.js          # Database configuration file for MongoDB connection
├── controllers/
│   └── todoController.js    # Handles business logic for to-do routes
├── models/
│   └── todoModel.js         # Database schema/model for to-do items
├── routes/
│   └── todoRoutes.js        # Defines API routes for to-do operations
├── services/
│   └── todoService.js       # Service layer for database interaction
├── middleware/
│   ├── authMiddleware.js    # Handles user authentication (future)
│   └── errorMiddleware.js   # Custom error-handling middleware
├── utils/
│   ├── logger.js            # Custom logging utility
│   └── helperFunctions.js   # Utility functions
├── tests/
│   ├── controllers/         # Unit tests for controllers
│   └── routes/              # Integration tests for routes
├── .gitignore               # Ignored files and folders for version control
├── index.js                 # Entry point for the application
├── package.json             # Project metadata and dependencies
└── README.md                # Project documentation
```

### Explanation of Key Files
- **config/dbConfig.js**: Connects to MongoDB using Mongoose.
- **controllers/todoController.js**: Contains functions to handle requests by interacting with the service layer.
- **models/todoModel.js**: Defines the schema for to-do items and represents the MongoDB model.
- **routes/todoRoutes.js**: Maps endpoint URLs to controller functions.
- **services/todoService.js**: Handles data logic and interacts directly with the model.

## Debugging

### Chrome DevTools
To debug with Chrome DevTools:
1. Start the app with the `--inspect` flag:
   ```bash
   node --inspect-brk index.js
   ```
2. Open Chrome and navigate to `chrome://inspect`.
3. Click on **"Open dedicated DevTools for Node"** to attach to your Node.js process.

### VS Code Debugging
To debug in Visual Studio Code:
1. In VS Code, go to the **Run and Debug** tab (or press `Ctrl+Shift+D`).
2. Add a launch configuration by selecting **"Add Configuration..."** and choosing **"Node.js"**.
3. Configure as follows:
   ```json
   {
     "type": "node",
     "request": "launch",
     "name": "Launch Program",
     "skipFiles": ["<node_internals>/**"],
     "program": "${workspaceFolder}/index.js"
   }
   ```
4. Start debugging by selecting **"Launch Program"** and pressing **F5**.

## Built With
- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Express](https://expressjs.com/) - Web framework for Node.js
- [MongoDB](https://www.mongodb.com/) - NoSQL database
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling for Node.js

## Contributing
If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Happy coding!