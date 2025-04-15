import { useShoppingCart } from "@/app/Context/ShoppingCartContext";

const CartItem = ({id}) => {

    return (  <>
    <div className="flex flex-row justify-center items-center ">
            <div className="w-[30%] flex  flex-row justify-center">
                <img className="w-[50%]" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRUQLVarwt3Amg6W7IzfwPZuZ4k2nnbOCS2zY8CTUAqeKcR1BSCC63BNd7go5sgrLlR2HTeMCSQyV-ZTJDrLzOcWdYofQFQOFNGH671QjOEBUe0QWZOD5ClQQ" alt="" />
            </div>
            <div className="w-[50%] bg-[#ff84f1] p-4">
                <h2>name product:</h2>
                <h2>count:4</h2>
                <h2>price:55$</h2>
                <div className=" flex flex-row gap-4 mt-2">
                    <button className="bg-[#ff0000] px-3 font-bold ">+</button>
                         <span>3</span>
                    <button className="bg-[#6fff00] px-3 font-bold">-</button>        
                </div>
            </div>

    </div>
      
    
    </>);
}
 
export default CartItem;