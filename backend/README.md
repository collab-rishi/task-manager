# Task Manager Backend

A robust Node.js backend application for managing tasks, users, and reports with authentication and file upload capabilities.

## 🚀 Features

- User Authentication (Login/Signup)
- Task Management
- User Management
- Report Generation
- File Upload System
- Rate Limiting
- CORS Protection
- Secure Password Handling

## 🛠️ Tech Stack

- **Runtime Environment:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT (JSON Web Tokens)
- **Password Hashing:** bcryptjs
- **File Upload:** Multer
- **Additional Tools:**
  - Excel.js (for report generation)
  - Express Rate Limit (for API protection)
  - CORS (for cross-origin resource sharing)

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/          # Configuration files (DB, server)
│   ├── controllers/     # Request handlers
│   ├── middlewares/     # Custom middleware (auth, upload)
│   ├── models/          # Database models
│   ├── repositories/    # Data access layer
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   ├── uploads/         # File upload directory
│   ├── utils/          # Utility functions
│   └── index.js        # Application entry point
├── .env                # Environment variables
└── package.json        # Project dependencies
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB instance (MongoDB Atlas recommended)
- npm or yarn package manager
- Git for version control

### Detailed Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/collab-rishi/task-manager.git
cd task-manager/backend
```

2. **Install dependencies**

```bash
npm install
```

3. **Environment Variables Setup**
   Create a `.env` file in the root directory with the following variables:

```env
# Server Configuration
PORT=4000                           # Application port
MONGO_URI=your_mongodb_uri         # MongoDB connection string
JWT_SECRET=your_jwt_secret         # JWT encryption key
ADMIN_INVITE_TOKEN=your_token      # Token for admin registration

# Optional Configuration
NODE_ENV=development               # Environment (development/production)
CORS_ORIGIN=your_frontend_url      # Frontend application URL
```

4. **Database Setup**

- Create a MongoDB Atlas cluster
- Obtain the connection string
- Add the connection string to your `.env` file
- The application will automatically create required collections

5. **Start the Application**

Development mode with hot-reload:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

The server will start on `http://localhost:4000` (or the port specified in your .env)

### Environment Variables Explained

| Variable           | Description                  | Required | Default     |
| ------------------ | ---------------------------- | -------- | ----------- |
| PORT               | Server port number           | Yes      | 4000        |
| MONGO_URI          | MongoDB connection string    | Yes      | None        |
| JWT_SECRET         | Secret key for JWT           | Yes      | None        |
| ADMIN_INVITE_TOKEN | Token for admin registration | Yes      | None        |
| NODE_ENV           | Environment mode             | No       | development |
| CORS_ORIGIN        | Allowed origin for CORS      | No       | \*          |

## 🏗️ Architecture Decisions

1. **Project Structure**

   - Follows a clean architecture pattern
   - Separation of concerns through layered architecture
   - Clear boundaries between business logic and data access

2. **Design Patterns**

   - Repository Pattern for data access
   - MVC pattern for request handling
   - Middleware pattern for cross-cutting concerns

3. **Security**

   - JWT for stateless authentication
   - Role-based access control
   - Rate limiting for API protection
   - Secure password hashing

4. **File Organization**
   ```
   src/
   ├── controllers/    # Request handlers (thin layer)
   ├── services/       # Business logic
   ├── repositories/   # Data access layer
   ├── models/         # Database schemas
   ├── middlewares/    # Request preprocessing
   └── utils/          # Shared utilities
   ```

## 📝 Assumptions and Design Decisions

1. **Authentication & Authorization**

   - Users can have either 'admin' or 'member' roles
   - Token-based authentication with JWT
   - Session management is not implemented (stateless)

2. **Database**

   - MongoDB is used for flexibility and scalability
   - Mongoose ODM for data modeling and validation
   - Indexes on frequently queried fields

3. **File Storage**

   - Local file storage for task attachments
   - Maximum file size limit: 5MB
   - Supported formats: images, PDFs, documents

4. **Error Handling**

   - Standardized error responses
   - Global error handling middleware
   - Detailed logging in development

5. **Performance**

   - Database connection pooling
   - Rate limiting on sensitive endpoints
   - Pagination for large data sets

6. **Scalability**
   - Stateless architecture for horizontal scaling
   - Modular design for easy maintenance
   - Environment-based configuration

## � API Documentation

All API endpoints are prefixed with `/api/v1`

### 🔐 Authentication API

#### Register User

```http
POST /auth/register
```

