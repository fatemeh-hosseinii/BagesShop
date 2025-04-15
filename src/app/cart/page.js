import CartItem from "../components/Cart/CartItem";
import Container from "../components/Container/Containar";

const page = () => {
    return ( <>
    <Container>
    <div className="flex flex-col ">
        <div className=" flex flex-col gap-3">
            <CartItem/>
            <CartItem/>
            <CartItem/>
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