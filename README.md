# Enterprise Microfrontend Application

A production-ready, scalable enterprise web application built with cutting-edge technologies following **Clean Architecture**, **SOLID Principles**, **Domain-Driven Design**, and **Repository Pattern**.

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                    Nginx (Reverse Proxy)                │
└─────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│                  Shell Application (Host)               │
│          (Module Federation + Global Routing)           │
└─────────────────────────────────────────────────────────┘
        │      │         │        │        │
        ▼      ▼         ▼        ▼        ▼
   ┌────────┬──────────┬──────┬────────┬─────────┐
   │ Auth   │ Dashboard│Profile│Admin   │Notification
   │Module  │  Module  │Module │Module  │ Module
   └────────┴──────────┴──────┴────────┴─────────┘
        │      │         │        │        │
        └──────┴─────────┴────────┴────────┘
                         │
                         ▼
           ┌──────────────────────────────┐
           │      API Gateway             │
           │  (Auth, Rate Limit, CORS)    │
           └──────────────────────────────┘
                         │
        ┌────────┬───────┼────────┬──────────┐
        ▼        ▼       ▼        ▼          ▼
   ┌─────────┬──────────┬──────┬─────────┬─────────┐
   │ Auth    │ User     │Dashboard│Notification│Audit
   │Service  │ Service  │Service  │ Service     │Service
   └─────────┴──────────┴──────┴─────────┴─────────┘
        │        │        │        │        │
        └────────┴────────┴────────┴────────┘
                         │
        ┌────────────────┼────────────────┐
        ▼                ▼                ▼
   ┌──────────┐     ┌──────────┐    ┌─────────┐
   │ MongoDB  │     │ MongoDB  │    │ Redis   │
   │(Users)   │     │(Audit)   │    │(Cache)  │
   └────���─────┘     └──────────┘    └─────────┘
```

## 🎯 Key Features

### Frontend
- ✅ React 19 with TypeScript
- ✅ Module Federation (Independent Microfrontends)
- ✅ Redux Toolkit for State Management
- ✅ React Query for Server State
- ✅ React Router v7 for Navigation
- ✅ Tailwind CSS for Styling
- ✅ React Hook Form + Zod for Validation
- ✅ Dark Mode & Theme Switching
- ✅ Error Boundaries & Suspense
- ✅ Session Management
- ✅ Real-time Notifications

### Backend
- ✅ Node.js 22 + Express.js
- ✅ Microservices Architecture
- ✅ API Gateway Pattern
- ✅ MongoDB with Replica Set
- ✅ MongoDB Transactions
- ✅ Redis for Caching
- ✅ JWT + Refresh Token Rotation
- ✅ RBAC (Role-Based Access Control)
- ✅ Comprehensive Logging (Winston)
- ✅ Security (Helmet, CORS, Rate Limiting)

### Infrastructure
- ✅ Docker & Docker Compose
- ✅ Kubernetes Ready
- ✅ Nginx Reverse Proxy
- ✅ GitHub Actions CI/CD
- ✅ Health Checks
- ✅ Service Discovery Ready

## 📁 Project Structure

```
enterprise-microfrontend/
├── apps/
│   ├── shell/                  # Host application
│   ├── authentication/         # Auth module
│   ├── dashboard/              # Dashboard module
│   ├── profile/                # Profile module
│   ├── admin/                  # Admin module
│   └── notification/           # Notification module
├── packages/
│   ├── shared-ui/              # Reusable UI components
│   ├── shared-hooks/           # Custom React hooks
│   ├── shared-utils/           # Utility functions
│   ├── shared-services/        # API services
│   ├── shared-types/           # TypeScript types
│   └── shared-assets/          # Images, fonts, etc
├── services/
│   ├── api-gateway/            # Express API Gateway
│   ├── auth-service/           # Authentication service
│   ├── user-service/           # User management service
│   ├── dashboard-service/      # Dashboard data service
│   ├── notification-service/   # Notification service
│   └── audit-service/          # Audit logging service
├── infrastructure/
│   ├── docker/                 # Dockerfiles
│   ├── kubernetes/             # K8s configs
│   └── nginx/                  # Nginx configs
├── docker-compose.yml          # Local development
├── .github/
│   └── workflows/              # CI/CD pipelines
└── documentation/              # Architecture diagrams, API docs
```

## 🚀 Quick Start

### Prerequisites
- Node.js 22+
- npm or yarn
- Docker & Docker Compose
- MongoDB (optional - use Docker)

### Development Setup

```bash
# Clone repository
git clone https://github.com/rspsuresh/microfrontend.git
cd microfrontend

# Install dependencies
npm install

# Start MongoDB Replica Set and Redis
docker-compose up -d

# Start all services
npm run dev

