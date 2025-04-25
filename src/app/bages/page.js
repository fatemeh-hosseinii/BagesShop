import Link from "next/link";
import Container from "../components/Container/Containar";
import FavoriteAccesory from "../components/HomeComponents/FavoriteAccesory/FavoriteAccesory";

const page = async() => {
    const res=await fetch("http://localhost:3004/bages")
    const data=await res.json()
    return ( <>
    <Container>
        <div className=" mt-5 grid grid-cols-4 gap-5">
            {
                data.map((elem,index)=>{
                  return<div
       
                  key={index}
                  className="bg-pink-200 rounded flex flex-col justify-center items-center rounded-4 p-4"
                >
                  <Link  href="" className="h-[45vh] w-[100%] ">
                    <img
                      src={elem.image}
                      alt=""
                      className="w-[100%] h-[100%] rounded-lg"
                    />
                  </Link>
                  <div className="w-[100%] mt-2">
                    <p className="text-[13px]">{elem.name}</p>

                  </div>
                  <div className="flex flex-row justify-between w-[100%] mt-3">
                    <p className="font-bold text-[18px]">{elem.price}</p>
                    <FavoriteAccesory product={elem}/>
                  </div>
                  <div className="flex flex-row justify-between w-[100%] mt-4">
                    <p className="text-[15px]">Rating: 2.3</p>
                    <Link href={`/bages/${elem.id}`} className="px-4 py-1 bg-[#EF7777] text-[white] font-bold">
                        Dtail
                    </Link>

                  </div>
                  
                
                </div>
                })
            } 

        </div>
    </Container>
  
    </> );
}
 
export default page;