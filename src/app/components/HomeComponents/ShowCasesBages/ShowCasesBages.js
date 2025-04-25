import Link from "next/link";
import Container from "../../Container/Containar";

const ShowCasesBages = async() => {
 
  return (
    <>
      <Container>
        <div className=" flex flex-row w-[100%] mt-5">
          <div className="flex flex-col  w-[50%]">
            <div className="flex flex-col justify-center items-center  p-4">
              <img src="Media/start-emotion-box-1.png" alt="" />
              <Link className="mt-3  border-b-[1px]" href="/bages">
                <p>Our new spring arrivals</p>
              </Link>
            </div>
            <div className="flex flex-col justify-center items-center  p-4">
              <img
                src="https://www.welovebags.de/out/pictures/wysiwigpro/start-emotion-box/we-love-bags/start-emotion-box-3.webp"
                alt=""
              />
              <Link className="mt-3  border-b-[1px]" href="/bages">
                <p>Unsere Top Deals</p>
              </Link>
            </div>
          </div>
          <div className=" flex flex-col w-[50%]">
            <div className="flex flex-col justify-center items-center  p-4">
              <img
                src="https://www.welovebags.de/out/pictures/wysiwigpro/start-emotion-box/we-love-bags/start-emotion-box-2.webp"
                alt=""
              />
              <Link className="mt-3  border-b-[1px]" href="/bages">
                <p>Our new spring arrivals</p>
              </Link>
            </div>
            <div className="flex flex-col justify-center items-center  p-4">
              <img
                src="https://www.welovebags.de/out/pictures/wysiwigpro/start-emotion-box/we-love-bags/start-emotion-box-4.webp"
                alt=""
              />
              <Link className="mt-3  border-b-[1px]" href="/bages">
                <p>Our new spring arrivals</p>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ShowCasesBages;
