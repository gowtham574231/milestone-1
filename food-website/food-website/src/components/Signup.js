import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation and backend integration here
    if (formData.name && formData.email && formData.password) {
      setMessage("Signup successful! Redirecting...");
      // Simulate a short delay before navigation
      setTimeout(() => {
        navigate("/");
      }, 1000); // 1-second delay to display the message
    } else {
      setMessage("Please fill in all fields!");
    }
  };

  return (
    <main className="signup">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      {message && <p className="message">{message}</p>}
    </main>
  );
};

export default Signup;
