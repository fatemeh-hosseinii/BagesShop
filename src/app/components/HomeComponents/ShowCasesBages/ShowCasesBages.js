import Link from "next/link";
import Container from "../../Container/Containar";

const ShowCasesBages = async () => {
  const badges = [
    {
      id: 1,
      img: "Media/start-emotion-box-1.png",
      text: "Our new spring arrivals",
      href: "/bages",
    },
    {
      id: 2,
      img: "https://www.welovebags.de/out/pictures/wysiwigpro/start-emotion-box/we-love-bags/start-emotion-box-3.webp",
      text: "Unsere Top Deals",
      href: "/bages",
    },
    {
      id: 3,
      img: "https://www.welovebags.de/out/pictures/wysiwigpro/start-emotion-box/we-love-bags/start-emotion-box-2.webp",
      text: "Our new spring arrivals",
      href: "/bages",
    },
    {
      id: 4,
      img: "https://www.welovebags.de/out/pictures/wysiwigpro/start-emotion-box/we-love-bags/start-emotion-box-4.webp",
      text: "Our new spring arrivals",
      href: "/bages",
    },
  ];

  return (
    <Container>
      <div className="mt-10 w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {badges.map(({ id, img, text, href }) => (
            <div
              key={id}
              className="flex flex-col items-center bg-pink-50 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <img
                src={img}
                alt={text}
                className="w-full h-56 object-cover rounded-lg mb-5 transform hover:scale-105 transition-transform duration-300"
              />
              <Link href={href}>
                <p className="text-lg font-semibold text-pink-600 border-b-2 border-transparent hover:border-pink-400 transition-colors duration-300">
                  {text}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ShowCasesBages;
