"use client";
import { useEffect, useState } from "react";
import AddToCartItem from "./AddToCartItem";

const CartItem = ({ id, qty }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:3004/product/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>در حال بارگذاری...</p>;

  return (
    <div className="flex flex-row justify-center items-center">
      <div className="w-[30%] flex flex-row justify-center">
        <img className="w-[50%]" src={product.img} alt={product.name} />
      </div>
      <div className="w-[50%] bg-[#ff84f1] p-4">
        <h2>نام محصول: {product.name}</h2>
        <h2>قیمت: {product.price}$</h2>
        <h2>تعداد: {qty}</h2>

        <AddToCartItem id={id} />
      </div>
    </div>
  );
};

export default CartItem;
