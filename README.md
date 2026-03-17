# Food Waste Connector

A platform connecting university dining halls with students. Dining halls post surplus food at discounted prices before closing, students find and reserve affordable meals — less waste, lower costs.

---

## Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Auth:** JWT
- **Frontend:** Flutter (mobile)

---

## Setup

**Requirements:** Node.js v18+, Git

```bash
git clone https://github.com/Swayambarot711/food-waste-connector.git
cd food-waste-connector/backend
npm install
```

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
MONGO_URI=mongodb+srv://Faiq:FoodWasteProject@foodwastedb.zbyii1i.mongodb.net/food_waste_db
JWT_SECRET=my-super-secret-key-2024
```

```bash
npm run dev
```

Visit `http://localhost:5000` — you should get a JSON response.

---

## Project Structure

```
food-waste-connector/
├── backend/
│   ├── config/db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── diningHallController.js
│   ├── middleware/auth.js
│   ├── models/
│   │   ├── User.js
│   │   └── DiningHall.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── diningHallRoutes.js
│   ├── .env
│   ├── package.json
│   └── server.js
└── README.md
```

---

## API

Base URL: `http://localhost:5000`

### Auth

| Method | Endpoint | Auth |
|--------|----------|------|
| POST | `/api/auth/register` | No |
| POST | `/api/auth/login` | No |
| GET | `/api/auth/me` | JWT |

**Register**
```json
POST /api/auth/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "student",
  "phone": "1234567890"
}
```

**Login**
```json
POST /api/auth/login
{
  "email": "john@example.com",
  "password": "password123"
}
```

### Dining Halls

| Method | Endpoint | Auth |
|--------|----------|------|
| GET | `/api/dining-halls` | No |
| GET | `/api/dining-halls/:id` | No |
| POST | `/api/dining-halls` | JWT (dining_hall role) |
| PUT | `/api/dining-halls/:id` | JWT (dining_hall role) |
| DELETE | `/api/dining-halls/:id` | JWT (dining_hall role) |

**Create Dining Hall**
```json
POST /api/dining-halls
Authorization: Bearer <token>

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

## Environment Variables

| Variable | Example |
|----------|---------|
| `PORT` | `5000` |
| `MONGO_URI` | `mongodb+srv://...` |
| `JWT_SECRET` | `your-secret-key` |

Never commit `.env` — it's in `.gitignore`.

---

## Team

| Name | Role |
|------|------|
| Swayam | Backend Lead |
| Krishnan | Food items, reservations |
| Uday | Search, offers, notifications |
| Faiq | Database, docs |
| Mahamoud Jama | Flutter frontend |

---

## Git Workflow

```bash
git checkout -b feature/your-feature-name
# make changes
git add .
git commit -m "brief description"
git push origin feature/your-feature-name
```

Then open a Pull Request for review by Swayam.

Branch naming: `feature/`, `fix/`, `docs/`

---

## Troubleshooting

**MongoDB won't connect** — check `MONGO_URI` in `.env`, no spaces around `=`, and confirm your IP is whitelisted in Atlas.

**Port in use** — change `PORT` in `.env` to something like `5001`.

**npm install fails** — delete `node_modules` and `package-lock.json`, then re-run `npm install`.

**Server crashes on start** — make sure all `.env` variables are set and you're on Node.js 18+.





