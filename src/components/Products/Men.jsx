import Img1 from "../../assets/men/men1.jpg";
import Img2 from "../../assets/men/men2.jpg";
import Img3 from "../../assets/men/men3.jpg";
import Img4 from "../../assets/men/men4.jpg";
import Img5 from "../../assets/men/men5.jpg";
import { FaStar } from "react-icons/fa6";
import PropTypes from "prop-types";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Formal Shirt",
    rating: 5.0,
    color: "Blue",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Casual T-Shirt",
    rating: 4.5,
    color: "Black",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Denim Jeans",
    rating: 4.7,
    color: "Navy Blue",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Leather Jacket",
    rating: 4.4,
    color: "Brown",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Sportswear",
    rating: 4.5,
    color: "Gray",
    aosDelay: "800",
  },
];

const Men = ({ handleOrderPopup }) => {
  return (
    <div id="men" className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Apparel for Men
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Our Men&apos;s Collection
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Discover our range of top-rated men&apos;s clothing, specially curated to add style and comfort to your wardrobe.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleOrderPopup}
              className="text-center mt-10 cursor-pointer bg-primary text-white py-2 px-6 rounded-md hover:scale-[1.02] transition-transform duration-200 focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Men.propTypes = {
  handleOrderPopup: PropTypes.func.isRequired,
};

export default Men;
