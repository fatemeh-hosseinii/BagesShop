"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import FilterShop from "../components/FilterShop/FilterShop";
import FavoriteAccesory from "../components/HomeComponents/FavoriteAccesory/FavoriteAccesory";

const ProductsPage = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
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

    fetchData();
  }, []);

  const handleFilter = (selectedId) => {
    if (selectedId === 0) {
      setFiltered(products);
    } else {
      const result = products.filter((item) => item.category_id === selectedId);
      setFiltered(result);
    }
  };

  return (
    <div className="w-[100%] flex flex-row mt-5 ">
      {/* ستون سمت راست: فیلتر */}
      <div className="w-[25%] flex flex-col p-3 h-[80vh] bg-gray-200 shadow-lg rounded-lg mt-3">
        <p className="text-[22px] mb-4 text-[#000000]">Accesory</p>
        <FilterShop categories={categories} onFilter={handleFilter} />
      </div>

      {/* ستون چپ: نمایش محصولات فیلتر شده */}
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
              <FavoriteAccesory product={elem}/>
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
    </div>
  );
};

export default ProductsPage;
