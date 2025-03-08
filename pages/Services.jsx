import React from "react";
import { Person, AddRoad, AddAPhoto, BeachAccess, Bolt } from "@mui/icons-material";

const Services = () => {
  return (
    <section className="bg-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-left">
          <p className="text-green-600 font-medium md:text-lg">About Services</p>
          <h2 className="text-2xl md:text-3xl font-semibold mt-2">
            Everthing is designed...Designed can be art
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl">
          Don't change to fit the fashion, change the fashion to fit you
          "Bad design is smoke, while good design is a mirror"
          </p>
        </div>

        {/* Grid Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Column 1 */}
          <div className="grid gap-6 lg:translate-y-14">
            <Card icon={<AddRoad />} title="RunWay Isle" />
            <Card title="Membership Management" />
          </div>

          {/* Column 2 */}
          <div className="grid gap-6">
            <Card icon={<Person />} title="Models Management" />
            <Card icon={<AddAPhoto />} title="Add Gallery" />
          </div>

          {/* Column 3 */}
          <div className="grid gap-6 lg:translate-y-20">
            <Card icon={<BeachAccess />} title="Social Gathering" />
            <Card icon={<Bolt />} title="Revolt Bolt" />
          </div>

        </div>
      </div>
    </section>
  );
};

/* Reusable Card Component */

const Card = ({ icon, title }) => {
  return (
    <div className="bg-white border border-gray-300 shadow-md rounded-md p-6 flex flex-col items-start">
      {icon && <div className="text-gray-600">{icon}</div>}
      <h4 className="mt-3 text-lg font-semibold">{title}</h4>
      <p className="text-gray-600 mt-2 text-sm">
        Fashion is more art than art is...Fashion is very important It is life-enhancing and, like 
        everything and, like everything that gives pleasure, it is worth doing well
      </p>
    </div>
  );
};

export default Services;
