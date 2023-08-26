import { Button } from "@/components/ui/button";
import { productsArray } from "@/consts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PortfolioPage = () => {
  return (
    <>
      <section className="flex flex-col gap-12 max-w-7xl m-auto my-8">
        <div className="flex flex-col gap-4">
          <h3 className=" pl-8 text-[18px] text-[#0669F7]">OUR WORK</h3>
          <h1 className=" pl-4 text-[35px] font-bold leading-[50px]">
            Amazing things come from <br /> collaboration. Browse our <br />
            selected work.
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {productsArray.map((product, index) => {
            const { img, title, type, link } = product;
            const isEven = index % 2 === 0;
            const marginTop = !isEven ? "mt-8" : ""; // Use "mt-8" for 2rem margin

            return (
              <Link href={link} key={index} className={marginTop}>
                <div
                  className={`bg-white p-4 rounded-lg shadow-md ${marginTop}`}
                >
                  <Image
                    src={img}
                    width={580}
                    height={580}
                    alt="product-image"
                    className="w-full"
                  />
                  <h4 className="text-xl font-bold mt-2">{title}</h4>
                  <h4 className="text-base font-light">{type}</h4>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <section className=" text-white w-full p-24 bg-[#0669F7] flex flex-col justify-center items-center text-center">
        <h2 className=" text-[55px] leading-[69.57px] font-bold">
          Let's make something <br /> amazing together.
        </h2>
        <p className="px-24 py-12">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <Button
          className=" w-fit px-4 text-[20px] leading-[25.3px] font-bold"
          variant={"outline"}
        >
          <Link href="/contact-us">Contact us</Link>
        </Button>
      </section>
    </>
  );
};

export default PortfolioPage;
