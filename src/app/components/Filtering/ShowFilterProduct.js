"use client"
import Link from "next/link";
import FavoriteAccesory from "../HomeComponents/FavoriteAccesory/FavoriteAccesory";
import { useEffect } from "react";
import { useFilter } from "@/app/Context/FilterShoppingContext";


const ShowFilterProduct = () => {
    const { filtered, fetchAllData} = useFilter();
    useEffect(() => {
        fetchAllData();
      }, []);
    return ( 
    <div className="w-[75%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 p-4 ">
        {filtered.map((elem, index) => (
          <div
            key={index}
            className="bg-pink-200 flex flex-col justify-center items-center rounded p-2"
          >
            <Link href={`/productsAccesory/${elem.id}`} className="h-[35vh] w-full">
              <img src={elem.image} alt="" className="w-full h-full object-cover" />
            </Link>

            <div className="w-full flex flex-row justify-between mt-5">
              <p className="text-[15px] font-bold text-black">{elem.name}</p>
              <FavoriteAccesory product={elem} />
            </div>

            <div className="mt-3 w-full">
              <p className="text-[13px]">{elem.description}</p>
            </div>

            <div className="flex flex-row justify-between w-full mt-2">
              <p className="font-bold">{elem.price}$</p>
              <div className="bg-red-600 rounded-full px-2 py-1">
                <p className="font-bold text-white text-[13px]">
                  {elem.discount}%
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
     );
}
 
export default ShowFilterProduct;