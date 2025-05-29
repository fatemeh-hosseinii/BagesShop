'use client'
import { useEffect } from "react";
import DtailsFilterLeft from "./DtailsFilterLeft";
import { useFilter } from "@/app/Context/FilterShoppingContext";

const FilterLeft = () => {
const { categories, fetchAllData, handleFilter } = useFilter();

  useEffect(() => {
    fetchAllData();
  }, []);
    return ( <>
    <div className="w-[25%] flex flex-col p-3 h-[80vh] bg-gray-200 shadow-lg rounded-lg mt-3">
        <p className="text-[22px] mb-4 text-[#000000]">Accesory</p>
        <DtailsFilterLeft categories={categories} onFilter={handleFilter} />
        <p className="text-[22px] mb-4 mt-5 text-[#000000]"><span className="text-[red]">P</span>rice:</p>

    </div>
    
    </> );
}
 
export default FilterLeft;