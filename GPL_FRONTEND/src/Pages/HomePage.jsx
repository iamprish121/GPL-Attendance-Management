import React from "react";
import { Link } from "react-router-dom";
import site from "../assets/siteview.png";

function HomePage() {
  return (
    <>
      <div className="container mx-auto px-3">
        <div className="flex flex-col items-center md:mt-20 mt-16">
          <p className="sm:text-7xl text-5xl font-bold leading-tight text-white text-center sm:leading-tight lg:leading-tight">
            <span className="relative inline-flex sm:inline">
              <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
              <span className="relative">Attendance</span>
            </span>{" "}
            Ease
          </p>
          <p className="text-gray-400 text-center mt-4 text-md md:text-xl max-w-2xl font-medium">
            Let's Make Attendance System smart and convenient with the help of a GPS based Attendance Management System
          </p>
          <div className="flex items-center space-x-2">
            <Link
              to="/class-form"
              className="px-8 h-12 flex items-center text-lg text-white bg-blue-600 rounded-lg font-semibold mt-4 hover:bg-blue-700 transition-all duration-200"
            >
              Get Started
            </Link>
            {/* <a
              href="https://github.com/sponsors/AKACHI-4"
              target="_blank"
              className="px-8 h-12 flex items-center text-lg text-white bg-white/10 rounded-lg font-semibold mt-4 hover:bg-white/5 transition-all duration-200"
            >
              Sponsor ❤️
            </a> */}
          </div>

          {/* <div className="mt-7">
            <a
              href="https://www.producthunt.com/posts/readmi?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-readmi"
              target="_blank"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=367072&theme=dark"
                alt="Readmi - Github&#0032;Readme&#0032;builder&#0046;&#0032;Create&#0032;your&#0032;readme&#0032;in&#0032;no&#0032;time | Product Hunt"
                width="250"
                height="54"
              />
            </a>
          </div> */}

          <div className="mt-28 mb-10 relative border border-gray-700 rounded-lg">
            <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <img className="transform " src={site} alt="demo" />
          </div>
        </div>

        <div className="flex justify-center my-12">
          <p className="text-center text-white text-xl font-medium">
            <a>
              @Copyright
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
