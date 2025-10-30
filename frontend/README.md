# Task Manager Frontend

A modern React-based frontend application for task management with rich UI components and real-time updates.

## 🚀 Features

- User Authentication (Login/Signup)
- Dashboard with Analytics
- Task Management Interface
- User Management (Admin)
- Interactive Charts and Reports
- Responsive Design
- Dark/Light Theme Support

## 🛠️ Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **State Management:** React Context
- **Charts:** Recharts
- **HTTP Client:** Axios
- **Routing:** React Router v7
- **Date Handling:** Moment.js
- **Icons:** React Icons
- **Notifications:** React Hot Toast

## 📁 Project Structure

```
src/
├── assets/          # Static assets (images, fonts)
├── components/      # Reusable UI components
│   ├── Cards/      # Card components
│   ├── Charts/     # Data visualization components
│   ├── Inputs/     # Form input components
│   └── layouts/    # Page layouts and templates
├── context/        # React Context providers
├── hooks/          # Custom React hooks
├── pages/          # Page components
│   ├── Admin/      # Admin-specific pages
│   ├── Auth/       # Authentication pages
│   └── User/       # User-specific pages
├── routes/         # Routing configuration
└── utils/          # Utility functions and constants
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/collab-rishi/task-manager.git
cd task-manager/frontend
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Environment Setup**
   Create a `.env` file in the root directory with the following variables:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:4000/api/v1    # Backend API URL
VITE_API_TIMEOUT=30000                            # API timeout in milliseconds

# Application Configuration
VITE_APP_NAME="Task Manager"                      # Application name
VITE_DEFAULT_THEME="light"                        # Default theme (light/dark)

# Feature Flags
VITE_ENABLE_NOTIFICATIONS=true                    # Enable/disable notifications
VITE_ENABLE_ANALYTICS=true                        # Enable/disable analytics
```

4. **Start Development Server**

```bash
npm run dev
# or
yarn dev
```

The application will start on `http://localhost:5173`

5. **Build for Production**

```bash
npm run build
# or
yarn build
```

### Environment Variables Explained

| Variable                  | Description          | Required | Default        |
| ------------------------- | -------------------- | -------- | -------------- |
| VITE_API_BASE_URL         | Backend API endpoint | Yes      | -              |
| VITE_API_TIMEOUT          | API request timeout  | No       | 30000          |
| VITE_APP_NAME             | Application name     | No       | "Task Manager" |
| VITE_DEFAULT_THEME        | Default theme        | No       | "light"        |
| VITE_ENABLE_NOTIFICATIONS | Toggle notifications | No       | true           |
| VITE_ENABLE_ANALYTICS     | Toggle analytics     | No       | true           |

## 🏗️ Architecture Decisions

1. **Component Architecture**

   - Atomic Design Pattern
   - Component composition over inheritance
   - Separation of concerns between UI and logic
   - Shared components library

2. **State Management**

   - React Context for global state
   - Custom hooks for reusable logic
   - Local state for component-specific data
   - Optimistic updates for better UX

3. **Routing Strategy**

   - Role-based route protection
   - Lazy loading for better performance
   - Nested routes for complex views
   - Private route wrapper components

4. **Data Fetching**

   - Axios instances with interceptors
   - Request/response transformations
   - Error handling middleware
   - Automatic token management

5. **Performance Optimizations**
   - Code splitting
   - Lazy loading of routes and components
   - Memoization of expensive computations
   - Asset optimization

## 📝 Assumptions and Design Decisions

1. **Browser Support**

   - Modern browsers only (last 2 versions)
   - No IE11 support
   - Flexbox and Grid layout support required

2. **Authentication**

   - JWT-based authentication
   - Token stored in localStorage
   - Auto refresh of expired tokens
   - Persistent login state

3. **User Experience**

   - Mobile-first responsive design
   - Offline support for basic features
   - Progressive enhancement approach
   - Graceful degradation for older browsers

4. **Performance**

   - Initial load under 2 seconds
   - Time to interactive under 3 seconds
   - Lazy loading for routes and heavy components
   - Optimized asset delivery

5. **Security**

   - HTTPS only in production
   - XSS protection
   - CSRF protection
   - Input sanitization

6. **Error Handling**

   - Global error boundary
   - Structured error responses
   - User-friendly error messages
   - Automatic error reporting

7. **Data Management**
   - Client-side caching
   - Optimistic updates
   - Real-time updates for collaborative features
   - Data persistence in localStorage

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## 📜 License

This project is licensed under the ISC License.
