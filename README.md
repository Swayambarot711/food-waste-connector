# 🍽️ Food Waste Connector

> Connecting dining halls with students to reduce food waste while providing affordable meals

[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)](https://www.mongodb.com/cloud/atlas)
[![Node.js](https://img.shields.io/badge/Node.js-v18+-brightgreen)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-v5.0-blue)](https://expressjs.com/)

---

## 📖 About The Project

Food Waste Connector is a platform that bridges the gap between university dining halls and students. Dining halls can post surplus food at discounted prices before closing time, while students can discover and reserve affordable meals, reducing food waste on campus.

### Built With

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Atlas Cloud)
- **Authentication:** JWT (JSON Web Tokens)
- **Frontend:** Flutter (Mobile App)

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher) - [Download here](https://nodejs.org)
- Git - [Download here](https://git-scm.com)
- VS Code (recommended) - [Download here](https://code.visualstudio.com)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Swayambarot711/food-waste-connector.git
   ```

2. **Navigate to backend folder**
   ```bash
   cd food-waste-connector/backend
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Create environment file**
   
   Create a `.env` file in the `backend` folder with the following content:
   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://Faiq:FoodWasteProject@foodwastedb.zbyii1i.mongodb.net/food_waste_db
   JWT_SECRET=my-super-secret-key-2024
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Verify installation**
   
   Open your browser and go to: `http://localhost:5000`
   
   You should see a JSON response with API information.

---

## 📁 Project Structure

```
food-waste-connector/
├── backend/
│   ├── config/
│   │   └── db.js              # Database connection
│   ├── controllers/
│   │   ├── authController.js          # Authentication logic
│   │   └── diningHallController.js    # Dining hall CRUD
│   ├── middleware/
│   │   └── auth.js            # JWT authentication middleware
│   ├── models/
│   │   ├── User.js            # User schema
│   │   └── DiningHall.js      # Dining hall schema
│   ├── routes/
│   │   ├── authRoutes.js      # Auth endpoints
│   │   └── diningHallRoutes.js # Dining hall endpoints
│   ├── .env                   # Environment variables (not in repo)
│   ├── .gitignore
│   ├── package.json
│   └── server.js              # Entry point
└── README.md
```

---

## 🔌 API Endpoints

### Base URL
```
http://localhost:5000
```

### Authentication

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | No |
| POST | `/api/auth/login` | User login | No |
| GET | `/api/auth/me` | Get current user | Yes (JWT) |

**Example: Register a User**
```bash
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "student",
  "phone": "1234567890"
}
```

**Example: Login**
```bash
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### Dining Halls

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/dining-halls` | Get all dining halls | No |
| GET | `/api/dining-halls/:id` | Get single dining hall | No |
| POST | `/api/dining-halls` | Create dining hall | Yes (Dining Hall) |
| PUT | `/api/dining-halls/:id` | Update dining hall | Yes (Dining Hall) |
| DELETE | `/api/dining-halls/:id` | Delete dining hall | Yes (Dining Hall) |

**Example: Create Dining Hall**
```bash
POST http://localhost:5000/api/dining-halls
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json

{
  "name": "Main Cafeteria",
  "location": "Building A, Ground Floor",
  "description": "Main campus cafeteria",
  "openingTime": "08:00",
  "closingTime": "20:00",
  "contactInfo": {
    "phone": "555-1234",
    "email": "cafe@university.com"
  }
}
```

---

## 👥 Team

| Name | Role | Responsibilities |
|------|------|------------------|
| **Swayam** | Backend Lead | Server architecture, authentication, dining hall management |
| **Krishnan** | Core Features Developer | Food items CRUD, reservation system |
| **Uday** | Search & Monetization | Search/filter, offers system, notifications |
| **Faiq** | Database & Documentation | MongoDB setup, API docs, presentations |
| **Gami** | Frontend Developer | Flutter mobile app development |

---

## 🛠️ Development Workflow

### For Team Members

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes and test**

3. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add your feature description"
   ```

4. **Push to GitHub**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request** on GitHub for code review

### Branch Naming Convention

- `feature/food-items` - New features
- `fix/auth-bug` - Bug fixes
- `docs/api-documentation` - Documentation updates

---

## 🧪 Testing

### Using Postman

1. Download [Postman](https://www.postman.com/downloads/)
2. Import the API endpoints from the documentation above
3. Test each endpoint with sample data

### Manual Testing Checklist

- [ ] User registration works
- [ ] User login returns JWT token
- [ ] Protected routes require valid token
- [ ] Dining halls can be created (with dining_hall role)
- [ ] Dining halls can be retrieved (public access)
- [ ] MongoDB connection is stable

---

## 📝 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://...` |
| `JWT_SECRET` | Secret key for JWT tokens | `your-secret-key` |

**⚠️ Important:** Never commit the `.env` file to GitHub. It's already in `.gitignore`.

---

## 🚨 Troubleshooting

### MongoDB Connection Failed
- Verify `MONGO_URI` in `.env` is correct
- Check for spaces around the `=` sign
- Ensure MongoDB Atlas allows your IP address

### Port Already in Use
- Change `PORT` in `.env` to a different number (e.g., 5001)
- Or stop the other server using port 5000

### npm install fails
- Delete `node_modules` folder and `package-lock.json`
- Run `npm install` again

### Server crashes on startup
- Check all environment variables are set in `.env`
- Verify Node.js version is 18 or higher: `node --version`

---

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [JWT Introduction](https://jwt.io/introduction)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

---

## 📅 Project Timeline

- **Week 1-4:** Backend foundation (Authentication, Dining Halls) ✅
- **Week 5-6:** Core features (Food Items, Reservations)
- **Week 5-6:** Search & Monetization features
- **Week 5-8:** Frontend development (Flutter)
- **Week 7-8:** Documentation & Testing
- **Week 9-10:** Deployment & Final presentation

---

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Write clear commit messages
4. Submit a Pull Request
5. Wait for code review from Swayam (Backend Lead)

---

## 📄 License

This project is created for educational purposes as part of a university group project.

---

## 📞 Contact

**Backend Lead:** Swayam  
**Repository:** [https://github.com/Swayambarot711/food-waste-connector](https://github.com/Swayambarot711/food-waste-connector)

---

## 🎯 Project Goals

- ✅ Reduce food waste on campus
- ✅ Provide affordable meal options for students
- ✅ Create an efficient platform for dining halls
- ✅ Build a scalable, maintainable backend architecture

---

**Made with ❤️ by the Food Waste Connector Team**
