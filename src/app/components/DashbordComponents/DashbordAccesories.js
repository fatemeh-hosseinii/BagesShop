"use client"
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const DashbordAccesories = () => {
  const [valuebages, setValuebages] = useState({
    id: "",
    image: "",
    price: "",
    discount: "",
    description: "", 
  });

  const onChangeValue = (e) => {
    const { value, name } = e.target;
    setValuebages({
      ...valuebages,
      [name]: value,
    });
  };

  const handleClick = () => {
    axios({
      method: "POST",
      url: "https://alisab.ir/products",
      data: valuebages,
    })
    .then(() => {
        Swal.fire({
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        setValuebages({
          id: "",
          image: "",
          price: "",
          discount: "",
          description: "",
        });
      })
      
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };
  

  return (
    <div className="flex flex-col shadow-lg justify-center items-center mt-5 p-4">
        <h2 className="text-[#EF7777] text-left text-[24px] font-bold">
            Create <span className="text-[#FF00BF]">Product</span> For Bages:
        </h2>
        <div className="flex flex-row justify-between mt-4 w-full">
            <input
                onChange={onChangeValue}
                name="price"
                className="w-[30%] border-2 border-gray-300 outline-0 p-2"
                placeholder="Enter Price"
                type="text"
                value={valuebages.price}
            />
            <input
                onChange={onChangeValue}
                name="discount"
                className="w-[30%] border-2 border-gray-300 outline-0 p-2"
                placeholder="Enter Discount"
                type="text"
                value={valuebages.discount}
            />
            <input
                onChange={onChangeValue}
                name="image"
                className="w-[30%] border-2 border-gray-300 outline-0 p-2"
                placeholder="Enter Image URL"
                type="text"
                value={valuebages.image}
            />
        </div>
        <textarea
            onChange={onChangeValue}
            name="description"
            value={valuebages.description}
            className="mt-3 border-2 border-gray-300 outline-0 w-[50%] p-2"
            placeholder="Description"
        />
        <button
            onClick={handleClick}
            className="px-6 bg-green-600 py-2 w-[8%] mt-3 text-white font-bold rounded-md hover:bg-green-700"
        >
            Submit
        </button>
    </div>

  );
};

export default DashbordAccesories;
