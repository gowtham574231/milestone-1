import React from "react";
import "./styles.css";

const Menu = ({ addToCart }) => {
  const menuItems = [
    {
      id: 1,
      name: "Grilled Chicken",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "Veggie Pizza",
      price: "$9.99",
      image: "https://www.twopeasandtheirpod.com/wp-content/uploads/2021/03/Veggie-Pizza-8.jpg",
    },
    {
      id: 3,
      name: "Cheeseburger",
      price: "$8.99",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?fit=crop&w=500&q=60",
    },
    {
      id: 4,
      name: "Pasta Alfredo",
      price: "$10.99",
      image: "https://th.bing.com/th/id/OIP.-N7eADto-BeuuWD9HkEZ0AHaJQ?rs=1&pid=ImgDetMain",
    },
  ];

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Menu;
