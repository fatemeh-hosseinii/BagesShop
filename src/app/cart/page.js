"use client"
import { useState } from "react";
import Container from "../components/Container/Containar";
import { useShoppingCart } from "../Context/ShoppingCartContext";

const Page = () => {
  const { cartItem } = useShoppingCart();
  const [discountCode, setDiscountCode] = useState("");
  const totalPrice = cartItem.reduce((acc, item) => acc + item.price, 0);

  return (
    <Container>
      <div className="flex flex-col">
        <div className="flex flex-col gap-3">
          {cartItem.map((elem) => (
            <img key={elem.id} src={elem.image} alt="" />
          ))}
        </div>

        <div className="shadow-xl bg-fuchsia-400 rounded-3xl mx-auto flex flex-col gap-3 w-[50%] mt-10 p-3">
          <h2>Price: {totalPrice}$</h2>
          <h2>Benefit for this shopping: ...</h2>
          <h2>Whole price (after discount?): ...</h2>
          <div>
            <input
              className="outline-0"
              type="text"
              placeholder="Enter code for discount"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
            />
            <button className="bg-blue-500 px-4">Submit</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page;
