import React from "react";
import { BriefcaseIcon } from "@heroicons/react/solid";
import { experiences } from "../data";

const Experience = () => {
  return (
    <section id="experiences" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <BriefcaseIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-2">
            Work Experience
          </h1>
        </div>
        <div className="flex flex-wrap m-4">
          {experiences.map((work) => (
            <div key={work.name} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-400 bg-opacity-40 p-8 rounded">
                <img
                  alt="logos"
                  src={work.image}
                  className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <div className="inline-flex items-center">
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-amber-600 text-shadow sm:text-shadow-sm md:text-shadow-md">
                      {work.name}
                    </span>
                    <span className="text-green-300 text-sm uppercase text-shadow sm:text-shadow-sm md:text-shadow-md ">
                      {work.company}
                    </span>
                    <br />
                    <span className="text-gray-400 text-sm uppercase text-shadow sm:text-shadow-sm md:text-shadow-md">
                      {work.date}
                    </span>
                    <hr />
                    <span className="text-gray-300 text-sm uppercase text-shadow sm:text-shadow-sm md:text-shadow-md">
                      {work.responsibility}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
