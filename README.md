# 🗳️ Voting App – Backend

A secure and scalable backend application for a Voting System built using Node.js, Express, and MongoDB.  
This project implements authentication, role-based access control, and candidate management APIs.

---

## 🚀 Features

- 🔐 JWT-based Authentication
- 👤 User Registration & Login
- 🛡️ Role-Based Authorization (Admin/User)
- 🗳️ Vote Casting System (One user, one vote)
- 🧑‍💼 Candidate Management (Admin Only)
- ⚡ Secure Middleware Implementation

---

## 🏗️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcrypt (Password Hashing)
- dotenv

---

## 📂 Project Structure
```
├── src/
│   ├── controllers/ 
│   │   ├── candidates.controller.js 
│   │   └── user.controller.js 
│   ├── db/ 
│   │   └── index.js 
│   ├── routes/ 
│   │   ├── candidates.routes.js 
│   │   └── user.routes.js 
│   ├── middlewares/ 
│   │   └── auth.middleware.js 
│   ├── models/ 
│   │   ├── Candidate.model.js 
│   │   └── User.model.js 
│   ├── utils/ 
│   │   ├── ApiError.js 
│   │   ├── ApiResponse.js 
│   │   └── AsyncHandler.js 
│   ├── app.js 
│   ├── constant.js
│   └── index.js
└── README.md
```
---

## 🔐 Authentication Flow

1. User registers or logs in.
2. Server generates JWT token.
3. Protected routes require the token in headers:
   `Authorization: Bearer <your_jwt_token>`
4. Middleware verifies the token and grants access.

---

## 🗳️ Voting Logic

- Each user can vote only once.
- Vote count increases for selected candidate.
- Admin can create, update, or delete candidates.

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/anshsingh1032/voting-app
cd voting-app-backend
```
### 2️⃣ Install dependencies
```
npm install
```
### 3️⃣ Create .env file
```
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
### 4️⃣ Start the server
```
npm run dev
Server will run on:
http://localhost:8000
```
## 📬 API Endpoints Overview

### 👤 User Routes

| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/v1/users/register` | Register a new user account | Public |
| `POST` | `/api/v1/users/login` | Authenticate user and get token | Public |
| `GET` | `/api/v1/users/profile` | Get current logged-in user profile | Protected |
| `PUT` | `/api/v1/users/profile/password` | Change current password and set a new password| Protected |

### 🧑‍💼 Candidate Routes

| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/v1/candidates` | Create a new candidate | **Admin Only** |
| `GET` | `/api/v1/candidates` | Get a list of all candidates | Public |
| `PUT` | `/api/v1/candidates/:candidateId` | Update candidate details | **Admin Only** |
| `DELETE` | `/api/v1/candidates/:candidateId` | Remove a candidate | **Admin Only** |
| `POST` | `/api/v1/candidates/vote/:candidateId` | Cast a vote for a candidate | Protected |
| `GET` | `/api/v1/candidates/vote/count` | get the total no of votes casted to a candidate| Public |

---

## 🛡️ Security Features

* **Password Hashing:** Secure password storage utilizing `bcrypt`.
* **JWT Authentication:** Stateless, secure authentication using JSON Web Tokens.
* **Role-Based Access Control (RBAC):** Specific actions (like adding or deleting candidates) are strictly restricted to Admin users.
* **Protected Routes:** Custom middleware ensuring that only authorized and authenticated users can access specific API endpoints.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/anshsingh1032/voting-app/issues) if you want to contribute.

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 👨‍💻 Author

**Ansh Singh**

* GitHub: [@anshsingh1032](https://github.com/anshsingh1032)
* LinkedIn: [ansh-singh-9592bb329](https://linkedin.com/in/ansh-singh-9592bb329)


---
