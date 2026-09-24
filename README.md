# Chronicle 📝

**Chronicle** is a full-stack **MERN (MongoDB, Express.js, React.js, Node.js)** content management application designed for creating, managing, and organizing blog content.

The application provides secure **JWT-based authentication**, RESTful APIs, and complete **CRUD (Create, Read, Update, Delete)** functionality for blog administration.

---

## 🚀 Features

* 🔐 **JWT Authentication**

  * Secure user authentication
  * Protected API routes
  * Token-based authorization

* 📝 **Blog Management**

  * Create blog posts
  * View published posts
  * Update existing posts
  * Delete posts

* 👤 **User Management**

  * User registration and login
  * Authenticated access to protected functionality

* 🔄 **RESTful API**

  * Structured backend API
  * Client-server communication using HTTP requests

* 💻 **Responsive Frontend**

  * Modern React-based user interface
  * Easy navigation and content management

* 🗄️ **MongoDB Database**

  * Persistent storage for application data
  * Flexible document-based data model

---

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* REST API integration

### Backend

* Node.js
* Express.js
* MongoDB
* JWT (JSON Web Token)
* RESTful APIs

### Development Tools

* Git
* GitHub
* npm
* Visual Studio Code

---

## 📂 Project Structure

```text
Chronicle/
│
├── backend/
│   └── Backend source code
│
├── frontend/
│   └── blog-frontend/
│       └── Frontend source code
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/adwitiya-ag/Chronicle.git
cd Chronicle
```

### 2. Setup the Backend

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory and add the required environment variables, such as your MongoDB connection string and JWT secret.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend server:

```bash
npm start
```

---

### 3. Setup the Frontend

Open a new terminal and navigate to the frontend:

```bash
cd frontend/blog-frontend
npm install
```

Start the React development server:

```bash
npm start
```

The frontend will then be available through the local development server.

---

## 🔑 Authentication

Chronicle uses **JSON Web Tokens (JWT)** for authentication.

The typical authentication flow is:

```text
User
  │
  ├── Register / Login
  │
  ▼
Backend API
  │
  ├── Validate credentials
  │
  ├── Generate JWT
  │
  ▼
Authenticated User
  │
  └── Access protected resources
```

Protected API endpoints require a valid authentication token.

---

## 🔄 Application Workflow

```text
        ┌───────────────┐
        │    React UI   │
        └───────┬───────┘
                │
                │ HTTP Requests
                ▼
        ┌───────────────┐
        │ Express / API │
        └───────┬───────┘
                │
        ┌───────┴───────┐
        │ Authentication│
        │     (JWT)     │
        └───────┬───────┘
                │
                ▼
        ┌───────────────┐
        │    MongoDB    │
        └───────────────┘
```

---

## 📌 Core Functionality

| Functionality      | Description                                         |
| ------------------ | --------------------------------------------------- |
| User Registration  | Creates a new user account                          |
| User Login         | Authenticates users using credentials               |
| JWT Authentication | Secures authenticated requests                      |
| Create Post        | Adds new blog content                               |
| Read Post          | Retrieves blog content                              |
| Update Post        | Modifies existing content                           |
| Delete Post        | Removes blog content                                |
| REST API           | Provides communication between frontend and backend |

---

## 🔒 Security

Chronicle incorporates authentication and authorization mechanisms to protect application resources.

Key security concepts include:

* JWT-based authentication
* Protected API routes
* Environment variables for sensitive configuration
* Server-side validation
* Separation of frontend and backend responsibilities

> **Important:** Never commit `.env` files or database credentials to GitHub.

---

## 🎯 Project Objective

The objective of Chronicle is to demonstrate the development of a complete full-stack web application using the MERN stack.

The project combines:

* Frontend development with React
* Backend development with Node.js and Express
* Database management with MongoDB
* REST API development
* Authentication and authorization
* CRUD-based content management

---

## 👨‍💻 Author

**Adwitiya AG**

**Intern ID:** `CITS8969`

**Project:** Chronicle – MERN Stack Content Management Application

---

## 📄 License

This project is intended for educational and internship purposes.
