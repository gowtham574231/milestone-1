import React from "react";
import "./styles.css";

const About = () => {
  return (
    <main className="about">
      <h2>About Us</h2>
      <section className="about-info">
        <p>
          Welcome to <strong>Rastro</strong>, your one-stop destination for
          delicious food and unforgettable dining experiences. Our mission is
          to provide high-quality meals crafted with the finest ingredients.
        </p>
        <p>
          Founded in 2023, our passionate team of chefs and staff are dedicated
          to delivering culinary excellence and exceptional service. Whether
          you're craving comfort food or exploring gourmet dishes, Rastro is
          here to satisfy your taste buds.
        </p>
        <p>
          What makes us unique? Our commitment to innovation, quality, and
          sustainability. Every dish tells a story, and we invite you to be part
          of our journey.
        </p>
      </section>
      <section className="about-team">
        <h3>Meet the Team</h3>
        <div className="team-members">
          <div className="team-member">
            <img
              src="https://via.placeholder.com/100"
              alt="Chef John Doe"
              className="team-photo"
            />
            <h4>Chef John Doe</h4>
            <p>Head Chef</p>
          </div>
          <div className="team-member">
            <img
              src="https://via.placeholder.com/100"
              alt="Chef Jane Smith"
              className="team-photo"
            />
            <h4>Chef Jane Smith</h4>
            <p>Pastry Specialist</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
