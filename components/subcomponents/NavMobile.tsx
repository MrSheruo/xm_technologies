"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const NavMobile = () => {
  const [isToggeled, setIsToggeled] = useState(false);
  const handleClickFunction = () => {
    setIsToggeled((prev) => !prev);
  };
  return (
    <div id="small-screens" className="flex sm:hidden">
      {isToggeled ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
            onClick={handleClickFunction}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>

          <section className=" absolute top-0 bottom-0 left-0 w-[75%] h-full bg-[#00142D] z-[10000000] flex flex-col gap-4 pl-4 pt-4  text-white">
            <Image
              alt="logo"
              src="/logo.svg"
              className=" mb-4"
              width={75}
              height={45}
            />

            <Link className=" hover:text-[#197FFC]" href="/services">
              Services
            </Link>
            <Link className=" hover:text-[#197FFC]" href="/portfolio">
              Portfolio
            </Link>
            <Link className=" hover:text-[#197FFC]" href="/about-us">
              About us
            </Link>
            <Link className=" hover:text-[#197FFC]" href="/jobs">
              Jobs
            </Link>
          </section>
        </>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
          onClick={handleClickFunction}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      )}
    </div>
  );
};
