import React from "react";
import { SubHeading } from "./subcomponents/SubHeading";
import { howItIs } from "@/consts";

export const HowIsItGoing = () => {
  return (
    <div
      id="how-is-it-going"
      className=" flex-col items-center justify-center gap-8 md:flex hidden"
    >
      <SubHeading
        heading="How it is going?"
        body=" We offer professional web design services at affordable rates to
            help your business attract more visitors and keep them on
            your site!"
      />
      <div className="flex flex-wrap justify-center items-center gap-12 mb-8">
        {howItIs.map((card) => {
          const { title, number, body } = card;
          return (
            <div className="mb-8 relative before:absolute before:bottom-[-10px] before:w-4/12 before:border-2 before:border-[#C4C4C480] ">
              <h3 className=" mb-4 font-bold text-[20px] leading-[25px]">
                {title}
              </h3>
              <p className="w-[50ch] relative text-[18px] leading-[24.3px] font-light ">
                {body}
                <span className=" absolute top-[-35px] right-[-35px] text-[80px] leading-[108px] font-bold text-[#0669F714]">
                  {number}
                </span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
