import { useState } from "react"; // Import useState to track the current image index

const images = [ // Create an array of recipe image objects
  { id: 1, url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80", description: "This fresh salad is light, colorful, and full of healthy ingredients." }, // First recipe image
  { id: 2, url: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80", description: "This pasta dish looks warm, creamy, and perfect for dinner." }, // Second recipe image
  { id: 3, url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", description: "This breakfast plate is hearty, tasty, and a great way to start the day." }, // Third recipe image
]; // End of images array

function Gallery() { // Create the Gallery component
  const [index, setIndex] = useState(0); // Store the current image position starting at 0

  return ( // Start JSX return
    <div className="box"> {/* Main container box */}
      <h1>Recipe Gallery</h1> {/* Page title */}
      <img src={images[index].url} alt={images[index].description} /> {/* Show the current image with alt text */}
      <p>{images[index].description}</p> {/* Show the current image description */}
      <div> {/* Button container */}
        <button onClick={() => index > 0 && setIndex(index - 1)} disabled={index === 0}>Previous</button> {/* Go back one image unless already at the first image */}
        <button onClick={() => index < images.length - 1 && setIndex(index + 1)} disabled={index === images.length - 1}>Next</button> {/* Go forward one image unless already at the last image */}
      </div> {/* End button container */}
    </div> // End main container box
  ); // End JSX return
} // End Gallery component

export default Gallery; // Export Gallery so App.jsx can use it