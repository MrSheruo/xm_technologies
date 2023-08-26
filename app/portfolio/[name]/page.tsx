import { productsArray } from "@/consts";
import Image from "next/image";
import React from "react";

const page = ({ params }: { params: { name: string } }) => {
  const product = productsArray.filter(
    (product) => product.name === params.name
  );
  const { name, link, img, title, body, type }: any = product[0];
  console.log(product);

  return (
    <section className="everyFlex p-4 my-8 text-center sm:flex-row">
      <Image
        src={img}
        height={580}
        width={580}
        alt="Product-Image"
        className=""
      />
      <div className="everyFlex px-24 gap-4">
        <h1 className=" text-3xl font-bold">{title}</h1>
        <h3 className=" font-light">{type}</h3>
        <p className=" w-50">{body}</p>
      </div>
    </section>
  );
};

export default page;
