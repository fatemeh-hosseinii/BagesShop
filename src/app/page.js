import BannerOne from "./components/HomeComponents/Brand/BanerOne";
import Brand from "./components/HomeComponents/Brand/Brand";
import CommunicateShop from "./components/HomeComponents/Comminucation/CommunicateShop";
import Showaccesory from "./components/HomeComponents/Showaccesory/Showaccesory";
import ShowCasesBages from "./components/HomeComponents/ShowCasesBages/ShowCasesBages";
import Slider from "./components/HomeComponents/Slider/Slider";

export default function Home() {
  return (
    <div className="">
     <Slider/>
     <Brand/>
     <ShowCasesBages/>
     <Showaccesory/>
     <CommunicateShop/>
     <BannerOne/>

    </div>
  );
}
