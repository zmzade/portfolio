import React from "react";
import "animate.css";
import heroImg from "../assets/zahra.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-3 py-5 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="container mx-auto  flex md:flex-row flex-col">
            <img
              className="object-cover object-center w-full h-full animate__animated animate__rotateIn animate__slow"
              alt="hero"
              src={heroImg}
            />

            <div className="absolute m-10 ">
              <h1 className="title-font sm:text-4xl text-lg sm:mb-4 font-medium text-gray-900 animate__animated animate__fadeInTopLeft animate__slow animate__delay-2s">
                Hi, I'm Zahra.
                <br className="hidden lg:inline-block" />I love to build amazing
                web pages.
              </h1>
            </div>
          </div>
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4 mt-8 animate__animated animate__flash animate__slow animate__delay-4s">
            From human language to computer language
          </h1>
          <p className="mb-8 leading-relaxed text-white">
            I'm a Frontend Developer with more than 15 years background as a
            researcher and lecturer in linguistics at the Iranian Ministry for
            Science, Research & Technology. As a phonetician, I did different
            researches and cooperated in projects that targeted language's
            issues and challenges in speech technologies. After moving to
            Denmark in 2018 with my family I decided to switch career and focus
            further on my passion for technology and computer languages too by
            attending a Web Development bootcamp and starting a career as a
            Junior Frontend Developer. My journey started with attending
            HackYourFuture Copenhagen, where I did different projects and got
            experience working with different technologies. It is so amazing
            that I learned coding and am able to develop and build beautifull
            web pages. Besides my passion for coding, I like to run, plant and
            watch movies in my free time.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
