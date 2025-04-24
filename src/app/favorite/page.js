'use client';
import { useShoppingCart } from '@/app/Context/ShoppingCartContext';

const FavoritPage = () => {
  const { favorites, removeFromFavorites } = useShoppingCart();

  return (
    <div className="p-5 text-center">
      <h1 className="text-2xl font-bold mb-6">لیست علاقه‌مندی‌ها</h1>

      {favorites.length === 0 ? (
        <p className="text-gray-500">هیچ محصولی در علاقه‌مندی‌ها وجود ندارد.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
                className="mt-4 text-red-500 hover:text-red-700"
              >
                حذف از علاقه‌مندی‌ها
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritPage;

