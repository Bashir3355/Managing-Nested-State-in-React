import { useState } from "react"; // Import useState to store profile data and input values

function UserProfile() {
  // Store the whole profile in one state object with a nested address object
  const [userProfile, setUserProfile] = useState({
    name: "Bashir",
    email: "bashir@example.com",
    address: {street:  "3208 S 186th ST", city: "Seatac", country: "USA"}
  });

  // Store form input values so the inputs are controlled
  const [street, setStreet] = useState(userProfile.address.street);
  const [city, setCity] = useState(userProfile.address.city);
  const [country, setCountry] = useState(userProfile.address.country);

  // Update the nested address immutably using the spread operator on both levels
  const updateAddress = (street, city, country) =>
    setUserProfile((prev) => ({
      ...prev, // Copy the top-level userProfile object so name and email stay the same
      address: {
        ...prev.address, // Copy the nested address object before replacing its fields
        street,
        city,
        country,
      },
    }));

  // Stop page refresh and send the input values to updateAddress
  const handleSubmit = (e) => {
    e.preventDefault();
    updateAddress(street, city, country);
  };

  // Show the form and display the current profile data
  return (
    <div className="container">
      <h1>User Profile</h1>

      <form onSubmit={handleSubmit}>
        <input value={street} onChange={(e) => setStreet(e.target.value)} placeholder="Street" />
        <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" />
        <input value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Country" />
        <button type="submit">Update</button>
      </form>

      <div className="card">
        <p><strong>Name:</strong> {userProfile.name}</p>
        <p><strong>Email:</strong> {userProfile.email}</p>
        <p><strong>Street:</strong> {userProfile.address.street}</p>
        <p><strong>City:</strong> {userProfile.address.city}</p>
        <p><strong>Country:</strong> {userProfile.address.country}</p>
      </div>
    </div>
  );
}

export default UserProfile; // Export the component so App.jsx can use it