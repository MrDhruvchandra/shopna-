import Img1 from "../../assets/sari/saree1.jpg";
import Img2 from "../../assets/sari/saree2.jpg";
import Img3 from "../../assets/sari/saree3.jpg";
import Img4 from "../../assets/sari/saree4.jpg";
import Img5 from "../../assets/sari/saree5.jpg";
import { FaStar } from "react-icons/fa6";
import PropTypes from "prop-types";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Elegant Silk Saree",
    rating: 5.0,
    color: "Gold",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Traditional Cotton Saree",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Designer Georgette Saree",
    rating: 4.7,
    color: "Green",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed Chiffon Saree",
    rating: 4.4,
    color: "Blue",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Casual Wear Saree",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];

const Saari = ({ handleOrderPopup }) => {
  return (
    <div id="saari" className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Sarees for Women
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Our Saree Collection
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Explore our range of top-rated sarees, specially curated to add elegance and style to your wardrobe.
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
              View All Sarees
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Saari.propTypes = {
  handleOrderPopup: PropTypes.func.isRequired,
};

export default Saari;
