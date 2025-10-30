# Task Manager Application

A full-stack task management application with React frontend and Node.js backend, featuring rich UI components, real-time updates, and comprehensive task management capabilities.

## 🎯 Features

- User Authentication & Authorization
- Role-based Access Control (Admin/User)
- Interactive Dashboard with Analytics
- Task Management with Status Tracking
- User Management
- File Upload System
- Report Generation
- Real-time Updates
- Responsive Design
- Dark/Light Theme Support

## 🏗️ Project Structure

```
task-manager/
├── frontend/                # React frontend application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React Context providers
│   │   ├── hooks/         # Custom React hooks
│   │   └── utils/         # Utility functions
│   └── public/            # Static assets
│
└── backend/               # Node.js backend application
    ├── src/
    │   ├── config/       # Configuration files
    │   ├── controllers/  # Request handlers
    │   ├── models/       # Database models
    │   ├── routes/       # API routes
    │   └── services/     # Business logic
    └── uploads/          # Uploaded files storage
```

## 🛠️ Tech Stack

### Frontend

- React 19
- Vite
- Tailwind CSS
- React Router v7
- Recharts
- Axios
- React Context (State Management)

### Backend

- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Mongoose ODM
- Multer (File Upload)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB instance
- npm or yarn
- Git

### Setup Instructions

1. **Clone the Repository**

```bash
git clone https://github.com/collab-rishi/task-manager.git
cd task-manager
```

2. **Backend Setup**

```bash
cd backend
npm install
```

Create `.env` file in the backend directory:

```env
# Server Configuration
PORT=4000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
ADMIN_INVITE_TOKEN=your_admin_token

# Optional Configuration
NODE_ENV=development
```

3. **Frontend Setup**

```bash
cd ../frontend
npm install
```

Create `.env` file in the frontend directory:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:4000/api/v1
VITE_API_TIMEOUT=30000

# Application Configuration
VITE_APP_NAME="Task Manager"
VITE_DEFAULT_THEME="light"
```

### Running the Application

1. **Start Backend Server**

```bash
cd backend
npm run dev
```

Backend will start on `http://localhost:4000`

2. **Start Frontend Development Server**

```bash
cd frontend
npm run dev
```

Frontend will start on `http://localhost:5173`

### Production Deployment

1. **Build Frontend**

```bash
cd frontend
npm run build
```

2. **Start Production Server**

```bash
cd backend
npm start
```

## 🏗️ Architecture Decisions

### 1. Frontend Architecture

- **Component Design:** Atomic Design Pattern
- **State Management:** React Context for global state
- **Routing:** Role-based protected routes
- **Performance:** Code splitting and lazy loading
- **API Communication:** Axios with interceptors

### 2. Backend Architecture

- **Design Pattern:** MVC with Repository Pattern
- **Database:** MongoDB for flexibility and scalability
- **Authentication:** JWT with refresh tokens
- **File Storage:** Local storage with Multer
- **Error Handling:** Global error middleware

### 3. Security Measures

- JWT-based authentication
- Role-based access control
- Request rate limiting
- Input validation and sanitization
- Secure password hashing
- CORS protection

## 📝 Assumptions and Constraints

1. **Technical Requirements**

   - Modern browser support only
   - Stable internet connection
   - MongoDB database availability
   - Node.js v18+ environment

2. **Scalability**

   - Horizontal scaling capability
   - Stateless authentication
   - Caching mechanisms
   - Database connection pooling

3. **Performance**

   - Maximum file upload size: 5MB
   - API response time < 500ms
   - Frontend initial load < 2s
   - Optimistic UI updates

4. **User Experience**
   - Mobile-first responsive design
   - Offline capability for basic features
   - Real-time updates for collaborative features
   - Graceful error handling

## 📚 API Documentation

[See detailed API documentation in the backend README](./backend/README.md#api-documentation)

### Key Endpoints Overview

#### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

#### Tasks

- `GET /api/tasks` - List tasks
- `POST /api/tasks` - Create task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

#### Users

- `GET /api/users` - List users (Admin)
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

#### Reports

- `GET /api/reports/export/tasks` - Export tasks report
- `GET /api/reports/export/users` - Export users report

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## 📄 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- React.js Team
- Node.js Community
- MongoDB Team
- All contributors
