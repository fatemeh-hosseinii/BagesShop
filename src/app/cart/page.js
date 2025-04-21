"use client"
import { useEffect, useState } from "react";
import CartItem from "../components/Cart/CartItem";
import Container from "../components/Container/Containar";
import { useShoppingCart } from "../Context/ShoppingCartContext";

const page = () => {
    const {cartItem}=useShoppingCart()
    const [product, setProduct] = useState(null);

    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const res = await fetch('http://localhost:3004/product');
          const data = await res.json();
          setProduct(data);
        } catch (err) {
          console.error("Error fetching product:", err);
        }
      };
  
      fetchProduct();
    }, []);
  console.log(product);
    return ( <>
    <Container>
    <div className="flex flex-col ">
        <div className=" flex flex-col gap-3">
           {
            cartItem.map((elem)=>{
                return(
                    <CartItem key={elem.id} {...elem}/>
                )
            })
           }
        </div>
        <div className="shadow-xl bg-fuchsia-400 rounded-3xl mx-auto flex flex-col gap-3 w-[50%] mt-10 p-3">
            <h2>price:77$</h2>
            <h2>benefit for this shopping :</h2>
            <h2>whole price:</h2>
            <div>
                <input className="outline-0" type="text" name="" id=""  placeholder="Enter code for discount"/>
                <button className="bg-blue-500 px-4">Submit</button>
            </div>

        </div>
    </div>
    </Container>
  

    </> );
}
 
export default page;