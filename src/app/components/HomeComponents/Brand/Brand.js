'use client';

import Container from "../../Container/Containar";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination} from 'swiper/modules';

const Brand = () => {
  const brands = [
    {
      id: 1,
      img: "https://www.welovebags.de/out/pictures/master/manufacturer/icon/joop.svg"
    },
    {
      id: 2,
      img: "https://www.welovebags.de/out/pictures/master/manufacturer/icon/guess.svg"
    },
    {
      id: 3,
      img: "https://www.welovebags.de/out/pictures/master/manufacturer/icon/shopswfurla.svg"
    },
    {
      id: 4,
      img: "https://www.welovebags.de/out/pictures/master/manufacturer/icon/shopswdkny.svg"
    },
    {
      id: 5,
      img: "https://www.welovebags.de/out/pictures/master/manufacturer/icon/coccinelle.svg"
    },
    {
      id: 6,
      img: "https://www.welovebags.de/out/pictures/master/manufacturer/icon/shopswcoach.svg"
    },
    {
        id: 7,
        img: "https://www.welovebags.de/out/pictures/master/manufacturer/icon/joop.svg"
      },
      {
        id: 8,
        img: "https://www.welovebags.de/out/pictures/master/manufacturer/icon/guess.svg"
      },
      {
        id: 9,
        img: "https://www.welovebags.de/out/pictures/master/manufacturer/icon/shopswfurla.svg"
      },
      {
        id: 10,
        img: "https://www.welovebags.de/out/pictures/master/manufacturer/icon/shopswdkny.svg"
      },
      {
        id: 11,
        img: "https://www.welovebags.de/out/pictures/master/manufacturer/icon/coccinelle.svg"
      },
      {
        id: 12,
        img: "https://www.welovebags.de/out/pictures/master/manufacturer/icon/shopswcoach.svg"
      }
  ];

  return (
    <div className="bg-[#ffacba] py-5">
      <Container>
        <h2 className="text-white text-2xl font-bold mb-6 text-center">Our Brands</h2>
        <Swiper
        
        //   centeredSlides={true}
        //   autoplay={{
        //     delay: 2500,
        //     disableOnInteraction: false,
        //   }}
        //   modules={[ Autoplay]}
          className="w-full max-w-6xl mx-auto"
          breakpoints={{
            320: { slidesPerView: 3, spaceBetween: 10 },
            640: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 30 },
          }}
        >
          {brands.map((brand) => (
            <SwiperSlide key={brand.id}>
              <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md h-28">
                <img src={brand.img} alt={`Brand ${brand.id}`} className="max-h-16 object-contain" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Brand;
