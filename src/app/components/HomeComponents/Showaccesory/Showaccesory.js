import Link from "next/link";
import Container from "../../Container/Containar";

const Showaccesory = async () => {
  const response = await fetch("https://alisab.ir/products");
  const data = await response.json();

  return (
    <>
   <Container>
    <div className="flex flex-col justify-center items-center mt-5 bg-red-300">
        <p className="text-[28px] font-bold text-[white]">AccesoryParlly</p>
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 bg-red-300 p-4">
    
    {data.map((elem, index) => (
      <Link
        href="/productsAccesory"
        key={index}
        className="bg-pink-200 p-2 rounded flex flex-col justify-center items-center"
      >
        <img
          src={elem.image}
          alt=""
          className="w-[100%] object-contain"
        />
        <p className="text-[14px] font-bold">{elem.description}</p>
      </Link>
    ))}
  </div>
    </div>

</Container>


    </>
  );
};

export default Showaccesory;
