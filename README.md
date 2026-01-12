<p align="center">
  <img src="https://tse3.mm.bing.net/th/id/OIP.miGMXUjKnSWMFSKUih6b4gAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" width="120" alt="Simple Shop Logo" />
</p>

<p align="center">
  A scalable backend system for a <b>Simple Shop</b> built with <b>NestJS</b>, designed for learning, teamwork, and real-world backend architecture.
</p>

---

## 📌 Project Overview

**Simple Shop** is a backend application that simulates a real-world e-commerce system.  
It is built using **NestJS**, **TypeScript**, and **Prisma**, and is designed to be consumed by **frontend, mobile, and QA teams**.

The project focuses on:
- Clean backend architecture
- Clear API contracts (Swagger)
- Proper authentication & authorization
- Realistic database relationships
- Team-based development workflow

This project is educational, but structured like a production system.

---

## 🏗️ System Description

The Simple Shop system allows users to:

- Register and authenticate securely
- Browse products and categories
- Place orders
- Track order status
- Manage users, roles, and permissions
- Support future extensions like delivery, payments, and admin dashboards

The backend **never trusts the frontend**.  
All validation, authorization, and business logic live on the server.

---

## 👥 User Roles

The system is designed around multiple roles:

- **Customer**
  - Browse products
  - Place orders
  - View order history

- **Admin**
  - Manage users
  - Manage products and categories
  - View all orders

- **(Future) Delivery / Vendor**
  - Handle delivery logic
  - Manage order fulfillment

Roles are enforced using guards and decorators.

---

## 🧠 Architecture

The project follows **modular architecture**:

- Each feature is isolated in its own module
- Controllers handle HTTP requests
- Services contain business logic
- DTOs define data contracts
- Prisma handles database access

Example modules:
- `AuthModule`
- `UsersModule`
- `ProductsModule`
- `OrdersModule`

---

## 🗄️ Database

- Database is managed using **Prisma ORM**
- Relations are explicitly defined (users → orders → products)
- Migrations are versioned and tracked
- Passwords are **never returned** in responses

---

## 🔐 Authentication & Security

- Authentication uses **JWT**
- Passwords are hashed
- Sensitive fields are excluded from API responses
- Role-based access control (RBAC) is enforced

---

## 📑 API Documentation (Swagger)

Swagger is enabled to allow:
- Frontend & mobile teams to test APIs
- QA to validate endpoints
- Clear visibility of request/response shapes

Swagger acts as the **contract** between backend and other teams.

---

## 🚀 Project Setup

```bash
npm install
▶️ Running the Project
bash
Copy code
# development
npm run start

# watch mode
npm run start:dev

# production
npm run start:prod
🧪 Testing
bash
Copy code
# unit tests
npm run test

# e2e tests
npm run test:e2e

# coverage
npm run test:cov
🔄 Development Workflow
Feature-based branching

Clear commits

Database migrations tracked

Swagger updated with every API change

Backend development starts before frontend to unblock other teams.
```
## 📦 Tech Stack
```bash
NestJS – Backend framework

TypeScript – Type safety

Prisma – Database ORM

MySQL – Database

JWT – Authentication

Swagger – API documentation

Docker (optional) – Containerization
```

## 🎯 Project Goals
Learn real backend architecture

Practice team collaboration

Build scalable APIs

Understand production-level thinking

Prepare for real-world projects

