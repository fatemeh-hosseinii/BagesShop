import { SwiperSlide } from "swiper/react";

const SliderItem = ({elem}) => {
    return ( <>
  
         
        <img
            src={elem.img}
            className="w-full h-full object-cover"
        />
  
    </> );
}
 
export default SliderItem;