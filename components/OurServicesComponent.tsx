import { Button } from "@/components/ui/button";
import { servicesCategory } from "@/consts";
import Image from "next/image";
import Link from "next/link";
import { SubHeading } from "./subcomponents/SubHeading";

export const OurServicesComponent = () => {
  return (
    <section className="everyFlex max-w-7xl m-auto">
      <SubHeading
        heading="Our Services"
        body=" We offer professional web design services at affordable rates to help
        your business attract more visitors and keep them on your site!"
      />

      <p className=" text-center"></p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl m-auto ">
        {servicesCategory.map((card, index) => (
          <div
            key={index}
            className={`border p-12 ${
              index % 3 === 2 ? "sm:col-span-2 md:col-span-1" : ""
            }`}
            style={{
              marginBottom: "1rem",
              marginRight: "1rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              className="mb-4"
              src={card.icon}
              height={41}
              width={44}
              alt={card.title}
            />
            <h4 className="mb-4">{card.title}</h4>
            <p className="mb-4 font-light text-center">{card.body}</p>
            <Button
              className="w-fit hover:bg-[#0669F7] hover:text-white"
              variant="outline"
            >
              <Link href="/contact-us">LEARN MORE</Link>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};
