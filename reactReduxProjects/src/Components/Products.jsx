import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add,remove } from "../Store/CartSlice";
function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);
  const handleAdd = (product) => {
    dispatch(add(product));
  };
  return (
    <div className="productsWrapper"> 
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => handleAdd(product)} className="btn">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
