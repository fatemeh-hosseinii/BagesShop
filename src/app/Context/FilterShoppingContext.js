"use client";
import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
 const [filterprice,setfilterprice]=useState([])
  const fetchAllData = async () => {
    try {
      const catRes = await fetch("https://alisab.ir/categories");
      const catData = await catRes.json();

      const prodRes = await fetch("https://alisab.ir/products");
      const prodData = await prodRes.json();

      setCategories(catData);
      setProducts(prodData);
      setFiltered(prodData);
    } catch (error) {
      console.error("خطا در دریافت داده‌ها:", error);
    }
  };

  const handleFilter = (selectedId) => {
    if (selectedId === 0) {
      setFiltered(products);
    } else {
      const result = products.filter((item) => item.category_id === selectedId);
      setFiltered(result);
    }
  };

  return (
    <FilterContext.Provider
      value={{
        categories,
        products,
        filtered,
        fetchAllData,
        handleFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
