import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const items = useSelector((state) => state.cart);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 1 second
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <nav>
      <span className="Logo">REDUX STORE</span>
      <div className="navLinks">
        <Link className="navLink" to="/">
          HOME
        </Link>
        <Link className="navLink" to="/cart">
          CART
        </Link>
        <span className="cartCount">CART Items : {items.length}</span>
        {loading && <span className="navSpinner" title="Loading"></span>}
      </div>
    </nav>
  );
}

export default Navbar;
