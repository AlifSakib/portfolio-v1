import React from "react";
import image1 from "../../assets/project-1/Image-1.png";
import image2 from "../../assets/project-1/Image-2.png";
import image3 from "../../assets/project-1/Image-3.png";
import image4 from "../../assets/project-1/Image-4.png";
import image5 from "../../assets/project-1/Image-5.png";
import image6 from "../../assets/project-1/Image-6.png";
import GoBack from "../Items/GoBack";
const DetailsOne = () => {
  return (
    <div className="bg-[#F9F7F7] h-screen font-Inconsolata">
      <div className="pt-10 px-10">
        <GoBack></GoBack>
      </div>
      <section className="text-gray-600 body-font bg-[#F9F7F7] ">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
              LozzyBy - A Used Product Resale Website
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              The project is built with React, tailwindCss , MongoDB, Node ,
              Express . I tried to build a fullstack website with neat and clean
              user interface and smooth user interface . In this project i
              implemented private route for category page , handled registration
              and login using firebase authentication, created dynamic route for
              category pages , created dashboard for user/seller and admin and
              secured all the routes using jwt authorization . Used loader for a
              better experience , used custom hooks.
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2 shadow-lg">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={image1}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2 shadow-lg">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={image4}
                />
              </div>
              <div className="md:p-2 p-1 w-full shadow-lg">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src={image3}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full shadow-lg">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src={image2}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2 shadow-lg">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={image5}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2 shadow-lg">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={image6}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailsOne;
