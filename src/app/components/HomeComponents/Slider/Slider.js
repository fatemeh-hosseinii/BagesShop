'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Container from "../../Container/Containar";
import SliderItem from "./SliderItem";

const Slider = () => {
  const data=[
    {
      id:1,
      img:"https://www.welovebags.de/out/pictures/promo/startseitenbanner-sale(2).webp"
    },
    {
      id:2,
      img:"https://www.welovebags.de/out/pictures/promo/startseitenbanner_lazarotti(20).jpg"
    },
    {
      id:3,
      img:"https://www.welovebags.de/out/pictures/promo/startseitenbanner_tedbaker-pm(4).webp"
    },
    {
      id:4,
      img:"https://www.welovebags.de/out/pictures/promo/startseitenbanner_replay(1).webp"
    }
  ]
  return (
    <Container>
 <div className="w-full p-5 ">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="md:w-[80%] w-[100%] h-[60vh]"
      >
        {
          data.map((elem)=>{
            return  <SwiperSlide
            key={elem.id}
            className="md:w-64 w-[100%] h-64 rounded-2xl overflow-hidden shadow-lg"
          >
           <SliderItem elem={elem}/>
          </SwiperSlide>
         
          })
        }
      </Swiper>
    </div>
    </Container>
   
  );
};

export default Slider;
