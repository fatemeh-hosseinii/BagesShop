import Link from "next/link";
import Container from "../../Container/Containar";
import FavoriteAccesory from "../FavoriteAccesory/FavoriteAccesory";

const Showaccesory = async () => {
  const response = await fetch("https://alisab.ir/products");
  const data = await response.json();

  return (
    <Container>
      <div className="flex flex-col items-center mt-16 px-4">
        <h2 className="text-4xl  text-pink-600 mb-10 font-bold drop-shadow-md">
          AccessoryParlly
        </h2>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {data.map((elem, index) => (
            <div
              key={index}
              className="bg-gradient-to-tr from-pink-50 via-pink-100 to-pink-50
                         rounded-3xl shadow-xl p-6 flex flex-col justify-between
                         hover:scale-[1.05] hover:shadow-2xl transition-transform duration-500 ease-in-out"
            >
              <Link
                href={`/productsAccesory/${elem.id}`}
                className="block w-full h-[220px] rounded-2xl overflow-hidden mb-5 border border-pink-200
                           shadow-inner hover:shadow-pink-300 transition-shadow duration-300"
              >
                <img
                  src={elem.image}
                  alt={elem.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </Link>

              <div className="flex justify-between items-center mb-3">
                <p className="text-lg font-semibold text-pink-700 truncate max-w-[70%] font-mono">
                  {elem.name}
                </p>
                <FavoriteAccesory product={elem} />
              </div>

              <p className="text-sm text-pink-600 mb-5 line-clamp-3 leading-relaxed">
                {elem.description}
              </p>

              <div className="flex justify-between items-center">
                <p className="font-bold text-xl text-pink-800 tracking-wide">
                  ${elem.price}
                </p>
                <div className="bg-pink-600 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-lg">
                  {elem.discount}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Showaccesory;
