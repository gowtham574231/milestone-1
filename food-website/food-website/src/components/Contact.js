import React from "react";
import "./styles.css";

const Contact = () => {
  return (
    <main className="contact">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Enter your name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Enter your email" required />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          rows="5"
          placeholder="Write your message here..."
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default Contact;
