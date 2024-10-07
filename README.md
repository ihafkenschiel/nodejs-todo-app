# Todo App with Node.js and Express

A simple to-do list application built with Node.js and Express. This project is designed as a learning exercise to explore core Node.js concepts like asynchronous programming, middleware, error handling, and API interaction. 

## Features
- **Express Server**: Basic RESTful API with routes to manage to-do items.
- **Middleware**: Custom logging and error-handling middleware.
- **Async API Calls**: Fetches sample to-do items from a mock API.
- **Error Handling**: Robust handling for API errors and validation.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   node index.js
   ```
   The server will start at `http://localhost:3000`.

### Usage
- **GET /todos**: Fetches a list of to-do items from a mock API.
- **POST /todos**: Creates a new to-do item. Requires a `title` field in the request body.

### Example Request
To create a new to-do item, send a `POST` request to `http://localhost:3000/todos` with a JSON body:
```json
{
  "title": "Learn Node.js",
  "completed": false
}
```

### Example Response
On success, you will receive a JSON response with the new to-do item:
```json
{
  "title": "Learn Node.js",
  "completed": false
}
```

## Project Structure

To improve scalability and maintainability, the project is organized into a modular folder structure. Each folder has a specific role in the architecture:

```
todo-app/
├── config/
│   └── dbConfig.js          # Database configuration file (e.g., MongoDB or MySQL)
├── controllers/
│   └── todoController.js    # Handles business logic for to-do routes
├── models/
│   └── todoModel.js         # Database schema/model for to-do items
├── routes/
│   └── todoRoutes.js        # Defines API routes for to-do operations
├── services/
│   └── todoService.js       # Service layer for database interaction
├── middleware/
│   ├── authMiddleware.js    # Handles user authentication
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

### Explanation of Key Folders
- **config/**: Holds configuration files such as `dbConfig.js` for database connections.
- **controllers/**: Contains functions that handle business logic and communicate with the service layer.
- **models/**: Defines data structures for entities like to-do items, used for database interaction.
- **routes/**: Manages the API endpoint definitions and maps them to the corresponding controller functions.
- **services/**: Acts as an intermediary between controllers and models, isolating database interaction.
- **middleware/**: Holds middleware for request processing, including authentication and error handling.
- **utils/**: Utility functions and tools that can be reused across different parts of the app.
- **tests/**: Organized testing files for ensuring the reliability of the application.

## Debugging

### Chrome DevTools
To debug with Chrome DevTools:
1. Start the app with the `--inspect` flag:
   ```bash
   node --inspect-brk index.js
   ```
2. Open Chrome and navigate to `chrome://inspect`.
3. Click on **"Open dedicated DevTools for Node"**. 
4. Chrome DevTools will now attach to your Node.js process, allowing you to set breakpoints, inspect variables, and walk through your code as it executes.

### VS Code Debugging
To debug in Visual Studio Code:
1. In VS Code, go to the **Run and Debug** tab (or press `Ctrl+Shift+D`).
2. Add a launch configuration by selecting **"Add Configuration..."** and choosing **"Node.js"**.
3. Modify your configuration as follows:
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
5. You can now set breakpoints, view variables, and use the Debug Console for further inspection.

## Built With
- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Express](https://expressjs.com/) - Web framework for Node.js
- [Axios](https://axios-http.com/) - Promise-based HTTP client

## Contributing
If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Happy coding!