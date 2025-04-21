import AddToCartItem from "@/app/components/Cart/AddToCartItem";
import Container from "@/app/components/Container/Containar";
import axios from "axios";

const ProductDetail = async ({ params }) => {
  const { id } = params;
  const result = await axios.get(`http://localhost:3004/product/${id}`);
  const data = result.data;

  return (
    <Container>
      <div className="flex flex-row justify-center items-center gap-5 w-full mt-5">
        <div className="w-[30%]">
          <img src={data.img} alt={data.title} />
        </div>
        <div className="w-[40%] bg-[#ff84f1] shadow-xl p-4 gap-3 rounded-lg flex flex-col justify-center items-center mt-20">
          <p className="font-bold">{data.title}</p>
          <p className="font-bold">{data.price}</p>
          <AddToCartItem id={id} />
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
