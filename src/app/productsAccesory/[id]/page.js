import Link from "next/link";

const page = async({params}) => {
    const { id } = params;
    const response = await fetch(`https://alisab.ir/products/show/${id}`);
    const data = await response.json();
    console.log(data);
    return ( <>
    <div className="w-[100%] bg-[white] flex flex-row ">
      <div className="w-[50%]  flex flex-col justify-center items-center">
        <div className="w-[70%] h-[70vh] bg-amber-950 p-3 flex flex-row justify-center items-center" >
          <img src={data.image} className="h-[100%]" alt="" />
        </div>
        <p className="text-[25px] font-bold text-[#EF7777]">{data.name}</p>
      </div>
      <div className=" w-[50%] flex flex-col mt-10 ">
        <p className="text-[23px] font-bold  text-[#EF7777]">{data.description}</p>
        <div className="flex flex-col justify-center mt-5">
          <p className="text-[23px]">Artículo en la acción</p>
          <p className="text-[22px] font-bold mt-2">54,00 €</p>
        </div>
        <div className=" w-[65%] mt-4 flex flex-col gap-5">
          <Link className="bg-[black] w-[100%] text-center py-2 font-bold text-[white] hover:bg-green-500 transition" href="">Add To Cart</Link>
          <Link className="bg-[black] w-[100%] text-center py-2 font-bold text-[white] hover:bg-green-500 transition" href="">Add To Cart</Link>
          <Link className="bg-[black] w-[100%] text-center py-2 font-bold text-[white] hover:bg-green-500 transition" href="">Add To Cart</Link>
        </div>
      </div>
    </div>
    </> );
}
 
export default page;