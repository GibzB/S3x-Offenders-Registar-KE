import './App.css';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  return (
    <div>
      <h1>Welcome to the Sex Offender Registry App</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/search">Search</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <h2>About</h2>
      <p>Our sex offender registry app allows you to search for convicted sex offenders in your area and view their information, including their name, address, and offense history.</p>
      <h2>Search</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
        <button type="submit" onClick={handleSubmit}>Search</button>
      </form>
      <h2>Contact</h2>
      <p>For more information or assistance, please contact us at:</p>
      <ul>
        <li>Email: contact@sexoffenderregistryapp.com</li>
        <li>Phone: 555-555-5555</li>
      </ul>
    </div>
  );
}

function handleSubmit(e) {
  e.preventDefault();
  // Send the name and location to the server for searching
  // ...
}

export default App;
