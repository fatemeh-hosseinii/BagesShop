import Link from "next/link";
import Container from "../../Container/Containar";

const CommunicateShop = () => {
  const imgCommunicate = {
    communicate: [
      {
        id: 1,
        image:
          "https://cdn.childrensalon.com/media/cms/r/e/reviews-9sznmim3jnk0kwswwk0gsgkwo-9sznmim3jnk0kwswwk0gsgkwo.svg",
        description:
          "Access your wishlist and the latest arrivals in our app. Also available for Android.",
        title: "Download the app",
      },
      {
        id: 2,
        image:
          "https://cdn.childrensalon.com/media/cms/c/a/carbon-offset-icon-1-7mqwxvtr8z8c80cc0o8k4k4ko.svg",
        description:
          "We offset all our carbon emissions to support a greener future.",
        title: "Learn more",
      },
      {
        id: 3,
        image:
          "https://cdn.childrensalon.com/media/cms/c/u/customer-service-icon-a75k764xh08c8ow8ck4ks0004.svg",
        description:
          "Have questions? Our customer service team is here to help you.",
        title: "Learn more",
      },
      {
        id: 4,
        image:
          "https://cdn.childrensalon.com/media/cms/f/a/family-oo35yg503zkoow4sckws4cgc-oo35yg503zkoow4sckws4cgc.svg",
        description:
          "Fast & flexible delivery options. Easy returns available.",
        title: "Delivery & Returns",
      },
    ],
  };

  return (
    <Container>
      <div className="w-full bg-pink-100 rounded-3xl py-10 px-4 mt-12 shadow-md">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-pink-600">
          Nice to meet you ...
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 max-w-6xl mx-auto">
          {imgCommunicate.communicate.map((elem) => (
            <div
              key={elem.id}
              className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-lg transition duration-300"
            >
              <img
                src={elem.image}
                alt="image"
                className="w-14 h-14 mb-4"
              />
              <p className="text-sm text-gray-600 mb-4">{elem.description}</p>
              <Link
                href="#"
                className="text-pink-600 font-semibold text-sm hover:underline"
              >
                {elem.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default CommunicateShop;
