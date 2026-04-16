// Import the CSS file for styling
import "./App.css";

// Import the UserProfile component from the same folder
import UserProfile from "./UserProfile.jsx";

// Main App component
function App() {
  return (
    <div>
      {/* Show the UserProfile component */}
      <UserProfile />
    </div>
  );
}

// Export App so main.jsx can use it
export default App;