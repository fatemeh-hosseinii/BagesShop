"use client"
import { useShoppingCart } from "@/app/Context/ShoppingCartContext";
import { useState } from "react";

const AddToCart = ({id}) => {
  
  const {cartItem,HandleIncreaceProductQty,getproductqty,HandleDecreasProductQty,RemoveItem}=useShoppingCart()
  


  return (
    <div className="flex flex-row justify-between items-center gap-4 bg-gray-100 p-3 rounded-md">
      <div className="w-[20%] flex flex-row gap-5 justify-center items-center">
        <button
          onClick={()=>HandleDecreasProductQty(id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          -
        </button>
        <span className="text-xl font-bold">{getproductqty(id)}</span>
        <button
          onClick={()=>HandleIncreaceProductQty((id))}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          +
        </button>
      </div>
     
      <button onClick={()=>{RemoveItem(id)}} className="bg-[red] px-5 py-2 rounded-lg text-white font-bold cursor-pointer">Delete</button>
      
    </div>
  );
};

export default AddToCart;
