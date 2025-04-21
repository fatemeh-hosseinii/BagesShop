import Link from "next/link";
import ProductItem from "./ProductItem";

const Product = ({ data }) => {
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

