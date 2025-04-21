import Brand from "./components/HomeComponents/Brand/Brand";
import ShowCases from "./components/HomeComponents/ShowCases/ShowCases";
import Slider from "./components/HomeComponents/Slider/Slider";

export default function Home() {
  return (
    <div className="">
     <Slider/>
     <Brand/>
     <ShowCases/>
    </div>
  );
}
