'use client';
import { useShoppingCart } from '@/app/Context/ShoppingCartContext';
import Link from 'next/link';
import { BsHeartFill,BsHeart } from 'react-icons/bs';

const FavoritPage = () => {
  const { favorites, removeFromFavorites } = useShoppingCart();
  return (
    <div className="p-5 text-center flex flex-col">
      <div className=' flex flex-row justify-center items-center gap-2 '>
       
        <h1 className="text-2xl font-bold ">LIST FAVORIT</h1>
        <BsHeartFill className='text-[red]' size={25}/>

      </div>
        <div className='mt-5'>
          <img className='h-[100%] w-[100%]' src="https://www.vendulalondon.com/media/wysiwyg/Banners/SS25_VENDULA_SANDS_1840x900UK.png" alt="" />
        </div>
        
       

      {favorites.length === 0 ? (
        <div className=' flex flex-col'>
          <p className="text-gray-500">There are no anything </p>
          <div className='flex flex-col gap-3 justify-center items-center w-[100%] mt-20'>
            <BsHeart size={25} className='text-gray-500'/>
            <p className='text-gray-500'>You don’t have items in your list</p>
            <Link className='px-6 border-[1px] border-black text-[black] bg-[white] py-2' href="/">Start Shopping</Link>
                
          </div> 
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 mt-4">
          {favorites.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md p-4 rounded-lg flex flex-col items-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 object-cover mb-3"
              />
              <h2 className="font-semibold text-lg mb-2">{product.name}</h2>
              <p className="text-sm text-gray-600">{product.description}</p>
              <button
                onClick={() => removeFromFavorites(product.id)}
                className="mt-4  px-6 py-1 bg-[#FF0000] text-[white] font-bold"
              >
                Remove From This Page
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritPage;

