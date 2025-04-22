import Brand from "./components/HomeComponents/Brand/Brand";
import Showaccesory from "./components/HomeComponents/Showaccesory/Showaccesory";
import ShowCases from "./components/HomeComponents/ShowCasesBages/ShowCasesBages";
import Slider from "./components/HomeComponents/Slider/Slider";

export default function Home() {
  return (
    <div className="">
     <Slider/>
     <Brand/>
     <ShowCases/>
     <Showaccesory/>

    </div>
  );
}
