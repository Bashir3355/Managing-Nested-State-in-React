# Profile App

This project is a React application built with Vite that demonstrates how to manage and update nested state in an immutable way. The app displays a user profile with `name`, `email`, and a nested `address` object containing `street`, `city`, and `country`. The main goal of this assignment is to practice updating nested React state correctly by using the spread operator at both levels of the object so the original state is not mutated. 

The application includes input fields for `street`, `city`, and `country`, along with a button that updates the user’s address information. The profile information is displayed below the form so the user can immediately see the changes after submitting the form. The app uses controlled inputs with React state and a functional state update pattern. [web:2]

## How to Run the Project

1. Open a terminal in the project folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the local link shown in the terminal, usually something like `http://localhost:5173/`. [web:30][web:66]

## Project Files

- `src/main.jsx` – renders the React app
- `src/App.jsx` – loads the `UserProfile` component
- `src/UserProfile.jsx` – contains the main assignment logic
- `src/App.css` – contains the styles for layout and design

This project was created for an assignment on managing nested state in React using `useState`, controlled form inputs, and the spread operator.