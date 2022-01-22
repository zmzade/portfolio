import React from "react";
import { BriefcaseIcon } from "@heroicons/react/solid";
import { experiences } from "../data";

const Experience = () => {
  return (
    <section id="experiences">
      <div className="container px-5 py-10 mx-auto text-center">
        <BriefcaseIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Work Experience
        </h1>
        <div className="flex flex-wrap m-4">
          {experiences.map((work) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <div className="inline-flex items-center">
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {work.name}
                    </span>
                    <span className="text-gray-300 text-sm uppercase">
                      {work.company}
                    </span>
                    <br />
                    <span className="text-gray-500 text-sm uppercase">
                      {work.date}
                    </span>
                    <hr />
                    <span className="text-gray-500 text-sm uppercase">
                      {work.work}
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
