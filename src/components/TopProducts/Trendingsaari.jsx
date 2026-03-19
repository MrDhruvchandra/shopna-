import SariImg1 from "../../assets/sari/saree1.jpg";
import SariImg2 from "../../assets/sari/saree2.jpg";
import SariImg3 from "../../assets/sari/saree3.jpg";
import SariImg4 from "../../assets/sari/saree4.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { FaStar } from "react-icons/fa6";

const sariData = [
  {
    id: 1,
    img: SariImg1,
    title: "Elegant Silk Saree",
    rating: 5.0,
    description: "Gold",
  },
  {
    id: 2,
    img: SariImg2,
    title: "Traditional Cotton Saree",
    rating: 4.5,
    description: "Red",
  },
  {
    id: 3,
    img: SariImg3,
    title: "Designer Georgette Saree",
    rating: 4.7,
    description: "Green",
  },
  {
    id: 4,
    img: SariImg4,
    title: "Printed Chiffon Saree",
    rating: 4.4,
    description: "Blue",
  },
];

const TrendingSarees = () => {
  return (
    <div id="trending" className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* Image section */}
          <div data-aos="zoom-in">
            {sariData.map((sari) => (
              <img
                key={sari.id}
                src={sari.img}
                alt={sari.title}
                className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover mb-6"
              />
            ))}
          </div>

          {/* Text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              Trending Sarees
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5"
            >
              Explore our latest collection of trending sarees. Find the perfect saree for any occasion with exclusive designs and amazing offers.
            </p>
            <div className="flex flex-col gap-4">
              {sariData.map((sari) => (
                <div key={sari.id} data-aos="fade-up" className="flex items-center gap-4">
                  <FaStar className="text-yellow-400 text-2xl" />
                  <div>
                    <p className="font-semibold">{sari.title}</p>
                    <p className="text-sm text-gray-600">{sari.description}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span>{sari.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Quality Products</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Fast Delivery</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Easy Payment Methods</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p>Exclusive Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingSarees;
