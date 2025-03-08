import React from "react";
import { Person, AddRoad, AddAPhoto, BeachAccess, Bolt } from "@mui/icons-material";

import girlBAW from '../images/girlBAW.jpg'
import boyBAW from '../images/boyBAW.jpg'
import mask from '../images/transparent.jpg'
import { motion } from "framer-motion";


const ImageCard = ({ src, alt, animation }) => (
  <motion.div
    initial={{ opacity: 0, x: animation.x, y: animation.y }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.2 }}
  >
    <img
      className="w-full max-w-xs sm:max-w-sm md:max-w-full h-auto md:h-full 
      max-h-[400px] sm:max-h-[500px] md:max-h-[600px] object-cover rounded-lg shadow-lg mx-auto"
      src={src}
      alt={alt}
      loading="lazy"
    />
  </motion.div>
);

const Aboutus = () => {
  return (
    <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

           {/* Header Section */}

        <div className="text-left">
          <p className="text-green-600 font-medium md:text-lg">About Fashion</p>
          <h2 className="text-2xl md:text-3xl font-semibold mt-2">No One Knew Who I Was Till I Put On a Mask</h2>
          <p className="text-gray-600 mt-4 max-w-2xl">
            We don't live in a world that's black and white. Although humans
            see reality in color, for me black and white has always been
            connected to the image's deeper truth, to its most hidden things.
          </p>
        </div>

        

        {/* Grid Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ImageCard src={girlBAW} alt="Girl in Black and White" animation={{ x: -100, y: 0 }} />
      <ImageCard src={mask} alt="Person wearing a mask" animation={{ x: 0, y: 100 }} />
      <ImageCard src={boyBAW} alt="Boy in Black and White" animation={{ x: 100, y: 0 }} />
    </div>


        </div>
    </section>
  );
};


export default Aboutus;
