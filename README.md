# To-Do App - GSI

## Overview

This project is a To-Do List Application built with Vite, React, and Bootstrap. It provides a user-friendly interface for managing tasks efficiently, featuring authentication, task creation, updates, and deletion. The application interacts with an API gateway to handle all backend operations.

## Features

- User authentication with token-based login.

- Create, read, update, and delete (CRUD) tasks.

- Responsive and modern UI with Bootstrap.

- Protected routes for authenticated users.

- API integration for task management.

- Pagination and sorting for task listing.

- Containerized deployment using Docker Compose.

- Preconfigured Makefile for easier command execution.

- Postman collection for testing API endpoints.

## Directory Structure

```plaintext
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── eslint.config.js
├── index.html
├── Makefile
├── nginx.conf
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Static Service

This project consists of the following service:

| Service  | Description  | Port  |
| ------------ | ------------ | ------------ |
| Vite Client | The application interacts with an API gateway to handle all backend operations. | 5173  |

### Prerequisites

Ensure you have the following installed:

- Docker & Docker Compose
- Node.js & npm
- Vite CLI (optional for manual setup)
- Make (optional, for simplified commands)

### Running the Application with CLI

1. Clone the repository:

	```bash
	git clone https://github.com/Frnn4268/to-do-app-vite-gsi.git
		 
	cd to-do-app-vite-gsi
	```

2. Install dependencies: 
	```bash
	npm install
	```

3. Start the application: 
	```bash
	npm run dev
	```

4. Open the application in your browser:
	```bash
	http://localhost:5173
	```

### Running the Application with Docker Compose

1. Clone the repository:

	```bash
	git clone https://github.com/Frnn4268/to-do-app-vite-gsi.git
		 
	cd to-do-app-vite-gsi
	```

2. Start the application:

	```bash
	docker-compose up --build
	```
	For other hand
	```bash
	docker-compose up --build -d
	```

	#### When to use:

	> - Use docker-compose up --build if you want to see logs in the terminal and ensure the containers are running.
	> -  Use docker-compose up --build -d if you prefer the containers to run in the background without keeping the terminal session open for logs.

3. Open the application in your browser:

	```bash
	http://localhost:5173
	```

4. Stop the application:

	```bash
	docker-compose down
	```

### Running the Application with Makefile

To run the application using the ***Makefile***, you can use the following commands:

- Start React-Vite client:

	```bash
	make run-client-react
	```
	

- Build the Docker Compose service:

	```bash
	make compose-build
	```
	
	This builds the images defined in docker-compose.yml.

- Start the entire application (recommended):

	```bash
	make compose-up-build
	```
	
	**Use this command to bring up the static service, ensuring everything is built correctly.**

- Stop all services:

	```bash
	make compose-down
	```
	
	This shuts down the running containers.

## API Endpoints

| Method  | Endpoint  | Description  |
| ------------ | ------------ | ------------ |
|  POST |  /to-do/login  |  User login  |
| POST  |  /to-do/tasks/create | Create task |
| GET  | /to-do/tasks/{id}| Get task by ID  |
| GET  | /to-do/tasks  | Get all tasks with pagination |
| PATCH  | /to-do/tasks/update/{id} | Update task status  |
| DELETE  | /to-do/tasks/delete/{id} | Delete task  |

### Authentication

- Users authenticate using their email.
- A token is required for protected API endpoints.

## Testing with Postman Collection

To test the API, you can use:

- Postman: Import ***to do list interview backend krakenddev.postman_collection.json***.
	(Collection attached to this project.)

## Contributors

- Fernando Martínez - [Github Profile](https://github.com/Frnn4268 "Github Profile")
