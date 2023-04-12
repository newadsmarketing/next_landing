import Image from "next/future/image"

import { IProps } from "./types";

import rectangle_1 from "../../assets/Rectangle_1.png";
import rectangle_2 from '../../assets/Rectangle_2.png'; 

export const Hero = ({ 
  appType, 
  tagLine, 
  description, 
  mainActionText, 
  extraActionText }: IProps) => {
  return (
    <main id="product">
      <section
        style={{textShadow: "0px 1px 1px gray"}}
        className="flex flex-col items-center justify-start font-sans min-h-96 bg-gray-50 lg:pt-10 lg:pb-20 lg:bg-hero lg:bg-cover"
      >
        <div>
          <p className="p-3 pt-12 text-lg font-bold text-gray-500 lg:text-gray-300">
            {appType}
          </p>
        </div>

        <div>
          <p className="p-3 text-4xl font-bold text-center text-blue-800 lg:mx-auto lg:w-4/6 lg:text-5xl lg:text-gray-100">
            {tagLine}
          </p>
        </div>

        <div>
          <p className="p-4 pt-12 font-sans text-2X1 leading-10 text-center text-gray-500 lg:text-gray-200">
            {description}
          </p>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-between h-48 lg:space-x-8 pt-7 lg:pt-0 lg:flex-row lg:justify-between lg:w-90">
          <a href="https://noonoo44.tv" target="_blank">
          <button className="pt-3 pb-3 pl-12 pr-12 text-2xl font-semibold text-center text-white transition-all bg-orange-600 rounded-full shadow-2xl lg:ml-5 hover:bg-orange-700 focus:outline-none ring-4 ring-orange-600 lg:ring-2 lg:font-medium">
            {mainActionText}
          </button>
          </a>
          <a href="https://noonoo44.tv" target="_blank">
          <button className="pt-3 pb-3 text-2xl font-semibold text-center text-orange-500 transition-all rounded-full shadow-2xl lg:mr-5 hover:text-orange-500 hover:bg-gray-50 pl-11 pr-11 bg-gray-50 focus:outline-none ring-4 ring-orange-500 lg:font-medium lg:text-gray-50 lg:bg-opacity-0 lg:ring-2 lg:ring-white">
            {extraActionText}
          </button>
          </a>
        </div>
      </section>

      <div className="z-0 flex flex-row items-start justify-center w-screen h-screen pt-20 -mb-16 bg-gray-50 lg:bg-white lg:mb-20 lg:w-full lg:h-96 lg:pt-0">
        <Image 
          src={rectangle_1} alt="phone-1"
          className="absolute left-0 lg:left-auto lg:-mt-64" 
        />
        <Image 
          src={rectangle_2} alt="phone-2"
          className="absolute right-0 lg:right-auto lg:ml-24 lg:-mt-16" 
        />
      </div>
    </main>
  );
};