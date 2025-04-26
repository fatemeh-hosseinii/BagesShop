"use client"
import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const PostBages = () => {
  const [valuebages, setValuebages] = useState({
    image: "",
    price: "",
    discount: ""

  });

  const [bagesList, setBagesList] = useState([]);

  const onChangeValue = (e) => {
    const { value, name } = e.target;
    setValuebages({
      ...valuebages,
      [name]: value,
    });
  };

  const getBages = () => {
    axios.get("http://localhost:3004/bages")
      .then((response) => {
        setBagesList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleClick = () => {
    axios.post("http://localhost:3004/bages", valuebages)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        setValuebages({
          id: valuebages.id,
          image: valuebages.image,
          price: valuebages.price,
          discount: valuebages.discount,
        });
        getBages(); 
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

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3004/bages/${id}`)
          .then(() => {
            Swal.fire(
              'Deleted!',
              'Your product has been deleted.',
              'success'
            );
            getBages(); 
          })// بعد از حذف، لیست جدید بگیر
          .catch((error) => {
            console.error(error);
            Swal.fire(
              'Error!',
              'Something went wrong while deleting.',
              'error'
            );
          });
      }
    });
  };

  useEffect(() => {
    getBages();
  }, []);

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

      <div className="w-full mt-8">
        <h3 className="text-[22px] font-bold mb-4 text-[#333]">Products List</h3>
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 p-2">Price</th>
              <th className="border border-gray-300 p-2">Discount</th>
              <th className="border border-gray-300 p-2">Image</th>
              <th className="border border-gray-300 p-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {bagesList.map((item) => (
              <tr key={item.id}>
                <td className="border border-gray-300 p-2 text-center">{item.price}</td>
                <td className="border border-gray-300 p-2 text-center">{item.discount}</td>
                <td className="border border-gray-300 p-2 text-center">
                  <img src={item.image} alt="product" className="w-20 h-20 object-cover mx-auto" />
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-600 px-4 py-1 text-white font-bold rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostBages;