- **Access:** Public
- **Description:** Register a new user in the system
- **Request Body:**

```json
{
  "name": "string",
  "email": "string",
  "password": "string",
  "profileImage": "file (optional)"
}
```

- **Response:** User object with JWT token

#### Login User

```http
POST /auth/login
```

- **Access:** Public
- **Description:** Authenticate user and get token
- **Request Body:**

```json
{
  "email": "string",
  "password": "string"
}
```

- **Response:** User object with JWT token

#### Get User Profile

```http
GET /auth/profile
```

- **Access:** Private
- **Description:** Get logged in user's profile
- **Headers Required:** Authorization: Bearer {token}
- **Response:** User profile data

#### Update Profile

```http
PUT /auth/profile
```

- **Access:** Private
- **Description:** Update user profile information
- **Headers Required:** Authorization: Bearer {token}
- **Request Body:** Profile fields to update

### 👥 User Management API

#### Get All Users

```http
GET /users
```

- **Access:** Private (Admin only)
- **Description:** Get list of all users
- **Headers Required:** Authorization: Bearer {token}
- **Query Parameters:**
  - `page`: Page number (default: 1)
  - `limit`: Users per page (default: 10)
- **Response:** Paginated list of users

#### Get User by ID

```http
GET /users/:id
```

- **Access:** Private
- **Description:** Get user details by ID
- **Headers Required:** Authorization: Bearer {token}
- **Response:** User details

### 📋 Task Management API

#### Get Dashboard Data

```http
GET /tasks/dashboard-data
```

- **Access:** Private
- **Description:** Get aggregated dashboard statistics
- **Headers Required:** Authorization: Bearer {token}
- **Response:** Dashboard statistics and metrics

#### Get All Tasks

```http
GET /tasks
```

- **Access:** Private
- **Description:** Get tasks (Admin: all tasks, User: assigned tasks)
- **Headers Required:** Authorization: Bearer {token}
- **Query Parameters:**
  - `status`: Filter by status
  - `priority`: Filter by priority
  - `page`: Page number
  - `limit`: Tasks per page
- **Response:** Paginated list of tasks

#### Create Task

```http
POST /tasks
```

- **Access:** Private (Admin only)
- **Description:** Create a new task
- **Headers Required:** Authorization: Bearer {token}
- **Request Body:**

```json
{
  "title": "string",
  "description": "string",
  "assignedTo": "user_id",
  "priority": "high|medium|low",
  "dueDate": "date",
  "checklist": [
    {
      "item": "string",
      "isCompleted": "boolean"
    }
  ]
}
```

- **Response:** Created task object

#### Update Task Status

```http
PUT /tasks/:id/status
```

- **Access:** Private
- **Description:** Update task status
- **Headers Required:** Authorization: Bearer {token}
- **Request Body:**

```json
{
  "status": "pending|in-progress|completed"
}
```

- **Response:** Updated task object

#### Update Task Checklist

```http
PUT /tasks/:id/todo
```

- **Access:** Private
- **Description:** Update task checklist items
- **Headers Required:** Authorization: Bearer {token}
- **Request Body:**

```json
{
  "checklist": [
    {
      "item": "string",
      "isCompleted": "boolean"
    }
  ]
}
```

- **Response:** Updated task object

### 📊 Reports API

#### Export Tasks Report

```http
GET /reports/export/tasks
```

- **Access:** Private (Admin only)
- **Description:** Generate and download tasks report
- **Headers Required:** Authorization: Bearer {token}
- **Query Parameters:**
  - `format`: "excel" or "pdf"
  - `startDate`: Filter start date
  - `endDate`: Filter end date
- **Response:** File download (Excel/PDF)

#### Export Users Report

```http
GET /reports/export/users
```

- **Access:** Private (Admin only)
- **Description:** Generate and download users-tasks report
- **Headers Required:** Authorization: Bearer {token}
- **Query Parameters:**
  - `format`: "excel" or "pdf"
- **Response:** File download (Excel/PDF)

### Response Formats

#### Success Response

```json
{
  "success": true,
  "data": {}, // Response data
  "message": "Operation successful"
}
```

#### Error Response

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Error message"
  }
}
```

### Common Error Codes

- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `422`: Validation Error
- `500`: Server Error

## 🔒 Security Features

- Password Hashing using bcryptjs
- JWT Authentication
- Rate Limiting for API protection
- CORS configuration for secure cross-origin requests
- Request validation and sanitization

## 📜 License

ISC License

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
