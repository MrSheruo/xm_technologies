import { Button } from "@/components/ui/button";
import { productsArray } from "@/consts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = ({ params }: { params: { name: string } }) => {
  const product = productsArray.filter(
    (product) => product.name === params.name
  );
  const { name, link, img, title, body, type }: any = product[0];
  console.log(product);

  return (
    <section className="everyFlex p-4 my-8 text-center sm:flex-row max-w-7xl m-auto">
      <Image
        src={img}
        height={580}
        width={580}
        alt="Product-Image"
        className=""
      />
      <div className="everyFlex gap-4">
        <h1 className=" text-3xl font-bold">{title}</h1>
        <h3 className=" font-light">{type}</h3>
        <p className="">{body}</p>
        <Button className=" w-fit p-6 bg-[#0669F7] hover:bg-[#345f9c] ">
          <Link href="/contact-us">Buy This Service</Link>
        </Button>
      </div>
    </section>
  );
};

export default page;
