# Todo App with Node.js and Express

A simple to-do list application built with Node.js and Express. This project is designed as a learning exercise to explore core Node.js concepts like asynchronous programming, middleware, error handling, API interaction, Docker containerization, and Kubernetes orchestration.

## Features
- **Express Server**: Basic RESTful API with routes to manage to-do items.
- **Middleware**: Custom logging and error-handling middleware.
- **Async API Calls**: Fetches sample to-do items from a mock API.
- **Error Handling**: Robust handling for API errors and validation.
- **Database**: Integrated with MongoDB using Mongoose for data persistence.
- **Dockerized Setup**: Containerized application for easy deployment and environment setup.
- **Kubernetes**: Orchestrate the application and MongoDB services using Kubernetes.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Docker](https://www.docker.com/get-started)
- [Kubernetes CLI](https://kubernetes.io/docs/tasks/tools/) (`kubectl`)
- [MongoDB Atlas Account](https://www.mongodb.com/cloud/atlas) (optional, if not using Docker or Kubernetes)

### Installation

#### 1. Local Setup

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
   - If you’re not using Docker, sign up for a [MongoDB Atlas Account](https://www.mongodb.com/cloud/atlas) and create a new project.
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

#### 2. Docker Setup

1. **Create a .env file**:
   - In the root directory, create a `.env` file with the following contents:
     ```plaintext
     MONGO_URI=mongodb://mongo:27017/todo-app
     PORT=3000
     ```

2. **Build and Run with Docker Compose**:
   - Build and start the containers (the `--build` flag is needed the first time or whenever Dockerfile changes):
     ```bash
     docker-compose up --build
     ```

   - To stop the containers, press `Ctrl + C` in the terminal, or in a separate terminal window, run:
     ```bash
     docker-compose down
     ```

3. **Run in Detached Mode**:
   - To run the containers in the background, add the `-d` flag:
     ```bash
     docker-compose up -d
     ```

4. **Access the Application**:
   - Once the containers are up, the application should be accessible at `http://localhost:3000`.

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
├── Dockerfile               # Docker image definition for the Node.js app
├── docker-compose.yml       # Docker Compose file to manage services
├── k8s/                     # Kubernetes configuration files
├── index.js                 # Entry point for the application
├── package.json             # Project metadata and dependencies
└── README.md                # Project documentation
```

## Kubernetes Deployment

### Prerequisites
- [Docker](https://www.docker.com/)
- [Kubernetes CLI](https://kubernetes.io/docs/tasks/tools/) (`kubectl`)
- Access to a Kubernetes cluster (Minikube, Docker Desktop, GKE, etc.)

### Building and Pushing the Docker Image
1. **Build the Docker image**:
   ```bash
   docker build -t your-username/todo-app:latest .
   ```

2. **Push the Docker image**:
   ```bash
   docker push your-username/todo-app:latest
   ```

### Deploying with Kubernetes
1. Apply the MongoDB deployment:
   ```bash
   kubectl apply -f k8s/mongo-deployment.yml
   ```

2. Apply the Node.js application deployment:
   ```bash
   kubectl apply -f k8s/app-deployment.yml
   ```

3. Verify that everything is running:
   ```bash
   kubectl get deployments
   kubectl get pods
   kubectl get services
   ```

4. Access the application:
   - If using **port-forwarding**:
     ```bash
     kubectl port-forward service/todo-app-service 3000:3000
     ```
     Access at: `http://localhost:3000`

   - If **EXTERNAL-IP** is assigned, use:
     ```bash
     http://<external-ip>:3000
     ```

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
- [Docker](https://www.docker.com/) - Containerization platform
- [Kubernetes](https://kubernetes.io/) - Orchestration for containerized applications

## Contributing
If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Happy coding!