# Access application
# Frontend: http://localhost:5173
# API Gateway: http://localhost:3000
# Swagger Docs: http://localhost:3000/api/docs
```

## 📦 Modules

### 1. **Shell Application**
- Dynamic Module Federation
- Global routing & authentication check
- Shared layout (Navbar, Sidebar)
- Theme switching
- Session management
- Error boundaries

### 2. **Authentication Module**
- User registration & login
- Email verification
- Password reset
- JWT + Refresh tokens
- Remember me functionality
- Silent refresh

### 3. **Dashboard Module**
- User statistics
- Revenue analytics
- Sales graphs & charts
- Activity timeline
- Recent orders
- Widget system

### 4. **Profile Module**
- User profile management
- Avatar upload
- Settings management
- Theme preferences
- Notification settings

### 5. **Admin Module**
- User management
- Role & permission management
- Audit logs
- Analytics
- Search & pagination

### 6. **Notification Module**
- Real-time notifications
- Push notifications
- Notification history
- Read/Unread status

### 7. **Shared Component Library**
- 40+ Reusable UI components
- Button, Input, Select, Modal, Card
- Data Table, Pagination
- Avatar, Tabs, Dropdown
- Empty State, Error State

## 🔐 Security Features

- ✅ JWT Authentication
- ✅ Refresh Token Rotation
- ✅ HTTP-Only Cookies
- ✅ CSRF Protection
- ✅ XSS Protection
- ✅ SQL Injection Prevention
- ✅ Rate Limiting
- ✅ CORS Configuration
- ✅ Helmet Security Headers
- ✅ Password Hashing (bcrypt)
- ✅ RBAC Authorization
- ✅ Permission-based Access

## 📊 Database Schema

### Collections
- **users** - User accounts
- **roles** - Role definitions
- **permissions** - Permission definitions
- **user_roles** - User-Role mapping
- **refresh_tokens** - Token storage
- **dashboard** - Dashboard data
- **notifications** - User notifications
- **audit_logs** - Action audit trail

### Indexes
- Compound indexes for common queries
- TTL indexes for token expiration
- Full-text search indexes

## 🧪 Testing

### Frontend
- React Testing Library
- Jest
- Component tests
- Integration tests

### Backend
- Jest
- Supertest
- Unit tests
- Integration tests
- API endpoint tests

```bash
# Run all tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run specific test suite
npm run test -- <module-name>
```

## 🐳 Docker

```bash
# Build images
docker-compose build

# Start services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## 🔄 CI/CD Pipeline

### GitHub Actions Workflows
1. **Lint & Format** - ESLint, Prettier
2. **Unit Tests** - Jest
3. **Build** - Webpack/Vite
4. **Integration Tests** - API tests
5. **Docker Build** - Build images
6. **Push Registry** - Push to Docker Hub
7. **Deploy** - Deploy to staging/production

## 📚 API Documentation

### Base URL
```
http://localhost:3000/api/v1
```

### Authentication
All endpoints (except login/register) require:
```
Authorization: Bearer <jwt_token>
```

### API Endpoints

#### Authentication Service
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `POST /auth/logout` - User logout
- `POST /auth/refresh` - Refresh token
- `POST /auth/forgot-password` - Forgot password
- `POST /auth/reset-password` - Reset password
- `POST /auth/verify-email` - Verify email

#### User Service
- `GET /users` - List users
- `GET /users/:id` - Get user
- `POST /users` - Create user
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user
- `POST /users/:id/avatar` - Upload avatar

#### Dashboard Service
- `GET /dashboard/statistics` - Get statistics
- `GET /dashboard/analytics` - Get analytics
- `GET /dashboard/charts` - Get chart data

#### Notification Service
- `GET /notifications` - List notifications
- `POST /notifications` - Create notification
- `PUT /notifications/:id/read` - Mark as read
- `PUT /notifications/read-all` - Mark all as read

#### Audit Service
- `GET /audit-logs` - List audit logs
- `GET /audit-logs/:id` - Get audit log

## 🛠️ Development Tools

### Code Quality
- ESLint
- Prettier
- TypeScript
- Husky pre-commit hooks

### Testing
- Jest
- React Testing Library
- Supertest

### Monitoring
- Winston Logger
- Request/Response logging
- Performance monitoring

## 📖 Environment Variables

### Frontend
```
VITE_API_BASE_URL=http://localhost:3000
VITE_APP_NAME=Enterprise Microfrontend
```

### Backend
```
NODE_ENV=development
PORT=3000
MONGODB_URL=mongodb://localhost:27017
JWT_SECRET=your-secret-key
REDIS_URL=redis://localhost:6379
```

## 🚀 Deployment

### Staging
```bash
npm run deploy:staging
```

### Production
```bash
npm run deploy:production
```

See [Deployment Guide](./documentation/DEPLOYMENT.md) for detailed instructions.

## 📖 Documentation

- [Architecture Guide](./documentation/ARCHITECTURE.md)
- [API Documentation](./documentation/API.md)
- [Database Schema](./documentation/DATABASE.md)
- [Deployment Guide](./documentation/DEPLOYMENT.md)
- [Security Guide](./documentation/SECURITY.md)

## 🤝 Contributing

1. Create feature branch
2. Make changes
3. Run tests
4. Run linter
5. Create pull request

## 📝 License

MIT License - See LICENSE file

## 👥 Authors

Enterprise Architecture Team

## 📧 Support

For issues and questions, please create an issue in the repository.

---

**Built with ❤️ following Enterprise Architecture Best Practices**
