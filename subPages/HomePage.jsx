import { motion } from "framer-motion";
import coverFashion from "../images/coverfashion.jpg";

const HomePage = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      {/* Container with full height */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-16 pt-20 md:pt-24 pb-16">
        
        {/* Left Section - Text */}
        <motion.div
          initial={{ opacity: 0, translateX: 100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Concept of{" "}
            <span className="text-green-600 font-cursive">FASHION</span> & Fashionistas
          </h1>

          <p className="mt-4  sm:text-md md:text-lg font-serif">
            "Dress shabbily and they remember the dress; dress impeccably and
            they notice the woman."
            <br />
            "Fashion is life-enhancing and, like everything that gives
            pleasure, it is worth doing well."
          </p>

          <p className="mt-4 text-base md:text-lg font-mono">
            Don't just stand out, stand in style...
          </p>
        </motion.div>

        {/* Right Section - Responsive Image */}
        <motion.div
          initial={{ opacity: 0, translateX: -100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex justify-center"
        >
          <motion.img
            src={coverFashion}
            alt="A stylish fashion cover featuring modern trends"
            className="w-full max-w-xs sm:max-w-sm md:max-w-full h-auto md:h-full max-h-[400px] sm:max-h-[500px] md:max-h-[600px] object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
