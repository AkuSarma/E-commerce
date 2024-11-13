# MERN Stack E-Commerce Application
An end-to-end e-commerce application built with the MERN stack (MongoDB, Express.js, React, Node.js). This project includes key e-commerce functionalities such as product search, cart management, order placement, delivery tracking, and payment integration using Stripe.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Future Enhancements](#future-enhancements)
- [License](#license)

## Features
- User Authentication: Secure login and registration with password hashing (using bcrypt) and JWT-based authentication.
- Product Catalog: Browse products with search and filter options.
- Cart Management: Add, update, or remove products from the cart.
- Order Management: Place orders, view order details, and manage order status.
- Payment Integration: Process payments securely using the Stripe API.
- Delivery Tracking: Track the order's delivery status from dispatch to delivery.
- Admin Dashboard: Manage products, orders, users, and inventory (Admin role only).
- Responsive Design: Fully responsive front end with a seamless experience across devices.
## Tech Stack
- Frontend
- - React with Redux: State management and UI rendering
- - React Router: Routing and navigation
- - Tailwind CSS: Styling and responsive design
- Backend
- - Node.js with Express.js: REST API development
- - MongoDB with Mongoose: Database management
- - JWT: Authentication
- - Stripe API: Payment processing

## Installation
> Clone the repository:

```bash
git clone https://github.com/your-username/mern-ecommerce-app.git
cd mern-ecommerce-app
```

> Install dependencies for both frontend and backend:

1. **Install backend dependencies**
```bash
cd backend
npm install
```

2. **Install frontend dependencies**
```bash
cd ../frontend
npm install
```

> Set up environment variables (see Environment Variables section below).

> Run the application:

3. **Start the backend server:**
```bash
cd backend
npm start
```

4. **Start the frontend:**
```bash
cd ../frontend
npm start
```

## Environment Variables
Create a .env file in the backend directory with the following:

```plaintext
Copy code
# Server Port
PORT=5000

# Database URI
MONGO_URI=mongodb://localhost:27017/ecommerce

# JWT Secret
JWT_SECRET=your_jwt_secret

# Stripe API Keys
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLIC_KEY=your_stripe_public_key

# Frontend URL
CLIENT_URL=http://localhost:3000
```

## Usage

1. User Registration & Login
Register as a new user or log in with existing credentials.
Access features like cart management and order history once logged in.
2. Product Catalog
Browse, search, and filter products by category, price, etc.
View product details on individual product pages.
3. Cart Management
Add products to the cart.
Modify product quantity or remove items from the cart.
4. Checkout & Payment
Proceed to checkout with items in the cart.
Complete payments securely via Stripe.
5. Order Tracking
View the order summary and track the delivery status.
Receive email notifications for order status updates.
6. Admin Dashboard
Only available for users with admin access.
Manage products, orders, and users.
Update order statuses for delivery tracking.

## API Documentation
- User Routes: Register, login, profile management.
- Product Routes: Fetch all products, product details, search, and filter.
- Cart Routes: Add, update, and delete items in the cart.
- Order Routes: Place orders, view orders, and update delivery status.
- Payment Routes: Stripe payment integration.
(Refer to backend/routes for detailed route information.)

## Future Enhancements
- Wishlist: Add functionality to save products for later.
- Product Recommendations: Integrate a recommendation engine based on user behavior.
- Push Notifications: Enable real-time notifications for order updates.
- Product Reviews: Allow users to leave reviews and ratings on products.

## License
This project is licensed under the MIT License. See the LICENSE file for details.