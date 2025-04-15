"use client"

import { useShoppingCart } from "@/app/Context/ShoppingCartContext";

const AddToCartItem = ({id}) => {
    const{CartItem,HandleIncreaceProductQty}=useShoppingCart()
    console.log(CartItem);
    return ( <>
    
    <div className=" flex flex-row gap-4 mt-2">
        <button onClick={()=>HandleIncreaceProductQty(id)} className="bg-[#ff0000] px-3 font-bold ">+</button>
            <span>3</span>
        <button className="bg-[#6fff00] px-3 font-bold">-</button>        
    </div>
    </> );
}
 
export default AddToCartItem;