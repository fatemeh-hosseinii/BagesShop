import Link from "next/link";
import Container from "../../Container/Containar";
import FavoriteAccesory from "../FavoriteAccesory/FavoriteAccesory";
const Showaccesory = async () => {
  const response = await fetch("https://alisab.ir/products");
  const data = await response.json();

  return (
    <>
<Container>
    <div className="flex flex-col justify-center items-center mt-5 ">
        <p className="text-[28px] font-bold text-[black]">AccesoryParlly</p>
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5 p-4">
    
    {data.map((elem, index) => (
      <div
       
        key={index}
        className="bg-pink-200 rounded flex flex-col justify-center items-center rounded-4 p-2"
      >
        <Link  href={`/productsAccesory/${elem.id}`} className="h-[35vh] w-[100%] ">
          <img
            src={elem.image}
            alt=""
            className="w-[100%] h-[100%]"
          />
        </Link>
        
       <div className=" w-[100%] flex flex-row justify-between mt-5">
          <p className="text-[15px] font-bold text-[black]">{elem.name}</p>
          <FavoriteAccesory product={elem} />
       </div>
       <div className="mt-3 w-[100%] ">
        <p className="text-[13px]">{elem.description}</p>
       </div>
       <div className="flex flex-row justify-between w-[100%] mt-2">
        <p className="font-bold">{elem.price}$</p>
        <div className="bg-[red] rounded-full px-1 p-1">
          <p className="font-bold text-[white] text-[13px]">
            
            {elem.discount}%
          </p>

        </div>
       </div>
      </div>
    ))}
  </div>
    </div>

</Container>


    </>
  );
};

export default Showaccesory;
