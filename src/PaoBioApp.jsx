import React, { useState } from "react";

export default function PaoBioApp() {
  const products = [
    { id: 1, name: "Notebook", price: 5 },
    { id: 2, name: "Pen", price: 2 },
    { id: 3, name: "Sticker Pack", price: 3 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const getTotal = () => cart.reduce((total, item) => total + item.price, 0);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Pao Bio Club — QR Ordering Demo</h1>

      <h2>Menu</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}{" "}
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h2>Cart</h2>
      {cart.length === 0 && <p>Your cart is empty.</p>}
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>

      {cart.length > 0 && (
        <>
          <p>Total: ${getTotal()}</p>
          <button onClick={() => alert("Checkout with WeChat/Alipay!")}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
}
