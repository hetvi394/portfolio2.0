import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import Image from 'next/image';
import { CardContainer, CardItem } from '../components/ui/3d-card';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from "react-icons/fa";
import { CiLinkedin, CiInstagram } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative h-screen w-screen  overflow-hidden">
      {/* Background and Spotlights */}
      <div className="absolute top-0 left-0 h-full w-full">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 ms:-top-20 h-screen"
          fill="black"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>
      {/* Overlay */}
      <div className="absolute top-0 left-0 h-full w-screen flex items-center justify-center dark:bg-black-100 bg-white dark:bg-grid-white/[0.06] bg-grid-black/[0.2]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center space-y-6 max-w-[90vw] md:max-w-2xl lg:max-w-3xl text-center">
            <TextGenerateEffect
              className="text-[40px] md:text-5xl lg:text-5xl font-extrabold"
              words="Welcome to My Portfolio!"
            />

            <p className="text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-200">

              Discover the Beauty of My Designs
            </p>

            <a href="/hetvi%20shah.pdf" download="hetvi shah.pdf">
              <MagicButton
                title="Download CV"
                icon={<FaLocationArrow />}
                position="right" />
            </a>

            <div className="flex space-x-4">
              <a href="https://github.com/hetvi394" target='_black' className="  text-white">
                <CiLinkedin className="text-4xl" />
              </a>
              <a href="https://github.com/hetvi394" target='_black' className="  text-white ">
                <FaGithub className="text-4xl" />
              </a>
            </div>

            {/* Optional Image */}
            {/* Uncomment this section if you want to include the image */}
            {/* <CardContainer className="flex-shrink-0 mt-10">
              <CardItem
                translateZ="50"
                className="w-60 h-96 pb-10 pr-28"
              >
                <Image
                  src="/3d-delivery-robot-working.jpg"
                  height={256}
                  width={256}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-300"
                  alt="thumbnail"
                />
              </CardItem>
            </CardContainer> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
