# SoulNotes – Emotion-Responsive Digital Diary Web Application

SoulNotes is a Emotion-Responsive Digital Diary web application built using React and Vite.  
It enables users to create, manage, and revisit personal memories based on their mood.  
The application provides a clean user interface, dynamic themes, and a simple authentication flow using LocalStorage.

---

## Features

- User authentication system (Register, Login, Logout)  
- Create, edit, and delete journal posts  
- Emotion-based color themes and UI personalization  
- Search and filter functionality for posts  
- Protected routes using a custom authentication wrapper  
- LocalStorage-based data persistence  
- Responsive and minimal user interface  
- Smooth navigation using React Router  

---

## Technology Stack

- React (Vite)  
- JavaScript (ES6)  
- React Router  
- LocalStorage  
- CSS  
- HTML  

---

## Functional Overview

Users can register and log in using a LocalStorage-based system.

After logging in, users are welcomed with a dedicated welcome screen before accessing the home page.

The home page displays all posts and allows filtering based on user-selected emotion categories.

The application supports CRUD operations: creating, reading, updating, and deleting posts.

Theme colors adapt dynamically based on the selected mood.

All user data (posts and login state) is stored locally for simplicity and offline use.

---

## How to Run the Project

### 1. Clone the repository
```
git clone https://github.com/charans2605/SoulNotes.git
```

### 2. Navigate to the project directory
```
cd SoulNotes
```

### 3. Install dependencies
```
npm install
```

### 4. Start the development server
```
npm run dev
```

---

## Build for Production

To generate optimized production files:

```
npm run build
```
