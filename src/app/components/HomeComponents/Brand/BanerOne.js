import Link from "next/link";
import Container from "../../Container/Containar";

const BannerOne = () => {
  const imageUrl =
    "https://omybagamsterdam.com/cdn/shop/collections/Crossbody-Bags_Collection-Header_Jan25.jpg?v=1739393417&width=1920";

  return (
    <Container>
      <div className="relative flex flex-col md:flex-row items-stretch rounded-3xl overflow-hidden shadow-xl mt-10 bg-white">
        {/* Left Image (Large) */}
        <div className="md:w-3/5 w-full">
          <img
            src={imageUrl}
            alt="Banner"
            className="w-full h-full object-cover brightness-95"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-2/5 w-full flex flex-col justify-center px-10 py-12 bg-pink-50">
          <span className="uppercase text-pink-400 tracking-widest text-sm mb-3">
            new arrivals
          </span>
          <h2 className="text-4xl font-bold text-pink-600 leading-snug mb-4">
            Bold, Beautiful, <br /> Just Arrived.
          </h2>
          <p className="text-gray-600 mb-6">
            Step into the season with our latest fashion-forward pieces that blend elegance and comfort.
          </p>
          <Link
            href="#"
            className="inline-block bg-pink-600 text-white py-3 px-8 rounded-full text-sm font-medium hover:bg-pink-700 transition"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default BannerOne;
