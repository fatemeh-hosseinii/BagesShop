"use client"

import { useShoppingCart } from "@/app/Context/ShoppingCartContext";

const AddToCartItem = ({id}) => {
    const{CartItem,HandleIncreaceProductQty,getproductqty,HandleDecreasProductQty,RemoveItem}=useShoppingCart()
    console.log(CartItem);
    return ( <>
    
    <div className=" flex flex-row gap-4 mt-2">
        <button onClick={()=>HandleIncreaceProductQty(id)} className="bg-[#ff0000] px-3 font-bold ">+</button>
            <span>{getproductqty(id)}</span>
        <button onClick={()=>HandleDecreasProductQty(id)} className="bg-[#6fff00] px-3 font-bold">-</button>        
    </div>
    <button onClick={()=>RemoveItem(id)} className="px-6 py-1 rounded-lg bg-[red] mt-2 text-white font-bold">حذف از سبد</button>
    </> );
}
 
export default AddToCartItem;