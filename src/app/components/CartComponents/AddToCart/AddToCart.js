"use client"
import { useState } from "react";

const AddToCart = () => {
  const [qty, setQty] = useState(1);

  const increaseQty = () => setQty(qty + 1);
  const decreaseQty = () => {
    if (qty > 1) setQty(qty - 1);
  };

  return (
    <div className="flex items-center gap-4 bg-gray-100 p-3 rounded-md">
      <button
        onClick={decreaseQty}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        -
      </button>
      <span className="text-xl font-bold">{qty}</span>
      <button
        onClick={increaseQty}
        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
      >
        +
      </button>
    </div>
  );
};

export default AddToCart;
