
# QR Code Food Calories Tracker

This is a full-stack application built with **Node.js**, **Express**, **MongoDB**, and **React.js** that allows users to scan a QR code to view the calorie content of food items. Users can also update their calorie consumption, and admins can manage the food database.

## Features

- **QR Code Scanning**: Scan a QR code to view calories per quantity of food items.
- **Food Management**: Admins can add, update, and delete food items.
- **Calorie Tracking**: Users can save food items to their history and update their calorie information.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Backend API Endpoints

### `/food` Route
- **POST** `/food`: Add a new food item (Admin only).
- **PUT** `/food/:id`: Update an existing food item (Admin only).
- **DELETE** `/food/:id`: Delete a food item (Admin only).

### `/user` Route
- **GET** `/user/food`: Retrieve available food items.
- **POST** `/user/food-history`: Save food to the user's history.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies for both the backend and frontend:
   ```bash
   # Backend setup
   cd backend
   npm install

   # Frontend setup
   cd ../frontend
   npm install
   ```

3. Set up your environment variables:
   - Create a `.env` file in the `backend` folder with the following variables:
     ```
     MONGO_URI=your_mongo_connection_string
     PORT=5000
     JWT_SECRET=your_jwt_secret
     ```

4. Start the development servers:
   ```bash
   # Start the backend
   cd backend
   npm run dev

   # Start the frontend
   cd ../frontend
   npm start
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure

### Backend
```
backend/
├── controllers/
│   ├── foodController.js
│   └── userController.js
├── models/
│   ├── Food.js
│   └── User.js
├── routes/
│   ├── foodRoutes.js
│   └── userRoutes.js
├── server.js
└── .env
```

### Frontend
```
frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   └── index.js
└── package.json
```

## Future Enhancements

- Add user authentication for personalized calorie tracking.
- Provide analytics and visualizations for calorie consumption history.
- Introduce advanced search and filtering options for food items.


## Acknowledgments

Thanks to the contributors and the open-source community for inspiration and resources.
