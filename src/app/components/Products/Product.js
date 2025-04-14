import Link from "next/link";
import ProductItem from "./ProductItem";
import axios from "axios";

const Product = async () => {
  const res = await axios.get("http://localhost:3004/product");
  const data = res.data; 

  return (
    <>
      {data.map((elem, index) => (
        <Link
          key={index}
          href={`/store/${elem.id}`}
          className="shadow-md flex flex-col gap-3 p-3"
        >
          <ProductItem {...elem} />
        </Link>
      ))}
    </>
  );
};

export default Product;
