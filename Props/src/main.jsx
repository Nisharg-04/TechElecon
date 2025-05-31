import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const products = [
  {
    name: "MacBook",
    desc: "Powerful laptop from Apple with M1 chip.",
    visit: "Buy MacBook",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Dell XPS",
    desc: "Sleek and powerful Windows laptop.",
    visit: "Buy Dell XPS",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "HP Spectre",
    desc: "Premium ultrabook with great battery life.",
    visit: "Buy HP Spectre",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Lenovo ThinkPad",
    desc: "Business laptop with robust build quality.",
    visit: "Buy ThinkPad",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Asus ZenBook",
    desc: "Lightweight laptop with stunning display.",
    visit: "Buy ZenBook",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=60",
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
      {products.map((product, idx) => (
        <App
          key={idx}
          name={product.name}
          desc={product.desc}
          visit={product.visit}
          img={product.img}
        />
      ))}
    </div>
  </React.StrictMode>
);
